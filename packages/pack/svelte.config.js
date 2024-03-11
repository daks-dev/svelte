import { vitePreprocess } from '@sveltejs/kit/vite';

import 'dotenv/config';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess()
};

export default config;
