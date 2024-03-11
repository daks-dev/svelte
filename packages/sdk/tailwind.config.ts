import common from './src/lib/tailwind/presets/common';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,ts,svelte}', ...common.content],

  presets: [common]
} satisfies Config;
