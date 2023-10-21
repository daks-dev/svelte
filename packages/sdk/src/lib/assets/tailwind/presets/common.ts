//import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import type { Config } from 'tailwindcss';

import { default as base } from '../plugins/base.js';
import { default as components } from '../plugins/components.js';
import { default as utilities } from '../plugins/utilities.js';
import { default as aria } from '../plugins/aria.js';
import { default as onscroll } from '../plugins/onscroll.js';
import { default as animationPlayState } from '../plugins/animation-play-state.js';
import { default as strokeLinecap } from '../plugins/svg/stroke-linecap.js';
import { default as strokeLinejoin } from '../plugins/svg/stroke-linejoin.js';
import { default as vectorEffect } from '../plugins/svg/vector-effect.js';

const sort = (obj: Record<string, unknown>) =>
  Object.keys(obj)
    .sort()
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), <Record<string, unknown>>{});

export default {
  content: ['./node_modules/@daks.dev/svelte.sdk/dist/**/*.{html,js,ts,svelte}'],

  darkMode: 'class',

  theme: {
    screens: {
      '-3xl': { max: '1679px' },
      '-2xl': { max: '1535px' },
      '-xl': { max: '1279px' },
      '-lg': { max: '1023px' },
      '-md': { max: '767px' },
      '-sm': { max: '639px' },
      '-xs': { max: '479px' },
      xs: '480px',
      ...defaultTheme.screens,
      '3xl': '1680px'
    },
    fontSize: <Record<string, string>>sort({
      '3xs': '0.5rem',
      '2xs': '0.625rem',
      '1.5xl': '1.375rem',
      '2.5xl': '1.6875rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      ...defaultTheme.fontSize
    }),
    backgroundSize: <Record<string, string>>sort({
      '75%': '75%',
      '50%': '50%',
      '33%': '33.333333%',
      '25%': '25%',
      '20%': '20%',
      '10%': '10%',
      '5%': '5%',
      ...defaultTheme.backgroundSize
    }),
    aspectRatio: <Record<string, string>>sort({
      '3/4': '3 / 4',
      '4/3': '4 / 3',
      A4: '620 / 877',
      A4l: '877 / 620',
      ...defaultTheme.aspectRatio
    }),
    extend: {
      container: {
        center: true
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      spacing: {
        inherit: 'inherit'
      },
      minWidth: {
        auto: 'auto'
      },
      minHeight: {
        auto: 'auto'
      },
      content: {
        null: '""'
      }
    }
  },

  plugins: [
    animationPlayState,
    aria,
    base,
    components,
    onscroll,
    utilities,
    strokeLinecap,
    strokeLinejoin,
    vectorEffect
  ]
} satisfies Config;
