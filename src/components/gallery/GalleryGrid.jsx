import { gallerySections, thumbnailFor } from '../../data/photos.js';
import { t, useLang } from '../../utils/lang.js';

/**
 * Images above the fold should start loading immediately; everything further
 * down waits until it is near the viewport. The first row of the first
 * section is the only part reliably visible on load.
 */
const EAGER_COUNT = 2;

// Where each section starts in the flat photo list. Computed once at module
// level so the render pass stays free of running counters.
const SECTION_OFFSETS = (() => {
  const offsets = [];
  let total = 0;
  for (const section of gallerySections) {
    offsets.push(total);
    total += section.photos.length;
  }
  return offsets;
})();

function GalleryCard({ photo, index, tint, sectionIndex, photoIndex, lang, onOpen }) {
  const title = t(photo.title, lang);
  const eager = index < EAGER_COUNT;

  return (
    <figure
      className={`frame gallery-reveal frame--${photo.size || 'md'} ${sectionIndex > 0 ? 'frame--compact' : ''}`}
      style={{ '--gallery-reveal-delay': `${Math.min(photoIndex, 5) * 110}ms` }}
      data-tint={photo.tint || tint}
    >
      <div className="frame__inner">
        <span className="frame__num">No. {String(index + 1).padStart(2, '0')}</span>

        {/* A real button, so the card is reachable by Tab and responds to
            Enter and Space without re-implementing either. */}
        <button
          type="button"
          className="frame__open"
          onClick={(event) => onOpen(index, event.currentTarget)}
          aria-label={`${title} — ${lang === 'de' ? 'grösser anzeigen' : 'view larger'}`}
        >
          <image-slot
            id={photo.id}
            shape="rounded"
            radius="0"
            placeholder="Photo"
            src={thumbnailFor(photo.src)}
            alt={t(photo.alt, lang)}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={eager ? 'high' : 'low'}
            style={{
              aspectRatio: photo.aspectRatio || '4 / 5',
              background: '#141414',
            }}
          />
        </button>

        <figcaption className="frame__cap">
          <div className="frame__cap-l">
            <span className="frame__cap-series">
              <span data-show="en">{t(photo.series, 'en')}</span>
              <span data-show="de">{t(photo.series, 'de')}</span>
            </span>
            <span className="frame__cap-title">
              <span data-show="en">{t(photo.title, 'en')}</span>
              <span data-show="de">{t(photo.title, 'de')}</span>
            </span>
          </div>
          <div className="frame__cap-r">
            {photo.focal} {'·'} {photo.aperture}<br />
            ISO {photo.iso} {'·'} {photo.shutter}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default function GalleryGrid({ onOpen }) {
  const lang = useLang();

  return (
    <section className="gal-wall">
      <div className="shell">
        {gallerySections.map((section, sectionIndex) => (
          <div className="gal-section" key={section.title.en}>
            <header className="gal-row-head reveal" data-parallax-y="-14">
              <div className="gal-row-head__num">
                {String(sectionIndex + 1).padStart(2, '0')} / {String(gallerySections.length).padStart(2, '0')}
              </div>
              <h2 className="gal-row-head__title">
                <span data-show="en">{section.title.en}</span>
                <span data-show="de">{section.title.de}</span>
              </h2>
              <div className="gal-row-head__meta">{section.meta}</div>
            </header>

            <div className="gal-section__grid">
              {section.photos.map((photo, photoIndex) => (
                <GalleryCard
                  key={photo.id}
                  photo={photo}
                  index={SECTION_OFFSETS[sectionIndex] + photoIndex}
                  tint={section.tint}
                  sectionIndex={sectionIndex}
                  photoIndex={photoIndex}
                  lang={lang}
                  onOpen={onOpen}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
