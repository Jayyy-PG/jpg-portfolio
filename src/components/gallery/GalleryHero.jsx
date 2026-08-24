export default function GalleryHero() {
  return (
    <>
      <section className="gal-hero">
        <div className="gal-hero__bg" aria-hidden="true">
          <span data-parallax-y="90" data-parallax-x="-40" />
          <span data-parallax-y="-70" data-parallax-x="50" />
          <span data-parallax-y="50" data-parallax-s="0.1" />
        </div>
        <div className="shell gal-hero__inner">
          <span className="eyebrow" data-parallax-y="-10">Gallery / 2023 - 2026</span>
          <h1 className="gal-hero__title" data-parallax-y="-30" data-parallax-s="-0.04">
            <span data-show="en">
              Frames by
              <span className="gal-hero__title-logo" aria-label="JPG">
                <img src="/images/logos/jpg-portfolio-logo.svg" alt="" />
                <span aria-hidden="true" />
              </span>
            </span>
            <span data-show="de">
              Bilder von
              <span className="gal-hero__title-logo" aria-label="JPG">
                <img src="/images/logos/jpg-portfolio-logo.svg" alt="" />
                <span aria-hidden="true" />
              </span>
            </span>
          </h1>
        </div>
      </section>

      <div className="gal-tags" aria-hidden="true">
        <div className="gal-tags__row">
          <span>Motorsport</span><span>Nature</span><span>Portrait</span><span>Lifestyle</span><span>Vibe</span><span>Studio</span>
        </div>
      </div>
    </>
  );
}
