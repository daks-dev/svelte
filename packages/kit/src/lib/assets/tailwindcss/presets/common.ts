import defaultTheme from 'tailwindcss/defaultTheme.js';
//import colors from 'tailwindcss/colors.js';
import type { Config } from 'tailwindcss';

import { default as base } from '../plugins/base.js';
import { default as components } from '../plugins/components.js';
import { default as utilities } from '../plugins/utilities.js';
import { default as aria } from '../plugins/aria.js';
import { default as onscroll } from '../plugins/onscroll.js';
import { default as animationPlayState } from '../plugins/animation-play-state.js';
import { default as vectorEffect } from '../plugins/svg/vector-effect.js';

/*
const sort = (obj) =>
  Object.keys(obj)
    .sort()
    .reduce((res, key) => ((res[key] = obj[key]), res), {});
*/

export default {
  content: ['./node_modules/@daks.dev/svelte.kit/dist/**/*.{html,js,jsx,ts,tsx,md,mdx,svelte}'],

  darkMode: 'class',

  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
      '3xl': '1680px'
    },
    extend: {
      container: {
        center: true
      },
      screens: {
        '-3xl': { max: '1679px' },
        '-2xl': { max: '1535px' },
        '-xl': { max: '1279px' },
        '-lg': { max: '1023px' },
        '-md': { max: '767px' },
        '-sm': { max: '639px' },
        '-xs': { max: '479px' }
      },
      fontSize: {
        '3xs': '0.5rem',
        '2xs': '0.625rem',
        '1.5xl': '1.375rem',
        '2.5xl': '1.6875rem',
        '3.5xl': '2rem',
        '4.5xl': '2.5rem'
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      backgroundSize: {
        '50%': '50%',
        '33%': '33.333333%',
        '25%': '25%',
        '20%': '20%',
        '10%': '10%',
        '5%': '5%'
      },
      backgroundImage: {
        waiting: 'url(@daks.dev/svelte.kit/icons/spinners/clock.svg)',
        loading: 'url(@daks.dev/svelte.kit/icons/spinners/90-ring-bg.svg)'
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
      aspectRatio: {
        '3/4': '3 / 4',
        '4/3': '4 / 3',
        A4: '620 / 877',
        A4l: '877 / 620'
      },
      content: {
        null: '""'
      },
      dropShadow: {
        deep: ['0 4px 3px rgb(0 0 0 / 0.4)', '0 2px 2px rgb(0 0 0 / 0.2)'],
        hard: ['0 4px 3px rgb(0 0 0 / 0.7)', '0 2px 2px rgb(0 0 0 / 0.4)']
      }
    }
  },

  plugins: [base, components, utilities, aria, onscroll, animationPlayState, vectorEffect]
} satisfies Config;
