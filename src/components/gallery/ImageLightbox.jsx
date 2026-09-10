import { useCallback, useEffect, useRef, useState } from 'react';
import { t, useLang } from '../../utils/lang.js';

const CLOSE_TRANSITION_MS = 280;

const LABELS = {
  close: { en: 'Close', de: 'Schliessen' },
  prev: { en: 'Previous image', de: 'Vorheriges Bild' },
  next: { en: 'Next image', de: 'Nächstes Bild' },
  dialog: { en: 'Photo viewer', de: 'Bildansicht' },
  camera: { en: 'Camera', de: 'Kamera' },
  lens: { en: 'Lens', de: 'Objektiv' },
  aperture: { en: 'Aperture', de: 'Blende' },
  shutter: { en: 'Shutter', de: 'Verschluss' },
  focal: { en: 'Focal length', de: 'Brennweite' },
  date: { en: 'Date', de: 'Datum' },
};

const FOCUSABLE = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 * Modal photo viewer.
 *
 * Behaves like a dialog rather than merely looking like one: it is labelled
 * and described for assistive technology, takes focus on open, keeps Tab
 * inside itself while it is open, closes on Escape, and hands focus back to
 * the thumbnail that opened it.
 */
export default function ImageLightbox({ photos, index, onClose, onPrev, onNext }) {
  const lang = useLang();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);

  const isOpen = index !== null;

  // The photo currently on screen. Held in state rather than read from
  // `index` directly so the closing fade keeps showing the photo the viewer
  // was looking at instead of snapping back to the first one.
  const [shownIndex, setShownIndex] = useState(0);
  if (isOpen && index !== shownIndex) setShownIndex(index);

  // `shown` drives the fade, `lingering` keeps the element in the layout for
  // the length of that fade. Both are flipped from async callbacks so the
  // browser gets a frame with the element displayed but still transparent —
  // without it there is nothing to transition from.
  const [shown, setShown] = useState(false);
  const [lingering, setLingering] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const raf = window.requestAnimationFrame(() => {
        setLingering(true);
        setShown(true);
      });
      return () => window.cancelAnimationFrame(raf);
    }
    const raf = window.requestAnimationFrame(() => setShown(false));
    const timer = window.setTimeout(() => setLingering(false), CLOSE_TRANSITION_MS);
    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
  }, [isOpen]);

  // Move focus into the dialog once it is visible.
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
  }, [isOpen]);

  // Lock background scrolling for as long as the dialog is up. Restoring the
  // previous value rather than clearing it avoids clobbering anything else
  // that may have set it.
  useEffect(() => {
    if (!isOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previous; };
  }, [isOpen]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      onClose();
      return;
    }
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      onPrev();
      return;
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      onNext();
      return;
    }
    if (event.key !== 'Tab') return;

    // Focus trap: cycle within the dialog so the page behind stays
    // unreachable by keyboard while the dialog is open.
    const focusable = Array.from(dialogRef.current?.querySelectorAll(FOCUSABLE) || [])
      .filter((el) => el.getClientRects().length > 0);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (!isOpen) return undefined;
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  // Not rendered at all until it is opened. A hidden <img> still downloads,
  // and these are the full-size files — mounting on demand keeps them off the
  // initial page load entirely.
  if (!isOpen && !lingering) return null;

  const photo = photos[shownIndex];
  if (!photo) return null;

  const label = (key) => LABELS[key][lang] || LABELS[key].en;

  return (
    <div
      className={`lb${shown ? ' is-open' : ''}`}
      id="lightbox"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lb-title"
      aria-describedby="lb-desc"
    >
      <div className="lb__backdrop" onClick={onClose} aria-hidden="true" />

      <button className="lb__close" type="button" onClick={onClose} aria-label={label('close')} ref={closeRef}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      <button className="lb__nav lb__nav--prev" type="button" onClick={onPrev} aria-label={label('prev')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
      </button>
      <button className="lb__nav lb__nav--next" type="button" onClick={onNext} aria-label={label('next')}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
      </button>

      <div className="lb__stage">
        <div className="lb__image">
          <img id="lb-img" src={photo.src} alt={t(photo.alt, lang)} decoding="async" />
        </div>
        <aside className="lb__panel">
          <div className="lb__num">
            {String(shownIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </div>
          <h2 className="lb__title" id="lb-title">{t(photo.title, lang)}</h2>
          <div className="lb__series">{t(photo.series, lang)}</div>
          <p className="lb__desc" id="lb-desc">{t(photo.desc, lang)}</p>
          <dl className="lb__exif">
            <div><dt>{label('camera')}</dt><dd>{photo.camera || '-'}</dd></div>
            <div><dt>{label('lens')}</dt><dd>{photo.lens || '-'}</dd></div>
            <div><dt>ISO</dt><dd>{photo.iso || '-'}</dd></div>
            <div><dt>{label('aperture')}</dt><dd>{photo.aperture || '-'}</dd></div>
            <div><dt>{label('shutter')}</dt><dd>{photo.shutter || '-'}</dd></div>
            <div><dt>{label('focal')}</dt><dd>{photo.focal || '-'}</dd></div>
            <div><dt>{label('date')}</dt><dd>{photo.date || '-'}</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  );
}
