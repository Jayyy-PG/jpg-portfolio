import { useState } from 'react';
import { navigationLinks } from '../../data/navigation.js';
import { setLang, useLang } from '../../utils/lang.js';

export default function Navbar({ currentPath }) {
  const lang = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever the route changes. Adjusting state during
  // render rather than in an effect: React discards this pass and re-runs it
  // immediately, so the menu never paints open on the new page.
  const [renderedPath, setRenderedPath] = useState(currentPath);
  if (currentPath !== renderedPath) {
    setRenderedPath(currentPath);
    setMenuOpen(false);
  }

  return (
    <header className={`nav${menuOpen ? ' nav--open' : ''}`}>
      <div className="shell nav__inner">
        <a className="nav__brand" href="/" aria-label="JPG - Home">
          <span className="nav__logo-wrap" aria-hidden="true">
            <img className="nav__logo" src="/images/logos/jpg-portfolio-logo.svg" alt="" />
          </span>
        </a>

        <nav className="nav__menu" onClick={() => setMenuOpen(false)}>
          <ul className="nav__links">
            {navigationLinks.map((item) => {
              const href = item.href === '#contact' && currentPath !== '/' ? '/#contact' : item.href;
              const isCurrent = item.path === currentPath;
              return (
                <li key={item.key}>
                  <a href={href} aria-current={isCurrent ? 'page' : undefined} data-show="en">{item.label.en}</a>
                  <a href={href} aria-current={isCurrent ? 'page' : undefined} data-show="de">{item.label.de}</a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="nav__right">
          <div className="lang" role="group" aria-label="Language / Sprache">
            <button type="button" data-lang="en" lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')} title="English">EN</button>
            <button type="button" data-lang="de" lang="de" aria-pressed={lang === 'de'} onClick={() => setLang('de')} title="Deutsch">DE</button>
          </div>
          <button
            className="nav__burger"
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav__burger-box"><span /><span /><span /></span>
          </button>
        </div>
      </div>
    </header>
  );
}
