/**
 * Single source of truth for routes, their metadata and their build output.
 *
 * Consumed three times:
 *   - the Vite build emits one static HTML file per route from `file`
 *     (so every route is a real 200 and carries its own crawlable metadata),
 *   - the client router maps `path` to a page component,
 *   - the sitemap is generated from the indexable entries.
 *
 * Plain data with no imports, so the Vite config can read it in Node.
 */

export const SITE = {
  origin: 'https://jaygrenacher.ch',
  name: 'JPG Portfolio',
  author: 'Jay Patric Grenacher',
  email: 'jaygrenacher.ch@gmail.com',
  location: 'Aargau, Switzerland',
  github: 'https://github.com/Jayyy-PG',
  instagram: 'https://www.instagram.com/jayyy_p.g/',
  ogImage: '/images/og-cover.jpg',
};

export const routes = [
  {
    path: '/',
    file: 'index.html',
    page: 'home',
    sitemap: { priority: '1.0', changefreq: 'monthly' },
    meta: {
      en: {
        title: 'Jay Patric Grenacher — JPG Portfolio',
        description: 'Jay Patric Grenacher — software engineer and photographer from Aargau, Switzerland. WISS student, building WISS HUB and GlattTube.',
      },
      de: {
        title: 'Jay Patric Grenacher — JPG Portfolio',
        description: 'Jay Patric Grenacher — Software Engineer und Fotograf aus dem Aargau. WISS-Student, entwickelt WISS HUB und GlattTube.',
      },
    },
  },
  {
    path: '/developer',
    file: 'developer.html',
    page: 'developer',
    sitemap: { priority: '0.9', changefreq: 'monthly' },
    meta: {
      en: {
        title: 'Developer — Jay Patric Grenacher',
        description: 'The stack Jay Patric Grenacher works with and the projects he is shipping: WISS HUB, GlattTube and what comes next.',
      },
      de: {
        title: 'Entwickler — Jay Patric Grenacher',
        description: 'Der Stack, mit dem Jay Patric Grenacher arbeitet, und die Projekte, die er gerade ausliefert: WISS HUB, GlattTube und mehr.',
      },
    },
  },
  {
    path: '/gallery',
    file: 'gallery.html',
    page: 'gallery',
    sitemap: { priority: '0.8', changefreq: 'monthly' },
    meta: {
      en: {
        title: 'Gallery — Jay Patric Grenacher',
        description: 'Photography by Jay Patric Grenacher: motorsport, nature and portrait work shot in Switzerland and Belgium.',
      },
      de: {
        title: 'Galerie — Jay Patric Grenacher',
        description: 'Fotografie von Jay Patric Grenacher: Motorsport, Natur und Porträts, aufgenommen in der Schweiz und in Belgien.',
      },
    },
  },
  {
    path: '/datenschutz',
    file: 'datenschutz.html',
    page: 'legal',
    sitemap: { priority: '0.3', changefreq: 'yearly' },
    meta: {
      en: {
        title: 'Privacy — Jay Patric Grenacher',
        description: 'How this personal portfolio site handles data: hosting, server logs, contact by email and the language preference stored in your browser.',
      },
      de: {
        title: 'Datenschutz — Jay Patric Grenacher',
        description: 'Wie diese persönliche Portfolio-Website mit Daten umgeht: Hosting, Server-Logs, Kontakt per E-Mail und die im Browser gespeicherte Sprachwahl.',
      },
    },
  },
  {
    path: '/impressum',
    file: 'impressum.html',
    page: 'legal',
    sitemap: { priority: '0.3', changefreq: 'yearly' },
    meta: {
      en: {
        title: 'Legal notice — Jay Patric Grenacher',
        description: 'Who runs this site and how to get in touch.',
      },
      de: {
        title: 'Impressum — Jay Patric Grenacher',
        description: 'Wer diese Website betreibt und wie man Kontakt aufnimmt.',
      },
    },
  },
  {
    // Vercel serves this file with a real HTTP 404 for unmatched paths.
    path: '/404',
    file: '404.html',
    page: 'not-found',
    noindex: true,
    meta: {
      en: {
        title: 'Page not found — Jay Patric Grenacher',
        description: 'This address does not exist on jaygrenacher.ch. The link may be out of date, or the address may contain a typo.',
      },
      de: {
        title: 'Seite nicht gefunden — Jay Patric Grenacher',
        description: 'Diese Adresse gibt es auf jaygrenacher.ch nicht. Der Link ist womöglich veraltet, oder die Adresse enthält einen Tippfehler.',
      },
    },
  },
];

export const notFoundRoute = routes.find((route) => route.path === '/404');

/** Routes that are real, indexable pages — used for the sitemap. */
export const indexableRoutes = routes.filter((route) => !route.noindex);

/**
 * Resolve a pathname to a route. Returns the 404 route for anything unknown
 * so the client renders a Not Found view instead of silently showing home.
 */
export function resolveRoute(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return routes.find((route) => route.path === (clean || '/')) || notFoundRoute;
}
