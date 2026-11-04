/** @type {import('prettier').Config} */
export default {
  semi: true,
  singleQuote: true,
  printWidth: 100,
  endOfLine: 'lf',
  // O plugin do Tailwind precisa ser o último: ele ordena as classes dos utilitários.
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
  tailwindStylesheet: './src/styles/global.css',
};
