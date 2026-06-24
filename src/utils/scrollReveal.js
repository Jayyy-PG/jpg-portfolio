/**
 * Scroll effects — reveal + per-page parallax.
 *
 * Reveal: IntersectionObserver flips `.reveal` and `.gallery-reveal` once.
 *
 * Parallax: a single rAF lerp loop drives every element marked with
 * `data-parallax*`. Performance-critical detail — we never read layout
 * (`getBoundingClientRect`) during the scroll loop. Each element's
 * document-relative centre is measured ONCE up front (and re-measured on
 * resize / page-height change), so the per-frame work is pure math plus one
 * `style.transform` write per element. No interleaved read→write means no
 * forced synchronous reflow, which is what kills smoothness on scroll.
 *
 * The loop only ticks while motion is in progress and is woken by the native
 * scroll event — no idle CPU drain, and it rides the browser's own
 * compositor-driven scroll instead of fighting it.
 *
 * Coordination with reveal: a parallax item inside a `.reveal` element waits
 * until that element has transitioned in before we start writing transforms,
 * so the JS transform doesn't cancel the CSS slide-up entry.
 *
 * Element attributes (all optional, all numeric):
 *   data-parallax-y   peak vertical drift in px (positive ≈ down at bottom)
 *   data-parallax-x   peak horizontal drift in px
 *   data-parallax-r   peak rotation (Z) in degrees
 *   data-parallax-rx  peak rotation (X) in degrees — needs `perspective` on an ancestor
 *   data-parallax-s   peak scale delta (e.g. 0.05 = ±5% size)
 *
 * Page tuning: `document.body.dataset.page` (home | developer | gallery)
 * picks the global ease + depth multiplier from one place.
 */

const PRESETS = {
  home:      { ease: 0.12, depth: 1.00 },
  developer: { ease: 0.11, depth: 1.05 },
  gallery:   { ease: 0.14, depth: 0.55 },
};

// Wait past the longest reveal transition before activating parallax on
// elements that share the transform target, so the CSS entry finishes first.
const REVEAL_DELAY_MS = 1100;
const GALLERY_REVEAL_DELAY_MS = 1380;

export function initScrollEffects() {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const page = document.body.dataset.page || 'home';
  const preset = PRESETS[page] || PRESETS.home;

  // ── Reveal ──────────────────────────────────────────────────────────────
  const revealItems = Array.from(document.querySelectorAll('.reveal'));
  const galleryItems = Array.from(document.querySelectorAll('.gallery-reveal'));

  if (reduceMotion) {
    revealItems.forEach((el) => el.classList.add('in'));
    galleryItems.forEach((el) => el.classList.add('is-visible', 'is-revealed'));
  }

  // ── Parallax items ──────────────────────────────────────────────────────
  const nodes = Array.from(document.querySelectorAll(
    '[data-parallax-y], [data-parallax-x], [data-parallax-r], [data-parallax-rx], [data-parallax-s]'
  ));

  const depthMult = reduceMotion ? 0.35 : preset.depth;
  const ease = preset.ease;
  const EPS = 0.04;

  const items = nodes.map((el) => ({
    el,
    yRange:  parseFloat(el.dataset.parallaxY)  || 0,
    xRange:  parseFloat(el.dataset.parallaxX)  || 0,
    rRange:  parseFloat(el.dataset.parallaxR)  || 0,
    rxRange: parseFloat(el.dataset.parallaxRx) || 0,
    sRange:  parseFloat(el.dataset.parallaxS)  || 0,
    center: 0, // document-relative centre, cached (see measure())
    current: { y: 0, x: 0, r: 0, rx: 0, s: 0 },
    target:  { y: 0, x: 0, r: 0, rx: 0, s: 0 },
    visible: true,
    active: false,
  }));

  // Document-relative top via the offset chain — unaffected by our own
  // transforms (offsetTop is a layout value), so re-measuring is stable even
  // while a parallax/scale transform is applied.
  function documentTop(el) {
    let top = 0;
    let node = el;
    while (node) {
      top += node.offsetTop;
      node = node.offsetParent;
    }
    return top;
  }

  // Batched read pass — the ONLY place layout is read. Called off the scroll
  // path (init / resize / page-height change), never per frame.
  function measure() {
    for (let i = 0; i < items.length; i++) {
      const it = items[i];
      it.center = documentTop(it.el) + it.el.offsetHeight / 2;
    }
  }

  function computeTarget(item, scrollMid, viewportH) {
    // p: -0.5 when element-centre is at viewport top, +0.5 at the bottom.
    const p = (item.center - scrollMid) / viewportH;
    const t = item.target;
    t.y  = -p * item.yRange  * depthMult;
    t.x  =  p * item.xRange  * depthMult;
    t.r  = -p * item.rRange  * depthMult;
    t.rx = -p * item.rxRange * depthMult;
    t.s  = -p * item.sRange  * depthMult;
  }

  function applyTransform(item) {
    const c = item.current;
    const scale = 1 + c.s;
    item.el.style.transform =
      `translate3d(${c.x.toFixed(2)}px, ${c.y.toFixed(2)}px, 0) ` +
      `rotateX(${c.rx.toFixed(3)}deg) ` +
      `rotate(${c.r.toFixed(3)}deg) ` +
      `scale(${scale.toFixed(4)})`;
  }

  function activate(item) {
    if (item.active) return;
    item.active = true;
    // Drop transform from the transition list so each rAF write lands
    // instantly while keeping any opacity entry transition intact.
    item.el.style.transitionProperty = 'opacity';
    item.el.style.willChange = 'transform';
    const viewportH = window.innerHeight || 1;
    computeTarget(item, (window.scrollY || 0) + viewportH / 2, viewportH);
    item.current.y  = item.target.y;
    item.current.x  = item.target.x;
    item.current.r  = item.target.r;
    item.current.rx = item.target.rx;
    item.current.s  = item.target.s;
    applyTransform(item);
  }

  // Map each pending reveal ancestor → the parallax items waiting on it.
  const revealQueue = new Map();
  const galleryRevealQueue = new Map();

  function findPendingAncestor(el, selector, doneClass) {
    let cur = el;
    while (cur && cur !== document.body) {
      if (cur.matches && cur.matches(selector) && !cur.classList.contains(doneClass)) {
        return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  }

  items.forEach((item) => {
    if (reduceMotion) { activate(item); return; }
    const pendingReveal = findPendingAncestor(item.el, '.reveal', 'in');
    const pendingGallery = findPendingAncestor(item.el, '.gallery-reveal', 'is-visible');
    if (pendingReveal) {
      const list = revealQueue.get(pendingReveal) || [];
      list.push(item);
      revealQueue.set(pendingReveal, list);
    } else if (pendingGallery) {
      const list = galleryRevealQueue.get(pendingGallery) || [];
      list.push(item);
      galleryRevealQueue.set(pendingGallery, list);
    } else {
      activate(item);
    }
  });

  // ── Observers ─────────────────────────────────────────────────────────────
  const revealObserver = reduceMotion ? null : new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
      const waiting = revealQueue.get(entry.target);
      if (waiting) {
        window.setTimeout(() => {
          waiting.forEach(activate);
          revealQueue.delete(entry.target);
          requestTick();
        }, REVEAL_DELAY_MS);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -12% 0px' });

  const galleryObserver = reduceMotion ? null : new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      window.setTimeout(() => entry.target.classList.add('is-revealed'), 1300);
      galleryObserver.unobserve(entry.target);
      const waiting = galleryRevealQueue.get(entry.target);
      if (waiting) {
        window.setTimeout(() => {
          waiting.forEach(activate);
          galleryRevealQueue.delete(entry.target);
          requestTick();
        }, GALLERY_REVEAL_DELAY_MS);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

  revealObserver && revealItems.forEach((el) => revealObserver.observe(el));
  galleryObserver && galleryItems.forEach((el) => galleryObserver.observe(el));

  // Track on-screen items so the lerp only walks the active visible set.
  const visObserver = items.length ? new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const item = items.find((it) => it.el === entry.target);
      if (item) item.visible = entry.isIntersecting;
    });
    requestTick();
  }, { rootMargin: '25% 0px 25% 0px' }) : null;
  visObserver && items.forEach((it) => visObserver.observe(it.el));

  // ── rAF loop ──────────────────────────────────────────────────────────────
  let rafId = 0;

  function tick() {
    rafId = 0;
    const viewportH = window.innerHeight || 1;
    const scrollMid = (window.scrollY || 0) + viewportH / 2;
    let moving = false;

    // Single pass: cached centre means no layout read, so compute + write in
    // one loop without triggering reflow.
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (!item.active || !item.visible) continue;
      computeTarget(item, scrollMid, viewportH);

      const c = item.current;
      const t = item.target;
      c.y  += (t.y  - c.y)  * ease;
      c.x  += (t.x  - c.x)  * ease;
      c.r  += (t.r  - c.r)  * ease;
      c.rx += (t.rx - c.rx) * ease;
      c.s  += (t.s  - c.s)  * ease;

      if (
        Math.abs(t.y  - c.y)  > EPS ||
        Math.abs(t.x  - c.x)  > EPS ||
        Math.abs(t.r  - c.r)  > EPS * 0.5 ||
        Math.abs(t.rx - c.rx) > EPS * 0.5 ||
        Math.abs(t.s  - c.s)  > EPS * 0.002
      ) moving = true;

      applyTransform(item);
    }

    if (moving) rafId = window.requestAnimationFrame(tick);
  }

  function requestTick() {
    if (!rafId) rafId = window.requestAnimationFrame(tick);
  }

  // Re-measure when layout can shift: viewport resize, late image/font loads,
  // or any body height change (reveal sections, etc.). ResizeObserver coalesces
  // these, so this stays off the scroll hot-path.
  let measureScheduled = false;
  function scheduleMeasure() {
    if (measureScheduled) return;
    measureScheduled = true;
    window.requestAnimationFrame(() => {
      measureScheduled = false;
      measure();
      requestTick();
    });
  }

  measure();
  requestTick();

  const bodyObserver = items.length ? new ResizeObserver(scheduleMeasure) : null;
  bodyObserver && bodyObserver.observe(document.body);

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', scheduleMeasure);
  window.addEventListener('load', scheduleMeasure);

  return () => {
    revealObserver && revealObserver.disconnect();
    galleryObserver && galleryObserver.disconnect();
    visObserver && visObserver.disconnect();
    bodyObserver && bodyObserver.disconnect();
    window.removeEventListener('scroll', requestTick);
    window.removeEventListener('resize', scheduleMeasure);
    window.removeEventListener('load', scheduleMeasure);
    if (rafId) window.cancelAnimationFrame(rafId);
  };
}
