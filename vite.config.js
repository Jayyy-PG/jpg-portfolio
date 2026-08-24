import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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

export default defineConfig({
  plugins: [react(), stripAuthoringSidecar('.image-slots.state.json')],
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
