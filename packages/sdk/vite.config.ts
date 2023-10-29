// import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from './src/lib/app/imagetools/server.js';
import { yaml } from './src/lib/app/vite/plugin-yaml.js';

export default defineConfig({
  logLevel: 'info', // error
  plugins: [imagetools(), yaml(), sveltekit()],
  server: { fs: { strict: false } },
  // build: { target: 'esnext' },
  // resolve: { alias: { '': resolve(process.cwd(), '') } },
  define: {
    'process.env': process.env
  },
  test: {
    // globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
