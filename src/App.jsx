import { useEffect, useMemo, useState } from 'react';
import PageShell from './components/layout/PageShell.jsx';
import Home from './pages/Home.jsx';
import Developer from './pages/Developer.jsx';
import Gallery from './pages/Gallery.jsx';
import { initScrollEffects } from './utils/scrollReveal.js';

const routes = {
  '/': Home,
  '/developer': Developer,
  '/gallery': Gallery,
};

const titles = {
  '/': 'Jay Patric Grenacher - JPG Portfolio',
  '/developer': 'Developer - Jay Patric Grenacher - JPG',
  '/gallery': 'Gallery - Jay Patric Grenacher - JPG',
};

function normalizePath(pathname) {
  if (pathname === '/index.html') return '/';
  if (pathname === '/developer.html') return '/developer';
  if (pathname === '/gallery.html') return '/gallery';
  return routes[pathname] ? pathname : '/';
}

export default function App() {
  const [locationKey, setLocationKey] = useState(() => window.location.pathname + window.location.hash);
  const pathname = normalizePath(window.location.pathname);
  const Page = useMemo(() => routes[pathname] || Home, [pathname]);

  useEffect(() => {
    const onPop = () => setLocationKey(window.location.pathname + window.location.hash);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href]');
      if (!link) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (link.target || link.hasAttribute('download')) return;

      const nextPath = normalizePath(url.pathname);
      if (!routes[nextPath]) return;

      event.preventDefault();
      const nextUrl = nextPath + url.hash;
      window.history.pushState({}, '', nextUrl);
      setLocationKey(nextUrl);
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    document.title = titles[pathname] || titles['/'];
    document.body.dataset.page = pathname === '/' ? 'home' : pathname.slice(1);
  }, [pathname]);

  useEffect(() => {
    const cleanup = initScrollEffects();
    return cleanup;
  }, [locationKey]);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ block: 'start' });
    }, 0);
  }, [locationKey]);

  return (
    <PageShell currentPath={pathname}>
      <Page />
    </PageShell>
  );
}
