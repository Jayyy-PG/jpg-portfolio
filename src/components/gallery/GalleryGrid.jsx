import { gallerySections } from '../../data/photos.js';

function text(value, lang) {
  return typeof value === 'string' ? value : value?.[lang] || value?.en || '';
}

function GalleryCard({ photo, index, tint, sectionIndex, photoIndex }) {
  const titleEn = text(photo.title, 'en');
  const titleDe = text(photo.title, 'de');
  const seriesEn = text(photo.series, 'en');
  const seriesDe = text(photo.series, 'de');
  const descEn = text(photo.desc, 'en');
  const descDe = text(photo.desc, 'de');
  return (
    <figure
      className={`frame gallery-reveal frame--${photo.size || 'md'} ${sectionIndex > 0 ? 'frame--compact' : ''}`}
      style={{ '--gallery-reveal-delay': `${Math.min(photoIndex, 5) * 110}ms` }}
      data-tint={photo.tint || tint}
      data-title-en={titleEn}
      data-title-de={titleDe}
      data-series-en={seriesEn}
      data-series-de={seriesDe}
      data-camera={photo.camera}
      data-lens={photo.lens}
      data-iso={photo.iso}
      data-aperture={photo.aperture}
      data-shutter={photo.shutter}
      data-focal={photo.focal}
      data-date={photo.date}
      data-desc-en={descEn}
      data-desc-de={descDe}
    >
      <div className="frame__inner">
        <span className="frame__num">No. {String(index + 1).padStart(2, '0')}</span>
        <image-slot
          id={photo.id}
          shape="rounded"
          radius="0"
          placeholder="Photo"
          src={photo.src}
          style={{
            aspectRatio: photo.aspectRatio || '4 / 5',
            background: '#141414',
          }}
        />
        <figcaption className="frame__cap">
          <div className="frame__cap-l">
            <span className="frame__cap-series">{seriesEn}</span>
            <span className="frame__cap-title">{titleEn}</span>
          </div>
          <div className="frame__cap-r">
            {photo.focal} {'\u00b7'} {photo.aperture}<br />
            ISO {photo.iso} {'\u00b7'} {photo.shutter}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export default function GalleryGrid() {
  let frameIndex = 0;

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
              {section.photos.map((photo, photoIndex) => {
                frameIndex += 1;
                return (
                  <GalleryCard
                    key={photo.id}
                    photo={photo}
                    index={frameIndex - 1}
                    tint={section.tint}
                    sectionIndex={sectionIndex}
                    photoIndex={photoIndex}
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
