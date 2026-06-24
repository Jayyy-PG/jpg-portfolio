export default function ProjectsSection() {
  return (
    <section className="projects reveal" id="projects">
      <div className="shell">
        <div className="projects__head" data-parallax-y="-30">
          <span className="eyebrow">03 / Projects</span>
          <h2 className="projects__title">
            <span data-show="en">Things I'm building.</span>
            <span data-show="de">Was ich gerade baue.</span>
          </h2>
        </div>

        <article className="project reveal">
          <div className="project__num">01</div>
          <div className="project__media" data-parallax-y="46" data-parallax-rx="11" data-parallax-s="-0.04">
            <image-slot id="proj-wisshub" shape="rounded" radius="6" placeholder="WISS HUB screenshot" src="/images/projects/wiss-hub.webp" style={{ width: '100%', aspectRatio: '16/10', background: '#141414' }} />
          </div>
          <div className="project__copy">
            <h3 className="project__name">WISS HUB</h3>
            <span className="project__tag">
              <span data-show="en">Web platform &middot; In development</span>
              <span data-show="de">Web-Plattform &middot; In Entwicklung</span>
            </span>
            <p className="project__lead" data-show="en">
              A modern web platform for WISS students to <strong>showcase their skills and projects</strong>, connect with other students, and get discovered by companies for internships. Combines student profiles, project visibility, communication and internship opportunities in one professional, easy-to-use platform.
            </p>
            <p className="project__lead" data-show="de">
              Eine moderne Web-Plattform, auf der WISS-Studierende ihre <strong>Skills und Projekte zeigen</strong>, sich vernetzen und von Firmen für Praktika entdeckt werden. Profile, Projekt-Sichtbarkeit, Kommunikation und Praktikums-Angebote, alles in einer professionellen, einfach nutzbaren Plattform.
            </p>
            <div className="project__cta">
              <span className="btn btn--ghost project__cta-disabled">
                <span data-show="en">Coming soon</span><span data-show="de">Bald verfügbar</span>
              </span>
            </div>
          </div>
        </article>

        <article className="project project--alt reveal">
          <div className="project__num">02</div>
          <div className="project__media" data-parallax-y="46" data-parallax-rx="-11" data-parallax-s="-0.04">
            <image-slot id="proj-glatthub" shape="rounded" radius="6" placeholder="GLATT HUB screenshot" src="/images/projects/glatt-hub.webp" style={{ width: '100%', aspectRatio: '16/10', background: '#141414' }} />
          </div>
          <div className="project__copy">
            <h3 className="project__name">GLATT HUB</h3>
            <span className="project__tag">
              <span data-show="en">Desktop &middot; Media explorer</span>
              <span data-show="de">Desktop &middot; Media Explorer</span>
            </span>
            <p className="project__lead" data-show="en">
              A smart desktop media explorer for organizing, viewing, categorizing, cutting and compressing videos, images and sounds. Includes a personal home dashboard for notes, to-dos, ideas and focus areas, and a hidden Blackjack casino mode for after hours.
            </p>
            <p className="project__lead" data-show="de">
              Ein smarter Desktop-Media-Explorer zum Organisieren, Anzeigen, Kategorisieren, Schneiden und Komprimieren von Videos, Bildern und Sounds. Mit persönlichem Dashboard für Notizen, To-Dos, Ideen und Fokus-Bereiche, und einem versteckten Blackjack-Modus für danach.
            </p>
            <div className="project__cta">
              <a className="btn" href="https://github.com/Jayyy-PG/GlattHUB-Releases" target="_blank" rel="noopener noreferrer">
                <span data-show="en">View on GitHub</span><span data-show="de">Auf GitHub</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </article>

        <article className="project reveal">
          <div className="project__num">03</div>
          <div className="project__media" data-parallax-y="46" data-parallax-rx="11" data-parallax-s="-0.04">
            <image-slot id="proj-glattsorter" shape="rounded" radius="6" placeholder="GLATT SORTER screenshot" src="/images/projects/glatt-sorter.webp" style={{ width: '100%', aspectRatio: '16/10', background: '#141414' }} />
          </div>
          <div className="project__copy">
            <h3 className="project__name">GLATT SORTER</h3>
            <span className="project__tag">
              <span data-show="en">Desktop &middot; Workflow tool</span>
              <span data-show="de">Desktop &middot; Workflow-Tool</span>
            </span>
            <p className="project__lead" data-show="en">
              A simple desktop app for quickly sorting video clips. Pick a folder, define your own action buttons with target folders, then copy or move selected clips automatically with one click. Built for the fast-cut editing workflow.
            </p>
            <p className="project__lead" data-show="de">
              Eine einfache Desktop-App zum schnellen Sortieren von Videoclips. Ordner wählen, eigene Action-Buttons mit Zielordnern definieren, danach Clips per Klick kopieren oder verschieben. Gebaut für schnelles Schnitt-Workflow.
            </p>
            <div className="project__cta">
              <a className="btn" href="https://github.com/Jayyy-PG/Glatt-Sorter" target="_blank" rel="noopener noreferrer">
                <span data-show="en">View on GitHub</span><span data-show="de">Auf GitHub</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
