/**
 * Rendered for any path that is not a real route.
 *
 * The host serves this view from 404.html with a genuine HTTP 404, so the
 * status line and the page agree — no soft 404 that reports success while
 * showing something else.
 */
export default function NotFound() {
  return (
    <section className="notfound">
      <div className="shell notfound__inner">
        <p className="notfound__code" aria-hidden="true">404</p>
        <h1 className="notfound__title">
          <span data-show="en">This page does not exist.</span>
          <span data-show="de">Diese Seite existiert nicht.</span>
        </h1>
        <p className="notfound__lead">
          <span data-show="en">The link may be out of date, or the address may contain a typo.</span>
          <span data-show="de">Der Link ist womöglich veraltet, oder die Adresse enthält einen Tippfehler.</span>
        </p>
        <div className="notfound__cta">
          <a className="btn" href="/">
            <span data-show="en">Back to home</span>
            <span data-show="de">Zur Startseite</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
          <a className="btn btn--ghost" href="/gallery">
            <span data-show="en">Open gallery</span>
            <span data-show="de">Galerie öffnen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
