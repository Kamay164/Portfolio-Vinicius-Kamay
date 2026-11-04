// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// O domínio final só será definido na Etapa 11. Até lá, a URL base (usada no canonical e no
// sitemap) vem, em ordem de prioridade: SITE_URL (domínio próprio) → URL de produção da Vercel
// (injetada automaticamente no build) → localhost.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : 'http://localhost:4321');

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
