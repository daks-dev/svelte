import common from '@daks.dev/svelte.kit/tailwindcss/presets/common';
import fontFamily from '@daks.dev/svelte.kit/tailwindcss/presets/font-family';
import type { Config } from 'tailwindcss';

export default {
  content: [
    ...common.content,
    './node_modules/@daks.dev/svelte.pack/dist/**/*.{svelte,html,js,ts}'
  ],

  presets: [fontFamily, common],

  theme: {
    extend: {
      backgroundImage: {
        'loading-data': 'url(@daks.dev/svelte.kit/icons/spinners/blocks-scale.svg)'
      }
    }
  }
} satisfies Config;
