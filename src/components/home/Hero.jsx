import { useState } from 'react';
import { useLang } from '../../utils/lang.js';
import { prefersReducedMotion } from '../../utils/motion.js';

const PORTRAIT_ALT = {
  en: 'Jay Patric Grenacher, portrait taken outdoors.',
  de: 'Jay Patric Grenacher, Porträt im Freien.',
};

const ABOUT_PORTRAIT_ALT = {
  en: 'Jay Patric Grenacher, second portrait.',
  de: 'Jay Patric Grenacher, zweites Porträt.',
};

export default function Hero() {
  const [state, setState] = useState('main');
  const lang = useLang();

  const openAbout = () => {
    setState('about');
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
    });
  };

  return (
    <>
      <section className="hero" id="top" data-state={state}>
        {/* Darkroom atmosphere — amber safelight + film grain, no colour blobs */}
        <div className="hero__atmos" aria-hidden="true">
          <span className="hero__safelight hero__safelight--high" />
          <span className="hero__safelight hero__safelight--low" />
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
                placeholder="Portrait"
                src="/images/placeholders/portrait.webp"
                alt={PORTRAIT_ALT[lang] || PORTRAIT_ALT.en}
                loading="eager"
                decoding="async"
                fetchpriority="high"
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
              <span data-show="en">Hi, I'm Jay.</span>
              <span data-show="de">Hi, ich bin Jay.</span>
            </h2>

            <div className="hero__aboutbox-body">
              <div className="hero__aboutbox-portrait">
                <image-slot
                  id="hero-portrait-about"
                  shape="rounded"
                  radius="10"
                  placeholder="Portrait"
                  src="/images/placeholders/portrait-about.webp"
                  alt={ABOUT_PORTRAIT_ALT[lang] || ABOUT_PORTRAIT_ALT.en}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', display: 'block', background: '#141414' }}
                />
              </div>

              <p data-show="en">
                I'm a second-year <strong>Informatiker EFZ</strong> student specializing in Application Development at <strong>WISS</strong> in Zurich, Switzerland. I'm based in Aargau and currently working on projects including <strong>WISS HUB</strong>, a platform connecting students, projects, and companies.
              </p>
              <p data-show="en">
                Before that, I worked in <strong>print and media</strong>, designing flyers, posters, and business cards and using <strong>Photoshop, Lightroom, and InDesign</strong>. That experience still shapes how I think about typography, spacing, and clear layouts.
              </p>
              <p data-show="en">
                Away from code, I'm into <strong>motorsport</strong>, photography, and sim racing.
              </p>
              <p data-show="en">
                My goal is to keep growing as a software developer while continuing to build my own projects.
              </p>

              <p data-show="de">
                Ich bin im zweiten Lehrjahr meiner Ausbildung zum <strong>Informatiker EFZ</strong> mit Fachrichtung Applikationsentwicklung an der <strong>WISS</strong> in Zürich und komme aus dem Aargau. Aktuell arbeite ich unter anderem an <strong>WISS HUB</strong>, einer Plattform, die Studierende, Projekte und Unternehmen miteinander verbindet.
              </p>
              <p data-show="de">
                Davor war ich im <strong>Print- und Medienbereich</strong> tätig. Dort habe ich Flyer, Poster und Visitenkarten gestaltet und mit <strong>Photoshop, Lightroom und InDesign</strong> gearbeitet. Diese Erfahrung prägt bis heute meinen Blick für Typografie, Abstände und klare Layouts.
              </p>
              <p data-show="de">
                Abseits vom Code bin ich grosser <strong>Motorsport</strong>-Fan, fotografiere gerne und fahre regelmässig Simracing.
              </p>
              <p data-show="de">
                Mein Ziel ist, mich in der Softwareentwicklung weiterzuentwickeln und gleichzeitig eigene Projekte umzusetzen.
              </p>
            </div>

            <p className="hero__aboutbox-tags">
              <span data-show="en">Away from code: F1, sim racing, and a camera that's usually with me.</span>
              <span data-show="de">Abseits vom Code: F1, Simracing und eine Kamera, die meistens dabei ist.</span>
            </p>

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
