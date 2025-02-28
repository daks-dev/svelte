import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addVariant }) => {
  addVariant('onscroll', ['&.scrolled', '.scrolled &']);
});
