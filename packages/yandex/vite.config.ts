// import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  logLevel: 'error', // 'info'
  plugins: [sveltekit()],
  build: {
    target: 'esnext'
  },
  // server: { fs: { strict: false } },
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
