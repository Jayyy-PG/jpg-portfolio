export default function DeveloperHero() {
  return (
    <section className="dev-hero reveal">
      <div className="shell dev-hero__grid">
        <span className="eyebrow" data-parallax-y="-22">JPG · Developer</span>
        <h1 className="dev-hero__title" data-parallax-y="-70" data-parallax-rx="-9" data-parallax-s="-0.03">
          <span data-show="en">Building software<br />that make life easier.</span>
          <span data-show="de">Software bauen,<br />das Leben vereinfacht.</span>
        </h1>
        <div className="dev-hero__copy">
          <p className="lead" data-parallax-y="-30" data-show="en">
            I'm Jay — a first-year WISS student in Zürich, building websites and apps that make life easier. Below: the stack I work with, and the projects I'm shipping.
          </p>
          <p className="lead" data-parallax-y="-30" data-show="de">
            Ich bin Jay — erstes Jahr an der WISS Zürich, ich baue Websites und Apps, die das Leben einfacher machen. Unten: der Stack, mit dem ich arbeite, und die Projekte, die ich gerade ausliefere.
          </p>
          <div className="dev-hero__stats" data-parallax-y="50" data-parallax-rx="7">
            <div><b>8+</b><span data-show="en">Stack technologies</span><span data-show="de">Technologien</span></div>
            <div><b>3</b><span data-show="en">Active projects</span><span data-show="de">Aktive Projekte</span></div>
            <div><b>1.</b><span data-show="en">Year at WISS</span><span data-show="de">Jahr an der WISS</span></div>
            <div><b>∞</b><span data-show="en">Cans of Red Bull</span><span data-show="de">Dosen Red Bull</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
