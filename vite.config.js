import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { routes, indexableRoutes, SITE } from './src/data/routes.js';
import { describeRoute, absoluteUrl } from './src/utils/meta.js';

// Vite copies public/ verbatim. Nothing writes this sidecar any more, but a
// stale copy left in a working tree would otherwise be published with the
// site, so it is stripped from the output as a safety net.
function stripAuthoringSidecar(filename) {
  let outDir;
  return {
    name: 'strip-authoring-sidecar',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const stray = path.join(outDir, filename);
      if (fs.existsSync(stray)) {
        fs.rmSync(stray);
        this.warn(`removed authoring-only file from the build: ${filename}`);
      }
    },
  };
}

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * One static HTML file per route.
 *
 * The app is a single bundle, but shipping a real file per route means the
 * host answers /developer and /gallery with a plain 200 instead of relying on
 * SPA rewrites, unknown paths fall through to 404.html with a real 404 status,
 * and every route carries its own title/description/canonical in the source —
 * which is what crawlers and social scrapers read, since they do not run the
 * client-side router.
 */
function emitRouteHtml() {
  let outDir;
  return {
    name: 'emit-route-html',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const templatePath = path.join(outDir, 'index.html');
      if (!fs.existsSync(templatePath)) {
        this.error('index.html is missing from the build output');
      }
      const template = fs.readFileSync(templatePath, 'utf8');

      for (const route of routes) {
        const d = describeRoute(route, 'en');
        const replacements = [
          [/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(d.title)}</title>`],
          [/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeAttr(d.description)}$2`],
          [/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${d.canonical}$2`],
          [/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${escapeAttr(d.title)}$2`],
          [/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${escapeAttr(d.description)}$2`],
          [/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${d.ogUrl}$2`],
          [/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${escapeAttr(d.title)}$2`],
          [/(<meta\s+name="twitter:description"\s+content=")[^"]*(")/, `$1${escapeAttr(d.description)}$2`],
        ];

        let html = template;
        for (const [pattern, replacement] of replacements) {
          if (!pattern.test(html)) {
            // A tag renamed in index.html would silently stop being generated
            // per route; fail loudly instead of shipping stale metadata.
            this.error(`emit-route-html: no match for ${pattern} while building ${route.file}`);
          }
          html = html.replace(pattern, replacement);
        }

        if (route.noindex) {
          // A canonical on a page that must not be indexed only confuses
          // crawlers — drop it and state the intent instead.
          html = html
            .replace(/\s*<link\s+rel="canonical"[^>]*>/, '')
            .replace('</head>', `  <meta name="robots" content="${d.robots}" />\n  </head>`);
        }

        fs.writeFileSync(path.join(outDir, route.file), html);
      }

      const urls = indexableRoutes
        .map((route) => {
          const { priority, changefreq } = route.sitemap;
          return [
            '  <url>',
            `    <loc>${absoluteUrl(route.path)}</loc>`,
            `    <changefreq>${changefreq}</changefreq>`,
            `    <priority>${priority}</priority>`,
            '  </url>',
          ].join('\n');
        })
        .join('\n');

      fs.writeFileSync(
        path.join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      );

      fs.mkdirSync(path.join(outDir, '.well-known'), { recursive: true });
      fs.writeFileSync(
        path.join(outDir, '.well-known', 'security.txt'),
        [
          `Contact: mailto:${SITE.email}`,
          'Preferred-Languages: de, en',
          `Canonical: ${SITE.origin}/.well-known/security.txt`,
          `Expires: ${new Date(Date.now() + 365 * 24 * 3600 * 1000).toISOString().replace(/\.\d+Z$/, 'Z')}`,
          '',
        ].join('\n'),
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), emitRouteHtml(), stripAuthoringSidecar('.image-slots.state.json')],
  build: {
    outDir: 'dist',
    // Modern evergreen browsers — drops legacy polyfills and shrinks bundle.
    target: 'es2020',
    // Off in prod: smaller upload, no source leakage. Flip to true if you
    // ever need to debug a production bug from the live site.
    sourcemap: false,
    // Inline tiny assets, keep larger ones as files so the CDN can cache.
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    reportCompressedSize: false,
  },
});
