# JPG Portfolio

Personal portfolio of **Jay Patric Grenacher** — software engineer & photographer from Aargau, Switzerland. Built as a fast, static single-page site with bilingual (EN/DE) content, a developer page, and a photo gallery.

**Stack:** Vite + React 19, hand-written CSS (no framework), zero runtime dependencies beyond React. Deploys as a static site.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build & preview

```bash
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Deploy

### Vercel (recommended)
Import the repository at [vercel.com/new](https://vercel.com/new). The framework is detected as **Vite** automatically; [`vercel.json`](vercel.json) handles SPA routing, caching, and security headers. No environment variables are required.

### Cloudflare Pages (also works)
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

[`public/_redirects`](public/_redirects) keeps direct visits to `/developer` and `/gallery` working on static hosts.

> After the first deploy, replace `https://jpg-portfolio.vercel.app/` in [`index.html`](index.html) and [`public/sitemap.xml`](public/sitemap.xml) with your real domain.

## Project structure

```
src/
  App.jsx              # tiny client-side router (/, /developer, /gallery)
  pages/               # Home, Developer, Gallery
  components/          # home/, developer/, gallery/, layout/
  data/                # photos.js, projects.js, skills.js, navigation.js
  styles/              # tokens.css, global.css, home.css, developer.css, gallery.css
  utils/
    scrollReveal.js    # IntersectionObserver reveals + cached-position parallax
    imageSlots.js      # <image-slot> custom element (read-only on the live site)
public/images/         # static images shipped as-is
```

## Editing content

- **Gallery photos & EXIF** — `src/data/photos.js` (title, series, camera, lens, iso, aperture, shutter, focal, date, desc, src).
- **Projects** — `src/components/developer/ProjectsSection.jsx`.
- **Skills / navigation** — `src/data/skills.js`, `src/data/navigation.js`.
- **Hero, About, Contact** — `src/components/home/`.

### Images
Drop files into `public/images/...` and reference them by absolute path (e.g. `/images/projects/wiss-hub.webp`). Use **ASCII filenames only** (no umlauts) so URLs resolve on Linux hosts. Key paths:

- Hero portrait — `public/images/placeholders/portrait.webp`
- About portrait — `public/images/placeholders/portrait-about.webp`
- Project shots — `public/images/projects/{wiss-hub,glatt-hub,glatt-sorter}.webp`
- Gallery — `public/images/gallery/large/` (paths listed in `src/data/photos.js`)

Missing images fall back to the `<image-slot>` placeholder, so files can be added incrementally.

## Accessibility & motion

Keyboard-focusable, semantic markup, and `prefers-reduced-motion` is respected (scroll reveals and parallax reduce to static). The site uses native scrolling for zero input latency.
