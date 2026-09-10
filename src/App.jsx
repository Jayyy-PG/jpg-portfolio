import { useCallback, useEffect, useState } from 'react';
import PageShell from './components/layout/PageShell.jsx';
import Home from './pages/Home.jsx';
import Developer from './pages/Developer.jsx';
import Gallery from './pages/Gallery.jsx';
import Legal from './pages/Legal.jsx';
import NotFound from './pages/NotFound.jsx';
import { resolveRoute } from './data/routes.js';
import { applyRouteMeta } from './utils/meta.js';
import { useLang } from './utils/lang.js';
import { initScrollEffects } from './utils/scrollReveal.js';
import { prefersReducedMotion } from './utils/motion.js';

const pages = {
  '/': Home,
  '/developer': Developer,
  '/gallery': Gallery,
  '/datenschutz': () => <Legal doc="privacy" />,
  '/impressum': () => <Legal doc="imprint" />,
  '/404': NotFound,
};

export default function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [navKey, setNavKey] = useState(0);
  const lang = useLang();

  const route = resolveRoute(pathname);
  const Page = pages[route.path] || NotFound;

  const navigate = useCallback((nextPath, hash = '') => {
    window.history.pushState({}, '', nextPath + hash);
    setPathname(nextPath);
    setNavKey((key) => key + 1);
  }, []);

  useEffect(() => {
    const onPop = () => {
      setPathname(window.location.pathname);
      setNavKey((key) => key + 1);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // Intercept same-origin links so in-app navigation stays client-side. A
  // link to an unknown path is deliberately left to the browser: the server
  // answers it with a real 404 rather than a soft one.
  useEffect(() => {
    const onClick = (event) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = event.target.closest('a[href]');
      if (!link) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (link.target || link.hasAttribute('download')) return;

      const next = resolveRoute(url.pathname);
      if (next.noindex) return;

      // Same page, hash only — let the browser handle the jump.
      if (next.path === window.location.pathname && url.hash) return;

      event.preventDefault();
      navigate(next.path, url.hash);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [navigate]);

  useEffect(() => {
    applyRouteMeta(route, lang);
    document.body.dataset.page = route.page;
  }, [route, lang]);

  useEffect(() => {
    const cleanup = initScrollEffects();
    return cleanup;
  }, [navKey, route.path]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({
        block: 'start',
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      });
    }, 0);
    return () => window.clearTimeout(timer);
  }, [navKey]);

  return (
    <PageShell currentPath={route.path}>
      <Page />
    </PageShell>
  );
}
