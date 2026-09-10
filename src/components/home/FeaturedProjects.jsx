import { useLang } from '../../utils/lang.js';

const stackPreview = ['HTML', 'CSS', 'JavaScript', 'Python'];

const photoStack = [
  {
    id: 'photo-feat-a', modifier: 'a', src: '/images/gallery/thumbnails/night-run.webp',
    aspect: '4/5', placeholder: 'Photo', y: '18', r: '-1.2',
    alt: { en: 'Runner at night.', de: 'Läufer bei Nacht.' },
  },
  {
    id: 'photo-feat-b', modifier: 'b', src: '/images/gallery/thumbnails/photo-preview-b.webp',
    aspect: '3/4', placeholder: 'Photo', y: '26', r: '1.6',
    alt: { en: 'Photograph from the gallery.', de: 'Aufnahme aus der Galerie.' },
  },
  {
    id: 'photo-feat-c', modifier: 'c', src: '/images/gallery/thumbnails/photo-preview-c.webp',
    aspect: '5/4', placeholder: 'Photo', y: '34', r: '-2',
    alt: { en: 'Photograph from the gallery.', de: 'Aufnahme aus der Galerie.' },
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
  );
}

/* The code card is a <pre>: every newline and leading space below is
   significant, so the whitespace is written as explicit string children
   rather than left to JSX, which would collapse it. */
function CodeCard() {
  return (
    <pre className="codecard__body">
      <span className="c-c">// code, cameras, and where it started</span>{'\n'}
      <span className="c-k">const</span>{' '}<span className="c-v">jay</span>{' = {\n  '}
      <span className="c-p">building</span>{': ['}
      <span className="c-s">"WISS HUB"</span>{', '}<span className="c-s">"GlattTube"</span>{'],\n  '}
      <span className="c-p">shoots</span>{': ['}
      <span className="c-s">"motorsport"</span>{', '}<span className="c-s">"portraits"</span>{'],\n  '}
      <span className="c-p">background</span>{': '}<span className="c-s">"print & media design"</span>{',\n'}
      {'};'}
    </pre>
  );
}

export default function FeaturedProjects() {
  const lang = useLang();

  return (
    <>
      <div className="sections-anchor" id="sections" />

      <section className="section section--coding reveal" id="coding">
        <div className="shell section__grid">
          <div className="section__num">01 / 04</div>
          <h2 className="section__title" data-parallax-y="-10">
            <span data-show="en">Code &amp; Craft</span>
            <span data-show="de">Code &amp; Handwerk</span>
          </h2>
          <p className="section__lead">
            <span data-show="en">Full-Stack Developer · Website Designer · Builder of small useful things.</span>
            <span data-show="de">Full-Stack Entwickler · Webdesigner · Baut kleine nützliche Dinge.</span>
          </p>

          <div className="section__media">
            <div className="codecard" data-parallax-y="22" data-parallax-r="-1">
              <div className="codecard__chrome">
                <span /><span /><span />
                <i>jpg.dev — jay.js</i>
              </div>
              <CodeCard />
            </div>
          </div>

          <div className="section__skills">
            <span className="section__skills-label">
              <span data-show="en">Working with</span>
              <span data-show="de">Aktuell im Einsatz</span>
            </span>
            <p className="section__skills-list">
              {stackPreview.map((name, i) => (
                <span key={name}>
                  {i > 0 && <span className="section__skills-sep" aria-hidden="true"> · </span>}
                  {name}
                </span>
              ))}
            </p>
          </div>

          <div className="section__cta">
            <a className="btn" href="/developer">
              <span data-show="en">Developer page</span>
              <span data-show="de">Entwickler-Seite</span>
              <ArrowIcon />
            </a>
            <a className="btn btn--ghost" href="/developer#projects">
              <span data-show="en">See projects</span>
              <span data-show="de">Projekte</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section--photo reveal" id="photo">
        <div className="shell section__grid">
          <div className="section__num">02 / 04</div>
          <h2 className="section__title" data-parallax-y="-10">
            <span data-show="en">Through the lens</span>
            <span data-show="de">Durch die Linse</span>
          </h2>
          <p className="section__lead">
            <span data-show="en">Motorsport, nature, and portraits. Shot and edited by me — JPG stands for both the file format and my initials.</span>
            <span data-show="de">Motorsport, Natur und Porträts. Fotografiert und bearbeitet von mir — JPG steht dabei zugleich für das Dateiformat und meine Initialen.</span>
          </p>

          <div className="section__media photo-stack">
            {photoStack.map((photo) => (
              <div
                className={`photo-stack__item photo-stack__item--${photo.modifier}`}
                data-parallax-y={photo.y}
                data-parallax-r={photo.r}
                key={photo.id}
              >
                <image-slot
                  id={photo.id}
                  shape="rounded"
                  radius="4"
                  placeholder={photo.placeholder}
                  src={photo.src}
                  alt={photo.alt[lang] || photo.alt.en}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', aspectRatio: photo.aspect, background: '#141414' }}
                />
              </div>
            ))}
          </div>

          <div className="section__cta">
            <a className="btn" href="/gallery">
              <span data-show="en">Open gallery</span>
              <span data-show="de">Galerie öffnen</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
