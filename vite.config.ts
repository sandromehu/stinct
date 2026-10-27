import { defineConfig } from 'vite';

export default defineConfig({
  // Relative URLs so the build also works when served from a sub-folder.
  base: './',
  esbuild: { jsx: 'automatic' },
  server: { port: 3000, host: '0.0.0.0' },
});
