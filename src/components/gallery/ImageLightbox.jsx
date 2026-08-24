import { useEffect, useRef } from 'react';

const markup = "<!-- Lightbox -->\n<div class=\"lb\" id=\"lightbox\" hidden aria-hidden=\"true\">\n  <div class=\"lb__backdrop\" data-close></div>\n  <button class=\"lb__close\" data-close aria-label=\"Close\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M18 6 6 18M6 6l12 12\"/></svg>\n  </button>\n  <button class=\"lb__nav lb__nav--prev\" data-prev aria-label=\"Previous\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M15 6l-6 6 6 6\"/></svg>\n  </button>\n  <button class=\"lb__nav lb__nav--next\" data-next aria-label=\"Next\">\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"><path d=\"M9 6l6 6-6 6\"/></svg>\n  </button>\n\n  <div class=\"lb__stage\">\n    <div class=\"lb__image\"><img id=\"lb-img\" alt=\"\" /></div>\n    <aside class=\"lb__panel\">\n      <div class=\"lb__num\" id=\"lb-num\">01 / 09</div>\n      <h2 class=\"lb__title\" id=\"lb-title\"></h2>\n      <div class=\"lb__series\" id=\"lb-series\"></div>\n      <p class=\"lb__desc\" id=\"lb-desc\"></p>\n      <dl class=\"lb__exif\">\n        <div><dt data-show=\"en\">Camera</dt><dt data-show=\"de\">Kamera</dt><dd id=\"lb-camera\"></dd></div>\n        <div><dt data-show=\"en\">Lens</dt><dt data-show=\"de\">Objektiv</dt><dd id=\"lb-lens\"></dd></div>\n        <div><dt>ISO</dt><dd id=\"lb-iso\"></dd></div>\n        <div><dt data-show=\"en\">Aperture</dt><dt data-show=\"de\">Blende</dt><dd id=\"lb-aperture\"></dd></div>\n        <div><dt data-show=\"en\">Shutter</dt><dt data-show=\"de\">Verschluss</dt><dd id=\"lb-shutter\"></dd></div>\n        <div><dt data-show=\"en\">Focal length</dt><dt data-show=\"de\">Brennweite</dt><dd id=\"lb-focal\"></dd></div>\n        <div><dt data-show=\"en\">Date</dt><dt data-show=\"de\">Datum</dt><dd id=\"lb-date\"></dd></div>\n      </dl>\n    </aside>\n  </div>\n</div>";

export default function ImageLightbox() {
  const ref = useRef(null);

  useEffect(() => {
    const lb = ref.current?.querySelector('#lightbox');
    const lbImg = ref.current?.querySelector('#lb-img');
    const figs = [...document.querySelectorAll('.frame')];
    if (!lb || !lbImg || figs.length === 0) return undefined;

    let idx = 0;
    let hideTimer = null;
    const cleanups = [];

    function readImg(figure) {
      const slot = figure.querySelector('image-slot');
      if (slot) {
        const inner = slot.shadowRoot && slot.shadowRoot.querySelector('img');
        if (inner && inner.src) return inner.src;
        const src = slot.getAttribute('src');
        if (src) return src;
      }
      return '';
    }

    function ds(figure, key) {
      const lang = document.documentElement.dataset.lang || 'en';
      return figure.dataset[key + (lang === 'de' ? 'De' : 'En')] || figure.dataset[key + 'En'] || '';
    }

    function open(nextIndex) {
      idx = (nextIndex + figs.length) % figs.length;
      const figure = figs[idx];
      lbImg.src = readImg(figure);
      lb.querySelector('#lb-num').textContent = String(idx + 1).padStart(2, '0') + ' / ' + String(figs.length).padStart(2, '0');
      lb.querySelector('#lb-title').textContent = ds(figure, 'title');
      lb.querySelector('#lb-series').textContent = ds(figure, 'series');
      lb.querySelector('#lb-desc').textContent = ds(figure, 'desc');
      lb.querySelector('#lb-camera').textContent = figure.dataset.camera || '-';
      lb.querySelector('#lb-lens').textContent = figure.dataset.lens || '-';
      lb.querySelector('#lb-iso').textContent = figure.dataset.iso || '-';
      lb.querySelector('#lb-aperture').textContent = figure.dataset.aperture || '-';
      lb.querySelector('#lb-shutter').textContent = figure.dataset.shutter || '-';
      lb.querySelector('#lb-focal').textContent = figure.dataset.focal || '-';
      lb.querySelector('#lb-date').textContent = figure.dataset.date || '-';
      lb.hidden = false;
      lb.setAttribute('aria-hidden', 'false');
      window.clearTimeout(hideTimer);
      requestAnimationFrame(() => lb.classList.add('is-open'));
      document.body.style.overflow = 'hidden';
    }

    function close() {
      lb.classList.remove('is-open');
      lb.setAttribute('aria-hidden', 'true');
      hideTimer = window.setTimeout(() => { lb.hidden = true; }, 280);
      document.body.style.overflow = '';
    }

    figs.forEach((figure, index) => {
      const handler = () => open(index);
      figure.addEventListener('click', handler);
      cleanups.push(() => figure.removeEventListener('click', handler));
    });

    const closeHandler = (event) => { if (event.target.closest('[data-close]')) close(); };
    const prevButton = lb.querySelector('[data-prev]');
    const nextButton = lb.querySelector('[data-next]');
    const prevHandler = () => open(idx - 1);
    const nextHandler = () => open(idx + 1);
    const keyHandler = (event) => {
      if (lb.hidden) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowLeft') open(idx - 1);
      if (event.key === 'ArrowRight') open(idx + 1);
    };

    lb.addEventListener('click', closeHandler);
    prevButton?.addEventListener('click', prevHandler);
    nextButton?.addEventListener('click', nextHandler);
    document.addEventListener('keydown', keyHandler);

    return () => {
      cleanups.forEach((fn) => fn());
      lb.removeEventListener('click', closeHandler);
      prevButton?.removeEventListener('click', prevHandler);
      nextButton?.removeEventListener('click', nextHandler);
      document.removeEventListener('keydown', keyHandler);
      document.body.style.overflow = '';
      window.clearTimeout(hideTimer);
    };
  }, []);

  return <div ref={ref} dangerouslySetInnerHTML={{ __html: markup }} />;
}
