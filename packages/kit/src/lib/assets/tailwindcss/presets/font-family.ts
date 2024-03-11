import defaultTheme from 'tailwindcss/defaultTheme.js';
import type { Config } from 'tailwindcss';

const fontFamily = ['Roboto', '"Helvetica Neue"']
  .concat(defaultTheme.fontFamily.sans)
  .filter((item, pos, array) => array.indexOf(item) === pos);

export const partial: Partial<Config> = {
  theme: {
    extend: {
      fontFamily: { sans: ['"Open Sans"', ...fontFamily] }
      // fontFamily: { sans: fontFamily }
    }
  }
};

export default partial as Config;
