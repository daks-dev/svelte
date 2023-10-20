import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addUtilities }) => {
  const utilities = {
    '.linecap-butt': {
      'stroke-linecap': 'butt'
    },
    '.linecap-round': {
      'stroke-linecap': 'round'
    },
    '.linecap-square': {
      'stroke-linecap': 'square'
    }
  };
  addUtilities(utilities);
});
