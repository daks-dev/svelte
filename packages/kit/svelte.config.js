import { vitePreprocess } from '@sveltejs/kit/vite';

import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    files: {
      serviceWorker: './src/lib/app/service-worker.js'
    }
  }
};

export default config;
