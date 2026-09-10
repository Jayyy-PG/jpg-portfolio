/**
 * Route metadata — one description, two consumers.
 *
 * `describeRoute` is pure data, so the Vite build can bake the tags into each
 * generated HTML file (what crawlers read) while the client applies the same
 * values on in-app navigation and on a language switch (what users see).
 */

import { SITE } from '../data/routes.js';

export function absoluteUrl(path) {
  return SITE.origin + (path === '/' ? '/' : path);
}

export function describeRoute(route, lang = 'en') {
  const meta = route.meta[lang] || route.meta.en;
  const url = absoluteUrl(route.path);
  return {
    title: meta.title,
    description: meta.description,
    canonical: url,
    ogUrl: url,
    ogImage: SITE.origin + SITE.ogImage,
    ogLocale: lang === 'de' ? 'de_CH' : 'en_US',
    robots: route.noindex ? 'noindex, follow' : null,
  };
}

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
  return el;
}

/** Sync the document head with the active route and language. */
export function applyRouteMeta(route, lang = 'en') {
  const d = describeRoute(route, lang);

  document.title = d.title;
  setMeta('meta[name="description"]', 'content', d.description);
  setMeta('link[rel="canonical"]', 'href', d.canonical);
  setMeta('meta[property="og:title"]', 'content', d.title);
  setMeta('meta[property="og:description"]', 'content', d.description);
  setMeta('meta[property="og:url"]', 'content', d.ogUrl);
  setMeta('meta[property="og:image"]', 'content', d.ogImage);
  setMeta('meta[property="og:locale"]', 'content', d.ogLocale);
  setMeta('meta[name="twitter:title"]', 'content', d.title);
  setMeta('meta[name="twitter:description"]', 'content', d.description);
  setMeta('meta[name="twitter:image"]', 'content', d.ogImage);

  // Only the Not Found view is noindex; drop the tag again elsewhere so an
  // in-app navigation away from it cannot leave the flag behind.
  const existing = document.head.querySelector('meta[name="robots"]');
  if (d.robots) {
    if (existing) existing.setAttribute('content', d.robots);
    else {
      const tag = document.createElement('meta');
      tag.setAttribute('name', 'robots');
      tag.setAttribute('content', d.robots);
      document.head.appendChild(tag);
    }
  } else if (existing) {
    existing.remove();
  }
}
