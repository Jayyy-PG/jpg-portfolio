/**
 * <image-slot> — a framed, cropped image.
 *
 * Wraps an <img> in a shadow root so the shape (rounded, circle, pill or an
 * arbitrary clip-path) and the crop are declared per slot, and so a missing
 * file degrades to a labelled placeholder instead of a broken-image icon.
 * Size and layout come from ordinary CSS on the element itself, so it
 * composes with any grid or flex parent.
 *
 * Attributes:
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that is an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.        (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use it for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *   position     object-position.                          (default '50% 50%')
 *   placeholder  Caption shown when `src` is absent or fails to load.
 *   src          Image URL.
 *
 * Usage:
 *   <image-slot src="/images/placeholders/portrait.webp" shape="rounded"
 *               radius="20" style="width:800px;height:450px"></image-slot>
 */

(() => {
  const stylesheet =
    ':host{display:inline-block;position:relative;vertical-align:top;' +
    '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' +
    '  width:240px;height:160px}' +
    '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
    '.frame img{position:absolute;inset:0;width:100%;height:100%;' +
    '  -webkit-user-drag:none;user-select:none}' +
    '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' +
    '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' +
    '  user-select:none}' +
    '.empty svg{opacity:.45}' +
    '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' +
    // Dashed outline marks an unfilled slot; it would only get in the way
    // once there is an image, and a rectangular dash chopped by an arbitrary
    // clip-path looks broken, so it is hidden in both cases.
    '.ring{position:absolute;inset:0;pointer-events:none;' +
    '  border:1.5px dashed rgba(0,0,0,.25)}' +
    ':host([data-filled]) .ring{display:none}';

  const icon =
    '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' +
    '<path d="m21 15-5-5L5 21"/></svg>';

  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src'];
    }

    constructor() {
      super();
      const root = this.attachShadow({ mode: 'open' });
      root.innerHTML =
        '<style>' + stylesheet + '</style>' +
        '<div class="frame" part="frame">' +
        '  <img part="image" alt="" draggable="false" style="display:none">' +
        '  <div class="empty" part="empty">' + icon + '<div class="cap"></div></div>' +
        '  <div class="ring" part="ring"></div>' +
        '</div>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._failedSrc = '';

      // A file that 404s falls back to the placeholder, so images can be
      // added incrementally without the page showing a broken icon.
      this._img.addEventListener('error', () => {
        this._failedSrc = this.getAttribute('src') || '';
        this._render();
      });
    }

    connectedCallback() {
      this._render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue === newValue) return;
      if (name === 'src') this._failedSrc = '';
      if (this.isConnected) this._render();
    }

    _render() {
      // Presets use border-radius so the ring can follow the rounded outline;
      // clip-path is only applied for an explicit `mask`.
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';
      else if (shape === 'pill') radius = '9999px';
      else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      this._img.style.objectFit = this.getAttribute('fit') || 'cover';
      this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
      this._cap.textContent = this.getAttribute('placeholder') || 'Image';

      const src = this.getAttribute('src') || '';
      const url = src && src !== this._failedSrc ? src : '';
      // Toggled via style.display — the [hidden] attribute alone loses to the
      // display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) this._img.src = url;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }

  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
