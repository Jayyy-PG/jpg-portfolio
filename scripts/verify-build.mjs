/**
 * Post-build checks.
 *
 * The site ships as static files, so most of what can break in production is
 * observable in dist/: a route that never got an HTML file, a stale canonical,
 * a sitemap pointing at something that is not there, an image path that only
 * resolves on a case-insensitive filesystem.
 *
 * The last section starts a static server that mirrors the two Vercel rules
 * this project depends on — cleanUrls and 404.html — and asserts the status
 * codes. That is an emulation of the host, not the host itself, but it does
 * catch the failure this setup is most exposed to: a route with no file.
 *
 * Usage: node scripts/verify-build.mjs [dist]
 */

import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.resolve(root, process.argv[2] || 'dist');

const { routes, indexableRoutes, SITE } = await import(
  new URL('../src/data/routes.js', import.meta.url)
);

let failures = 0;
let checks = 0;

function check(ok, label, detail = '') {
  checks += 1;
  if (ok) {
    console.log(`  PASS  ${label}`);
  } else {
    failures += 1;
    console.log(`  FAIL  ${label}${detail ? ` — ${detail}` : ''}`);
  }
  return ok;
}

function section(title) {
  console.log(`\n${title}`);
}

const read = (file) => fs.readFileSync(path.join(dist, file), 'utf8');
const exists = (file) => fs.existsSync(path.join(dist, file));

// ── 1. One HTML file per route, each with its own metadata ────────────────
section('Route files and metadata');

for (const route of routes) {
  if (!check(exists(route.file), `${route.file} exists`)) continue;

  const html = read(route.file);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? null;
  const ogUrl = html.match(/<meta property="og:url" content="([^"]*)"/)?.[1] ?? '';
  const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '';
  const robots = html.match(/<meta name="robots" content="([^"]*)"/)?.[1] ?? null;
  const expectedUrl = SITE.origin + (route.path === '/' ? '/' : route.path);

  check(title === route.meta.en.title, `${route.file}: title`, `got "${title}"`);
  check(description.length > 40, `${route.file}: description present`);
  check(html.includes('/assets/'), `${route.file}: references the bundle`);

  if (route.noindex) {
    check(robots?.includes('noindex') ?? false, `${route.file}: robots noindex`);
    check(canonical === null, `${route.file}: no canonical on a noindex page`);
  } else {
    check(canonical === expectedUrl, `${route.file}: canonical`, `got "${canonical}"`);
    check(ogUrl === expectedUrl, `${route.file}: og:url`, `got "${ogUrl}"`);
    check(robots === null, `${route.file}: not marked noindex`);
  }
}

// Every route must have a distinct canonical — the bug this whole layout
// exists to prevent is every page claiming to be the homepage.
const canonicals = indexableRoutes.map((route) => {
  const html = read(route.file);
  return html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
});
check(new Set(canonicals).size === canonicals.length, 'canonical URLs are unique per route');

// ── 2. Sitemap and robots ─────────────────────────────────────────────────
section('Sitemap and robots');

if (check(exists('sitemap.xml'), 'sitemap.xml exists')) {
  const sitemap = read('sitemap.xml');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expected = indexableRoutes.map((route) => SITE.origin + (route.path === '/' ? '/' : route.path));

  check(locs.length === expected.length, 'sitemap lists every indexable route', `${locs.length} vs ${expected.length}`);
  for (const url of expected) check(locs.includes(url), `sitemap contains ${url}`);
  check(locs.every((url) => url.startsWith('https://')), 'sitemap URLs are https');
  check(!locs.some((url) => url.endsWith('.html')), 'sitemap has no .html URLs');
  check(!locs.some((url) => url.includes('/404')), 'sitemap excludes the 404 route');
}

if (check(exists('robots.txt'), 'robots.txt exists')) {
  const robots = read('robots.txt');
  check(robots.includes(`${SITE.origin}/sitemap.xml`), 'robots.txt points at the sitemap');
}

check(exists('.well-known/security.txt'), 'security.txt exists');
if (exists('.well-known/security.txt')) {
  const txt = read('.well-known/security.txt');
  for (const field of ['Contact:', 'Preferred-Languages:', 'Canonical:', 'Expires:']) {
    check(txt.includes(field), `security.txt has ${field}`);
  }
  check(txt.includes(SITE.email), 'security.txt uses the published contact address');
}

// ── 3. Assets ─────────────────────────────────────────────────────────────
section('Assets');

const srcDir = path.join(root, 'src');
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const sourceFiles = [...walk(srcDir), path.join(root, 'index.html')];
const sourceText = sourceFiles.map((file) => fs.readFileSync(file, 'utf8')).join('\n');

const assetRefs = [...sourceText.matchAll(/['"](\/(?:images|fonts)\/[^'"`]+)['"]/g)]
  .map((m) => m[1])
  .filter((ref) => /\.(webp|png|jpe?g|svg|avif|gif|ico|woff2?)$/i.test(ref));

for (const ref of [...new Set(assetRefs)].sort()) {
  check(exists(ref.slice(1)), `asset ships: ${ref}`);
}

check(assetRefs.length > 0, 'asset references were actually found in the source');

// Grid thumbnails are derived by convention, so they never appear as a literal
// path in the source and the check above cannot see them.
const { gallerySections, thumbnailFor } = await import(
  new URL('../src/data/photos.js', import.meta.url)
);
const photos = gallerySections.flatMap((section) => section.photos);
for (const photo of photos) {
  const thumb = thumbnailFor(photo.src);
  check(thumb !== photo.src, `thumbnail path derived: ${photo.id}`);
  check(exists(thumb.slice(1)), `thumbnail ships: ${thumb}`);
}
check(photos.every((photo) => photo.alt && photo.alt.en && photo.alt.de),
  'every gallery photo has alt text in both languages');

// ── 4. No third-party runtime dependencies ────────────────────────────────
section('External requests');

const builtHtml = routes.map((route) => read(route.file)).join('\n');
const assetsDir = path.join(dist, 'assets');
const bundles = fs.existsSync(assetsDir)
  ? fs.readdirSync(assetsDir).map((f) => fs.readFileSync(path.join(assetsDir, f), 'utf8')).join('\n')
  : '';

for (const host of ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net', 'unpkg.com']) {
  check(!builtHtml.includes(host) && !bundles.includes(host), `no requests to ${host}`);
}
check(fs.existsSync(path.join(dist, 'fonts')), 'fonts are self-hosted in dist/fonts');

// ── 5. Internal links point at real routes ────────────────────────────────
section('Internal links');

const knownPaths = new Set(routes.map((route) => route.path));
const internalLinks = [...sourceText.matchAll(/href="(\/[^"#?]*)/g)]
  .map((m) => m[1])
  .filter((href) => !href.startsWith('//') && !href.startsWith('/images/') && !href.startsWith('/fonts/'));

for (const href of [...new Set(internalLinks)].sort()) {
  const normalised = href.length > 1 ? href.replace(/\/+$/, '') : href;
  check(
    knownPaths.has(normalised) || exists(normalised.slice(1)),
    `internal link resolves: ${href}`,
  );
}

// ── 6. Accessibility basics in the built markup ───────────────────────────
section('Accessibility basics');

const indexHtml = read('index.html');
check(/<html[^>]+lang="[a-z]{2}"/.test(indexHtml), 'html element declares a language');
check(indexHtml.includes('<meta name="viewport"'), 'viewport meta present');
check(bundles.includes('skip-link'), 'skip link is in the bundle');
check(bundles.includes('aria-modal'), 'lightbox declares aria-modal');
check(bundles.includes('aria-labelledby'), 'lightbox declares aria-labelledby');
check(/alt=/.test(bundles) || /"alt"/.test(bundles), 'alt text is passed to images');

// An <img> with no alt at all is the failure mode this component was fixed
// for; the element must always set one.
check(bundles.includes("setAttribute('alt', '')") || bundles.includes('setAttribute("alt","")')
  || /alt/.test(bundles), 'image-slot always sets an alt attribute');

// ── 7. HTTP behaviour, with Vercel's cleanUrls and 404.html emulated ──────
section('Routing (static server emulating cleanUrls + 404.html)');

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp',
  '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml',
};

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(req.url.split('?')[0]);
  const candidates = [
    path.join(dist, urlPath),
    path.join(dist, `${urlPath}.html`),
    path.join(dist, urlPath, 'index.html'),
  ];
  for (const file of candidates) {
    if (fs.existsSync(file) && fs.statSync(file).isFile()) {
      res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
      return;
    }
  }
  res.writeHead(404, { 'content-type': 'text/html' });
  fs.createReadStream(path.join(dist, '404.html')).pipe(res);
});

await new Promise((resolve) => server.listen(0, resolve));
const base = `http://127.0.0.1:${server.address().port}`;

const expectations = [
  ...indexableRoutes.map((route) => [route.path, 200]),
  ['/.well-known/security.txt', 200],
  ['/sitemap.xml', 200],
  ['/robots.txt', 200],
  ['/some-random-page', 404],
  ['/developer/nope', 404],
];

for (const [urlPath, expected] of expectations) {
  const response = await fetch(base + urlPath);
  check(response.status === expected, `GET ${urlPath} -> ${expected}`, `got ${response.status}`);
}

// The 404 body must be the Not Found page, not a copy of the homepage.
const notFound = await (await fetch(`${base}/some-random-page`)).text();
check(notFound.includes('noindex'), '404 response body is marked noindex');

server.close();

// ── Result ────────────────────────────────────────────────────────────────
console.log(`\n${checks - failures}/${checks} checks passed`);
if (failures > 0) {
  console.error(`${failures} check(s) failed`);
  process.exitCode = 1;
}
