// import { resolve } from 'path';
import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from './src/lib/server.js';

export default defineConfig({
  logLevel: 'error', // 'info'
  plugins: [imagetools(), sveltekit()],
  // build: { target: 'esnext' },
  // server: { fs: { strict: false } },
  // resolve: { alias: { '': resolve(process.cwd(), '') } },
  // define: { 'process.env': process.env },
  test: {
    // globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
