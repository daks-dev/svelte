import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addVariant }) => {
  addVariant('oversee', ['&:where(:hover, :focus)']);
});
