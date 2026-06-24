const markup = `<div class="sections-anchor" id="sections"></div>

<section class="section section--coding reveal" id="coding">
  <div class="shell section__grid">
    <div class="section__num" data-parallax-y="-12">01 / 04</div>
    <h2 class="section__title" data-parallax-y="-26">
      <span data-show="en">Code &amp; Craft</span>
      <span data-show="de">Code &amp; Handwerk</span>
    </h2>
    <p class="section__lead" data-parallax-y="-14">
      <span data-show="en">Full-Stack Developer &middot; Website Designer &middot; Builder of small useful things.</span>
      <span data-show="de">Full-Stack Entwickler &middot; Webdesigner &middot; Baut kleine n&uuml;tzliche Dinge.</span>
    </p>

    <div class="section__media">
      <div class="codecard" data-parallax-y="90" data-parallax-r="-2.4">
        <div class="codecard__chrome">
          <span></span><span></span><span></span>
          <i>jpg.dev &mdash; wiss-hub</i>
        </div>
        <pre class="codecard__body"><span class="c-c">// shipping things that help people.</span>
<span class="c-k">const</span> <span class="c-v">jpg</span> = {
  <span class="c-p">stack</span>: [<span class="c-s">"HTML"</span>, <span class="c-s">"CSS"</span>, <span class="c-s">"JS"</span>, <span class="c-s">"Python"</span>],
  <span class="c-p">building</span>: <span class="c-s">"WISS HUB"</span>,
  <span class="c-p">loves</span>: [<span class="c-s">"clean UI"</span>, <span class="c-s">"calm code"</span>],
};</pre>
        <div class="codecard__chips">
          <span class="chip">Full-Stack</span>
          <span class="chip">Web Design</span>
          <span class="chip">UX</span>
          <span class="chip">Tooling</span>
        </div>
      </div>
    </div>

    <div class="section__skills" aria-label="Stack preview">
      <div class="skill"><img alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /><span>HTML</span></div>
      <div class="skill"><img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" /><span>CSS</span></div>
      <div class="skill"><img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" /><span>JS</span></div>
      <div class="skill"><img alt="Python" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" /><span>Python</span></div>
    </div>

    <div class="section__cta">
      <a class="btn" href="/developer">
        <span data-show="en">Developer page</span>
        <span data-show="de">Entwickler-Seite</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
      <a class="btn btn--ghost" href="/developer#projects">
        <span data-show="en">See projects</span>
        <span data-show="de">Projekte</span>
      </a>
    </div>
  </div>
</section>

<section class="section section--photo reveal" id="photo">
  <div class="shell section__grid">
    <div class="section__num" data-parallax-y="-12">02 / 04</div>
    <h2 class="section__title" data-parallax-y="-26">
      <span data-show="en">Through the lens</span>
      <span data-show="de">Durch die Linse</span>
    </h2>
    <p class="section__lead" data-parallax-y="-14">
      <span data-show="en">Motorsport, nature &amp; portraits. Shot, edited &amp; framed by JPG &mdash; the file format and the photographer.</span>
      <span data-show="de">Motorsport, Natur &amp; Portr&auml;ts. Fotografiert, bearbeitet und gerahmt von JPG &mdash; das Dateiformat und der Fotograf.</span>
    </p>

    <div class="section__media photo-stack">
      <div class="photo-stack__item photo-stack__item--a" data-parallax-y="60" data-parallax-r="-2.6">
        <image-slot id="photo-feat-a" shape="rounded" radius="4" placeholder="Hero photo"
          src="/images/gallery/large/night-run.webp"
          style="width:100%;aspect-ratio:4/5;background:#141414"></image-slot>
      </div>
      <div class="photo-stack__item photo-stack__item--b" data-parallax-y="110" data-parallax-r="3.6">
        <image-slot id="photo-feat-b" shape="rounded" radius="4" placeholder="Photo"
          src="/images/gallery/large/photo-preview-b.webp"
          style="width:100%;aspect-ratio:3/4;background:#141414"></image-slot>
      </div>
      <div class="photo-stack__item photo-stack__item--c" data-parallax-y="160" data-parallax-r="-4.6">
        <image-slot id="photo-feat-c" shape="rounded" radius="4" placeholder="Photo"
          src="/images/gallery/large/photo-preview-c.webp"
          style="width:100%;aspect-ratio:5/4;background:#141414"></image-slot>
      </div>
    </div>

    <div class="section__cta">
      <a class="btn" href="/gallery">
        <span data-show="en">Open gallery</span>
        <span data-show="de">Galerie &ouml;ffnen</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </a>
    </div>
  </div>
</section>`;

export default function FeaturedProjects() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
