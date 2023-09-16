import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addUtilities }) => {
  const utilities = {
    '.backface-visibile': {
      'backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden'
    }
  };
  addUtilities(utilities);
});
