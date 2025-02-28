import plugin from 'tailwindcss/plugin.js';

export default plugin(({ addVariant }) => {
  addVariant('oversee', ['&:where(:hover, :focus)']);
  addVariant('peer-oversee', ['.peer:where(:hover, :focus) ~ &']);
  addVariant('group-oversee', ['.group:where(:hover, :focus) &']);
});
