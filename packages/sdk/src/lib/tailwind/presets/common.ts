//import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme.js';
import type { Config } from 'tailwindcss';

import screens from '../screens.js';

import 'dotenv/config';
const breakpoint = process.env.PUBLIC_BREAKPOINT ?? 800;

import animationPlayState from '../plugins/animation-play-state.js';
import aria from '../plugins/aria.js';
import base from '../plugins/base.js';
import components from '../plugins/components.js';
import forcedColors from '../plugins/forced-colors.js';
import gridArea from '../plugins/grid-area.js';
import gradient from '../plugins/gradient.js';
import lazy from '../plugins/lazy.js';
import onload from '../plugins/onload.js';
import onscroll from '../plugins/onscroll.js';
import oversee from '../plugins/oversee.js';
import utilities from '../plugins/utilities.js';
import wrapper from '../plugins/wrapper.js';
import strokeLinecap from '../plugins/svg/stroke-linecap.js';
import strokeLinejoin from '../plugins/svg/stroke-linejoin.js';
import vectorEffect from '../plugins/svg/vector-effect.js';

const sort = (obj: Record<string, unknown>): NonNullable<unknown> =>
  Object.keys(obj)
    .sort()
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), <Record<string, unknown>>{});

export default {
  content: ['./node_modules/@daks.dev/svelte.sdk/dist/**/*.{html,js,ts,svelte}'],

  darkMode: 'class',

  theme: {
    screens: screens(breakpoint),
    /*
    {
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
    */
    fontSize: sort({
      '3xs': '0.5rem',
      '2xs': '0.625rem',
      '1.5xl': '1.375rem',
      '2.5xl': '1.6875rem',
      '3.5xl': '2rem',
      '4.5xl': '2.5rem',
      ...defaultTheme.fontSize
    }),
    backgroundSize: sort({
      '75%': '75%',
      '50%': '50%',
      '33%': '33.333333%',
      '25%': '25%',
      '20%': '20%',
      '10%': '10%',
      '5%': '5%',
      ...defaultTheme.backgroundSize
    }),
    aspectRatio: sort({
      '3/4': '3 / 4',
      '4/3': '4 / 3',
      A4: '620 / 877',
      A4l: '877 / 620',
      ...defaultTheme.aspectRatio
    }),
    backgroundImage: {
      none: 'none',
      loading: 'url(@daks.dev/svelte.sdk/icons/spinners/90-ring-bg.svg)',
      waiting: 'url(@daks.dev/svelte.sdk/icons/spinners/clock.svg)'
    },
    extend: {
      borderRadius: {
        '4xl': '3rem',
        '5xl': '4.5rem'
      },
      boxShadow: {
        inset: 'inset 0 0 0 1px var(--tw-shadow-color)'
      },
      container: {
        center: true
      },
      content: {
        null: '""'
      },
      dropShadow: {
        deep: ['0 4px 3px rgb(0 0 0 / 0.4)', '0 2px 2px rgb(0 0 0 / 0.2)'],
        hard: ['0 4px 3px rgb(0 0 0 / 0.7)', '0 2px 2px rgb(0 0 0 / 0.4)']
      },
      gradientColorStopPositions: {
        '150%': '150%'
      },
      listStyleType: {
        circle: 'circle',
        square: 'square'
      },
      /*
      minWidth: {
        auto: 'auto'
      },
      minHeight: {
        auto: 'auto'
      },
      */
      spacing: {
        inherit: 'inherit',
        unset: 'unset'
      }
    }
  },

  plugins: [
    base,
    components,
    wrapper,
    utilities,
    lazy,
    gradient,
    gridArea,
    strokeLinecap,
    strokeLinejoin,
    vectorEffect,
    animationPlayState,
    aria,
    onload,
    onscroll,
    oversee,
    forcedColors
  ]
} satisfies Config;
