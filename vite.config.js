import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
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
