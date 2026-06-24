import { useEffect, useState } from 'react';
import { navigationLinks } from '../../data/navigation.js';

const LANG_KEY = 'jpg.lang';

export default function Navbar({ currentPath }) {
  const [lang, setLangState] = useState(() => localStorage.getItem(LANG_KEY) || 'en');

  useEffect(() => {
    const safeLang = lang === 'de' ? 'de' : 'en';
    document.documentElement.dataset.lang = safeLang;
    document.documentElement.lang = safeLang;
    localStorage.setItem(LANG_KEY, safeLang);
  }, [lang]);

  const setLang = (nextLang) => setLangState(nextLang === 'de' ? 'de' : 'en');

  return (
    <header className="nav">
      <div className="shell nav__inner">
        <a className="nav__brand" href="/" aria-label="JPG - Home">
          <span className="nav__logo-wrap" aria-hidden="true">
            <img className="nav__logo" src="/images/logos/jpg-portfolio-logo.svg" alt="" />
          </span>
        </a>
        <nav>
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
          <div className="lang" role="group" aria-label="Language">
            <button data-lang="en" aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
            <button data-lang="de" aria-pressed={lang === 'de'} onClick={() => setLang('de')}>DE</button>
          </div>
        </div>
      </div>
    </header>
  );
}
