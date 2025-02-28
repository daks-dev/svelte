// import defaultTheme from 'tailwindcss/defaultTheme.js';
// import colors from 'tailwindcss/colors.js';
import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addUtilities }) => {
  addUtilities({
    ['img.lazy-loaded']: {
      'background-image': 'none'
    },
    ['img:not([src]):not([srcset])']: {
      visibility: 'hidden'
    }
  });
});
