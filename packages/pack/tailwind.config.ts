import common from './src/lib/assets/tailwindcss/presets/common';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,md,mdx,svelte}', ...common.content],

  presets: [common]
} satisfies Config;
