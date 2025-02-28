import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addVariant }) => {
  addVariant('forced-colors', '@media (forced-colors: active)');
});
