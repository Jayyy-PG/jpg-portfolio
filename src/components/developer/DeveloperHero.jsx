export default function DeveloperHero() {
  return (
    <section className="dev-hero reveal">
      <div className="shell dev-hero__grid">
        <span className="eyebrow">JPG · Developer</span>
        <h1 className="dev-hero__title" data-parallax-y="-14">
          <span data-show="en">Building software<br />that makes life easier.</span>
          <span data-show="de">Software bauen,<br />die das Leben einfacher macht.</span>
        </h1>
        <div className="dev-hero__copy">
          <p className="lead" data-show="en">
            I'm Jay, training as an Informatiker EFZ with a specialization in Application Development. Here you'll find the technologies I work with most and some of my current projects.
          </p>
          <p className="lead" data-show="de">
            Ich bin Jay und mache die Ausbildung zum Informatiker EFZ mit Fachrichtung Applikationsentwicklung. Hier zeige ich die Technologien, mit denen ich hauptsächlich arbeite, und einige meiner aktuellen Projekte.
          </p>

          {/* One editorial line of metadata. Separators are attached to the
              end of each entry, so a wrap can never leave a lone dot at the
              start of the next line. */}
          <ul className="dev-hero__meta">
            <li>
              <span data-show="en">Application Development</span>
              <span data-show="de">Applikationsentwicklung</span>
            </li>

            <li>
              <span data-show="en">Aargau / Zurich</span>
              <span data-show="de">Aargau / Zürich</span>
            </li>
            <li className="dev-hero__meta--fun">
              <span data-show="en">∞ cans of Red Bull</span>
              <span data-show="de">∞ Dosen Red Bull</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
