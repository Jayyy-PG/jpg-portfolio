import { useState } from 'react';

export default function Hero() {
  const [state, setState] = useState('main');

  const openAbout = () => {
    setState('about');
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  return (
    <>
      <section className="hero" id="top" data-state={state}>
        {/* Darkroom atmosphere — amber safelight + film grain, no colour blobs */}
        <div className="hero__atmos" aria-hidden="true">
          <span className="hero__safelight hero__safelight--high" data-parallax-y="70" data-parallax-x="-24" />
          <span className="hero__safelight hero__safelight--low" data-parallax-y="-90" data-parallax-x="30" />
          <span className="hero__grain" />
        </div>

        {/* Print/photo registration marks framing the exposure */}
        <div className="hero__marks" aria-hidden="true">
          <span className="hero__mark hero__mark--tl" />
          <span className="hero__mark hero__mark--tr" />
          <span className="hero__mark hero__mark--bl" />
          <span className="hero__mark hero__mark--br" />
        </div>

        <div className="hero__grid shell">
          <div className="hero__title">
            <a className="hero__logo hero__logo--svg" href="#top" aria-label="JPG">
              <span className="hero__logo-reveal" aria-hidden="true">
                <img className="hero__logo-img" src="/images/logos/jpg-portfolio-logo.svg" alt="" />
                <span className="hero__logo-dot" />
              </span>
            </a>

            <p className="hero__fullname">Jay Patric Grenacher</p>
            <p className="hero__subrole">
              <span data-show="en">Software Engineer · Photographer · Aargau, CH</span>
              <span data-show="de">Software Engineer · Fotograf · Aargau, CH</span>
            </p>

            <h1 className="hero__tagline">
              <span data-show="en">I develop both — <em>film</em> and <em>software</em>.</span>
              <span data-show="de">Ich entwickle beides — <em>Film</em> und <em>Software</em>.</span>
            </h1>

            <div className="hero__cta">
              <button className="btn btn--lg btn--accent" onClick={openAbout} type="button">
                <span data-show="en">More about me</span>
                <span data-show="de">Mehr über mich</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </button>
              <a className="btn btn--ghost btn--lg" href="#sections">
                <span data-show="en">Explore work</span>
                <span data-show="de">Arbeiten ansehen</span>
              </a>
            </div>
          </div>

          <aside className="hero__portrait">
            <div className="hero__portrait-wrap" id="hero-portrait-wrap">
              <div className="hero__portrait-glow" aria-hidden="true" />
              <image-slot
                id="hero-portrait"
                shape="rounded"
                radius="2"
                fit="cover"
                placeholder="Drop your portrait"
                src="/images/placeholders/portrait.webp"
                style={{ width: '100%', height: '100%', display: 'block', background: '#141414' }}
              />
              <div className="hero__portrait-frame" aria-hidden="true" />
            </div>
          </aside>

          <div className="hero__aboutbox" aria-hidden={state === 'about' ? 'false' : 'true'}>
            <div className="hero__aboutbox-head">
              <span className="eyebrow eyebrow--accent">About me</span>
              <button className="hero__aboutbox-close" onClick={() => setState('main')} type="button" aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              </button>
            </div>

            <h2 className="hero__aboutbox-title">
              <span data-show="en">Hi - I'm Jay.</span>
              <span data-show="de">Hi - ich bin Jay.</span>
            </h2>

            <div className="hero__aboutbox-body">
              <div className="hero__aboutbox-portrait">
                <image-slot
                  id="hero-portrait-about"
                  shape="rounded"
                  radius="10"
                  placeholder="Portrait"
                  src="/images/placeholders/portrait-about.webp"
                  style={{ width: '100%', height: '100%', display: 'block', background: '#141414' }}
                />
              </div>

              <p data-show="en">
                A first-year student at <strong>WISS Zürich</strong>, from Aargau. I build websites and apps that make life easier - currently developing <strong>WISS HUB</strong>, a platform connecting students, projects and companies.
              </p>
              <p data-show="en">
                Before WISS I worked as a <strong>Medientechnologe</strong>, designing flyers, posters and business cards, and editing in <strong>Lightroom &amp; Photoshop</strong>. That print-shop discipline shows up in how I treat type, spacing, and white space.
              </p>
              <p data-show="en">
                Off-screen I'm a huge motorsport fan - F1, <strong>Max Verstappen</strong>, Red Bull - and I race in <strong>Simracing</strong> against pros from a high-end simracing setup.
              </p>
              <p data-show="en">
                The plan: a role at a <strong>big IT company</strong> while running my own projects on the side - I want to build things that quietly help.
              </p>

              <p data-show="de">
                Im ersten Jahr an der <strong>WISS Zürich</strong>, aus dem Aargau. Ich baue Websites und Apps, die das Leben einfacher machen - aktuell entwickle ich <strong>WISS HUB</strong>, eine Plattform, die Studierende, Projekte und Firmen verbindet.
              </p>
              <p data-show="de">
                Vor der WISS habe ich als <strong>Medientechnologe</strong> Flyer, Poster und Visitenkarten gestaltet und in <strong>Lightroom &amp; Photoshop</strong> editiert. Diese Druck-Disziplin sieht man in meinem Umgang mit Typo, Abständen und Weissraum.
              </p>
              <p data-show="de">
                Daneben grosser Motorsport-Fan - F1, <strong>Max Verstappen</strong>, Red Bull - und ich fahre <strong>Simracing</strong> gegen Profis auf einem hochwertigen Simrace/Cockpit-Setup.
              </p>
              <p data-show="de">
                Der Plan: ein Job bei einer <strong>grossen IT-Firma</strong>, parallel meine eigenen Projekte führen - ich will Dinge bauen, die leise helfen.
              </p>
            </div>

            <div className="hero__aboutbox-tags">
              <span>F1</span><span>Verstappen</span><span>Red Bull</span><span>Simracing</span><span>WISS</span><span>Lightroom</span><span>Photoshop</span><span>Print Design</span>
            </div>

            <div className="hero__aboutbox-cta">
              <a className="btn" href="/developer">
                <span data-show="en">My developer page</span><span data-show="de">Meine Entwickler-Seite</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
              <a className="btn btn--ghost" href="/gallery">
                <span data-show="en">My gallery</span><span data-show="de">Meine Galerie</span>
              </a>
            </div>
          </div>

          <div className="hero__scroll">
            <span data-show="en">Scroll</span>
            <span data-show="de">Scrollen</span>
            <span className="hero__scroll-line" />
          </div>
        </div>
      </section>
    </>
  );
}
