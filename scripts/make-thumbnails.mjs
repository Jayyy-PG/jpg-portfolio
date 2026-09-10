/**
 * Generates gallery thumbnails from the full-size originals.
 *
 * The originals are camera files — several are 6000px on the long edge and
 * over a megabyte — while a grid card is never displayed taller than 620 CSS
 * pixels. The grid loads these downscaled copies; the lightbox keeps using
 * the original, so nothing is lost where the detail is actually visible.
 *
 * Requires ffmpeg on PATH. It is not an npm dependency: this runs by hand
 * when photos are added, not on every install or build. The generated files
 * are committed, so neither the build nor CI needs ffmpeg.
 *
 *   node scripts/make-thumbnails.mjs          # only missing or outdated ones
 *   node scripts/make-thumbnails.mjs --force  # rebuild everything
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SOURCE_DIR = path.join(root, 'public/images/gallery/large');
const OUTPUT_DIR = path.join(root, 'public/images/gallery/thumbnails');

// Long edge in pixels. A grid card tops out at 620 CSS px, so this still has
// headroom on a 2x display.
const MAX_EDGE = 1400;
const QUALITY = 80;

const force = process.argv.includes('--force');

const ffmpeg = process.env.FFMPEG_PATH || 'ffmpeg';
const probe = spawnSync(ffmpeg, ['-version'], { encoding: 'utf8' });
if (probe.error) {
  console.error(
    'ffmpeg was not found on PATH.\n' +
    'Install it (https://ffmpeg.org/download.html) or set FFMPEG_PATH, then run this again.\n' +
    'The committed thumbnails stay valid in the meantime — this script only needs to run when photos change.',
  );
  process.exit(1);
}

fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const sources = fs.readdirSync(SOURCE_DIR).filter((name) => name.toLowerCase().endsWith('.webp'));
let written = 0;
let skipped = 0;

for (const name of sources) {
  const from = path.join(SOURCE_DIR, name);
  const to = path.join(OUTPUT_DIR, name);

  if (!force && fs.existsSync(to) && fs.statSync(to).mtimeMs >= fs.statSync(from).mtimeMs) {
    skipped += 1;
    continue;
  }

  // Scale the long edge to MAX_EDGE and let the short edge follow; -2 keeps
  // the result even-numbered, which the encoder prefers. Images already
  // smaller than the target are left at their own size.
  const scale =
    `scale='if(gt(iw,ih),min(iw,${MAX_EDGE}),-2)':'if(gt(iw,ih),-2,min(ih,${MAX_EDGE}))'`;

  const result = spawnSync(
    ffmpeg,
    ['-hide_banner', '-loglevel', 'error', '-y', '-i', from, '-vf', scale,
      '-q:v', String(QUALITY), '-compression_level', '6', to],
    { encoding: 'utf8' },
  );

  if (result.status !== 0) {
    console.error(`  FAILED ${name}: ${result.stderr?.trim() || result.status}`);
    process.exitCode = 1;
    continue;
  }

  const before = fs.statSync(from).size;
  const after = fs.statSync(to).size;
  console.log(
    `  ${name.padEnd(30)} ${(before / 1024).toFixed(0).padStart(6)} KB -> ` +
    `${(after / 1024).toFixed(0).padStart(5)} KB  (${(100 - (after / before) * 100).toFixed(0)}% smaller)`,
  );
  written += 1;
}

console.log(`\n${written} written, ${skipped} already current.`);
