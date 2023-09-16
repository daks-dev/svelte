import common from './src/lib/assets/tailwindcss/presets/common';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{svelte,html,ts,js}', ...common.content],

  presets: [common]
} satisfies Config;
