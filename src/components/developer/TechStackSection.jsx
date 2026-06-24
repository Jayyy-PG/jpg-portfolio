const markup = `<section class="dev-cta reveal">
  <div class="shell dev-cta__inner">
    <h3 class="dev-cta__title" data-parallax-y="-22" data-parallax-rx="-4">
      <span data-show="en">Open to internships, dev roles &amp; freelance briefs.</span>
      <span data-show="de">Offen für Praktika, Dev-Stellen &amp; Freelance-Aufträge.</span>
    </h3>
    <a class="btn btn--lg" href="/#contact" data-parallax-y="14">
      <span data-show="en">Get in touch</span><span data-show="de">Kontakt aufnehmen</span>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
    </a>
  </div>
</section>`;

export default function TechStackSection() {
  return <div dangerouslySetInnerHTML={{ __html: markup }} />;
}
