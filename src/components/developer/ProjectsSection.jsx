import { useState } from 'react';
import { useLang } from '../../utils/lang.js';

const projects = [
  {
    id: 'wisshub',
    num: '01',
    name: 'WISS HUB',
    media: '/images/projects/wiss-hub.webp',
    mediaAlt: { en: 'Screenshot of the WISS HUB web platform.', de: 'Screenshot der Web-Plattform WISS HUB.' },
    fit: 'cover',
    tag: { en: 'Web platform · In development', de: 'Web-Plattform · In Entwicklung' },
    lead: {
      en: 'A modern web platform connecting WISS IT students with partner companies — students keep a professional profile, companies post internships, both sides find each other and get in touch directly.',
      de: 'Eine moderne Web-Plattform, die WISS-IT-Studierende mit Partnerfirmen verbindet — Studierende führen ein fachliches Profil, Firmen schreiben Praktika aus, beide finden zueinander und nehmen direkt Kontakt auf.',
    },
    cta: { type: 'soon' },
    features: [
      { en: 'Student profiles — skills, projects, education, progress bar', de: 'Studierenden-Profile — Skills, Projekte, Ausbildung, Fortschritt' },
      { en: 'Internship marketplace, filterable by workload & technology', de: 'Praktikumsmarktplatz, filterbar nach Pensum & Technologie' },
      { en: 'Applications with a clear status flow & flexible invitations', de: 'Bewerbungen mit klarer Statusfolge & flexiblen Einladungen' },
      { en: 'Smart skill-based internship recommendations', de: 'Intelligente, skill-basierte Praktikums-Empfehlungen' },
      { en: 'Three roles: students, companies, administration', de: 'Drei Rollen: Studierende, Firmen, Administration' },
      { en: 'revDSG-compliant, Row-Level-Security, EU hosting', de: 'revDSG-konform, Row-Level-Security, EU-Hosting' },
    ],
    stack: [
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'Tailwind' },
      { name: 'PostgreSQL' },
      { name: 'Supabase' },
      { name: 'Zod' },
      { name: 'Vercel' },
    ],
    note: {
      en: '180+ modules · strict TypeScript · type-check, lint & tests (Vitest, Playwright) run before every deploy · Lighthouse 100 desktop / 96 mobile.',
      de: '180+ Module · striktes TypeScript · Typprüfung, Linting & Tests (Vitest, Playwright) vor jedem Deploy · Lighthouse 100 Desktop / 96 Mobile.',
    },
  },
  {
    id: 'glatttube',
    num: '02',
    name: 'GlattTube',
    media: '/images/projects/glatttube.svg',
    mediaAlt: { en: 'GlattTube wordmark.', de: 'GlattTube-Schriftzug.' },
    fit: 'contain',
    alt: true,
    tag: { en: 'Desktop · Media hub', de: 'Desktop · Media-Hub' },
    lead: {
      en: 'A fast, elegant desktop media hub for Windows — turns scattered videos, images and sounds into a tidy, searchable library, with a player, editing, compression and a downloader.',
      de: 'Ein schneller, eleganter Desktop-Media-Hub für Windows — macht aus verstreuten Videos, Bildern und Sounds eine aufgeräumte, durchsuchbare Mediathek, mit Player, Schnitt, Komprimierung und Downloader.',
    },
    cta: { type: 'link', href: 'https://github.com/Jayyy-PG/glatttube-releases' },
    features: [
      { en: 'Media library for video, images & sounds (virtualized grid)', de: 'Mediathek für Video, Bilder & Sounds (virtualisiertes Raster)' },
      { en: 'Automatic folder organization + live folder watching', de: 'Automatische Ordner-Organisation + Live-Überwachung' },
      { en: 'Video player: favorites, tags, audio tracks, mini-player', de: 'Video-Player: Favoriten, Tags, Audiospuren, Mini-Player' },
      { en: 'Timeline cutting with live preview & size estimate', de: 'Schneiden mit Timeline, Live-Vorschau & Grössen-Schätzung' },
      { en: 'Compress to a target size (H.264)', de: 'Komprimieren auf eine Zielgrösse (H.264)' },
      { en: 'YouTube downloader (MP4 / MP3) with quality choice', de: 'YouTube-Downloader (MP4 / MP3) mit Qualitätswahl' },
      { en: 'Favorites, history, playlists & full-text search', de: 'Favoriten, Verlauf, Playlists & Volltextsuche' },
    ],
    stack: [
      { name: 'Electron' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'Tailwind' },
      { name: 'SQLite' },
    ],
    note: {
      en: 'Local-first desktop app · all data stays under %APPDATA% · packaged with electron-builder · FFmpeg & yt-dlp bundled.',
      de: 'Local-first Desktop-App · alle Daten bleiben unter %APPDATA% · gepackt mit electron-builder · FFmpeg & yt-dlp gebündelt.',
    },
  },
  {
    id: 'next',
    num: '03',
    name: { en: 'NEXT PROJECT', de: 'NÄCHSTES PROJEKT' },
    wip: true,
    tag: { en: 'In development', de: 'In Entwicklung' },
    lead: {
      en: 'Something bigger is already in motion. The details stay under wraps for now — but this is the one I am most excited to ship, and it gets its reveal right here.',
      de: 'Etwas Grösseres ist bereits in Arbeit. Die Details bleiben vorerst unter Verschluss — aber es ist das Projekt, auf das ich mich am meisten freue, und es wird genau hier enthüllt.',
    },
    cta: { type: 'soon' },
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.36-1.18-3.36-1.18-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.92.82.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.91 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.07c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.63.64.69 1.03 1.58 1.03 2.66 0 3.82-2.34 4.66-4.56 4.9.36.32.68.94.68 1.9v2.82c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

function Cta({ cta }) {
  if (cta.type === 'soon') {
    return (
      <span className="project__cta-note">
        <span data-show="en">No public link yet</span><span data-show="de">Noch kein öffentlicher Link</span>
      </span>
    );
  }
  return (
    <a className="btn" href={cta.href} target="_blank" rel="noopener noreferrer">
      <span data-show="en">View on GitHub</span><span data-show="de">Auf GitHub</span>
      <ArrowIcon />
    </a>
  );
}

function ProjectCard({ project, open, onToggle }) {
  const hasDetails = Boolean(project.features);
  const lang = useLang();
  return (
    <article className={`project reveal${project.alt ? ' project--alt' : ''}`} data-open={open ? 'true' : 'false'}>
      <div className="project__num">{project.num}</div>

      {project.wip ? (
        <div className="project__media project__media--wip" data-parallax-y="14">
          <div className="project__wip">
            <p className="project__wip-note">
              <span data-show="en">Nothing to show yet</span>
              <span data-show="de">Noch nichts zu zeigen</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="project__media" data-parallax-y="14">
          <image-slot
            id={`proj-${project.id}`}
            shape="rounded"
            radius="6"
            fit={project.fit}
            placeholder="Preview"
            src={project.media}
            alt={project.mediaAlt ? (project.mediaAlt[lang] || project.mediaAlt.en) : ''}
            loading="lazy"
            decoding="async"
            style={{ width: '100%', aspectRatio: '16 / 10', background: '#141414' }}
          />
        </div>
      )}

      <div className="project__copy">
        <p className="project__meta">
          <span data-show="en">{project.tag.en}</span>
          <span data-show="de">{project.tag.de}</span>
        </p>
        <h3 className="project__name">
          {typeof project.name === 'string' ? project.name : (
            <>
              <span data-show="en">{project.name.en}</span>
              <span data-show="de">{project.name.de}</span>
            </>
          )}
        </h3>
        <p className="project__lead" data-show="en">{project.lead.en}</p>
        <p className="project__lead" data-show="de">{project.lead.de}</p>

        <div className="project__cta">
          <Cta cta={project.cta} />
          {hasDetails && (
            <button
              className="project__toggle"
              type="button"
              aria-expanded={open}
              aria-controls={`details-${project.id}`}
              onClick={onToggle}
            >
              <span data-show="en">{open ? 'Less' : 'Details'}</span>
              <span data-show="de">{open ? 'Weniger' : 'Details'}</span>
              <svg className="project__toggle-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
            </button>
          )}
        </div>
      </div>

      {hasDetails && (
        <div className="project__details" id={`details-${project.id}`}>
          <div className="project__details-inner">
            <div className="project__detail-grid">
              <section className="project__block">
                <h4 className="project__block-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m9 11 3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
                  <span data-show="en">What it does</span><span data-show="de">Was es kann</span>
                </h4>
                <ul className="project__features">
                  {project.features.map((f, i) => (
                    <li key={i}>
                      <span data-show="en">{f.en}</span><span data-show="de">{f.de}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="project__block">
                <h4 className="project__block-title">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 7-5 5 5 5" /><path d="m16 7 5 5-5 5" /><path d="m13.5 4-3 16" /></svg>
                  <span data-show="en">Stack</span><span data-show="de">Stack</span>
                </h4>
                <p className="project__stack">
                  {project.stack.map((s, i) => (
                    <span key={s.name}>
                      {i > 0 && <span className="project__stack-sep" aria-hidden="true"> · </span>}
                      {s.name}
                    </span>
                  ))}
                </p>

                <h4 className="project__block-title project__block-title--sub">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
                  <span data-show="en">Architecture</span><span data-show="de">Architektur</span>
                </h4>
                <p className="project__note">
                  <span data-show="en">{project.note.en}</span><span data-show="de">{project.note.de}</span>
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function ProjectsSection() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="projects reveal" id="projects">
      <div className="shell">
        <div className="projects__head" data-parallax-y="-10">
          <span className="eyebrow">03 / Projects</span>
          <h2 className="projects__title">
            <span data-show="en">Things I'm building.</span>
            <span data-show="de">Was ich gerade baue.</span>
          </h2>
        </div>

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            open={openId === project.id}
            onToggle={() => setOpenId((cur) => (cur === project.id ? null : project.id))}
          />
        ))}

        <a
          className="projects__more"
          href="https://github.com/Jayyy-PG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          <span data-show="en">More projects on GitHub</span>
          <span data-show="de">Weitere Projekte auf GitHub</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
