// import defaultTheme from 'tailwindcss/defaultTheme';
// import colors from 'tailwindcss/colors';

import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addComponents }) => {
  addComponents({
    ['.button']: {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
      'vertical-align': 'middle',
      'max-width': 'max-content',
      'padding-top': '0.5rem',
      'padding-bottom': '0.5rem',
      'padding-left': '1rem',
      'padding-right': '1rem',
      'line-height': '1'
    }
  });
});
