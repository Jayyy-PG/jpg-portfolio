const ICONS = '/images/icons';

const stackPreview = [
  { name: 'HTML', label: 'HTML', icon: 'html5' },
  { name: 'CSS', label: 'CSS', icon: 'css3' },
  { name: 'JavaScript', label: 'JS', icon: 'javascript' },
  { name: 'Python', label: 'Python', icon: 'python' },
];

const photoStack = [
  { id: 'photo-feat-a', modifier: 'a', src: '/images/gallery/large/night-run.webp', aspect: '4/5', placeholder: 'Hero photo', y: '60', r: '-2.6' },
  { id: 'photo-feat-b', modifier: 'b', src: '/images/gallery/large/photo-preview-b.webp', aspect: '3/4', placeholder: 'Photo', y: '110', r: '3.6' },
  { id: 'photo-feat-c', modifier: 'c', src: '/images/gallery/large/photo-preview-c.webp', aspect: '5/4', placeholder: 'Photo', y: '160', r: '-4.6' },
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
      <span className="c-c">// shipping things that help people.</span>{'\n'}
      <span className="c-k">const</span>{' '}<span className="c-v">jpg</span>{' = {\n  '}
      <span className="c-p">stack</span>{': ['}
      <span className="c-s">"HTML"</span>{', '}<span className="c-s">"CSS"</span>{', '}
      <span className="c-s">"JS"</span>{', '}<span className="c-s">"Python"</span>{'],\n  '}
      <span className="c-p">building</span>{': '}<span className="c-s">"WISS HUB"</span>{',\n  '}
      <span className="c-p">loves</span>{': ['}
      <span className="c-s">"clean UI"</span>{', '}<span className="c-s">"calm code"</span>{'],\n'}
      {'};'}
    </pre>
  );
}

export default function FeaturedProjects() {
  return (
    <>
      <div className="sections-anchor" id="sections" />

      <section className="section section--coding reveal" id="coding">
        <div className="shell section__grid">
          <div className="section__num" data-parallax-y="-12">01 / 04</div>
          <h2 className="section__title" data-parallax-y="-26">
            <span data-show="en">Code &amp; Craft</span>
            <span data-show="de">Code &amp; Handwerk</span>
          </h2>
          <p className="section__lead" data-parallax-y="-14">
            <span data-show="en">Full-Stack Developer · Website Designer · Builder of small useful things.</span>
            <span data-show="de">Full-Stack Entwickler · Webdesigner · Baut kleine nützliche Dinge.</span>
          </p>

          <div className="section__media">
            <div className="codecard" data-parallax-y="90" data-parallax-r="-2.4">
              <div className="codecard__chrome">
                <span /><span /><span />
                <i>jpg.dev — wiss-hub</i>
              </div>
              <CodeCard />
              <div className="codecard__chips">
                <span className="chip">Full-Stack</span>
                <span className="chip">Web Design</span>
                <span className="chip">UX</span>
                <span className="chip">Tooling</span>
              </div>
            </div>
          </div>

          <div className="section__skills" aria-label="Stack preview">
            {stackPreview.map((item) => (
              <div className="skill" key={item.name}>
                <img alt={item.name} src={`${ICONS}/${item.icon}.svg`} />
                <span>{item.label}</span>
              </div>
            ))}
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
          <div className="section__num" data-parallax-y="-12">02 / 04</div>
          <h2 className="section__title" data-parallax-y="-26">
            <span data-show="en">Through the lens</span>
            <span data-show="de">Durch die Linse</span>
          </h2>
          <p className="section__lead" data-parallax-y="-14">
            <span data-show="en">Motorsport, nature &amp; portraits. Shot, edited &amp; framed by JPG — the file format and the photographer.</span>
            <span data-show="de">Motorsport, Natur &amp; Porträts. Fotografiert, bearbeitet und gerahmt von JPG — das Dateiformat und der Fotograf.</span>
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
