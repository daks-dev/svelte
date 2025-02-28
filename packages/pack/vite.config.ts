// import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { yaml } from '@daks.dev/svelte.kit/vite';
import { imagetools } from '@daks.dev/vite-imagetools/plugin';

export default defineConfig({
  logLevel: 'error', // 'info'
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
