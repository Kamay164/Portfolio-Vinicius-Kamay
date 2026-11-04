import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

import { projectCategoryIds } from '@/data/project-categories';

/**
 * Projetos do portfólio: um arquivo .md por site em src/content/projects/.
 * Para adicionar um site novo basta copiar um arquivo existente e trocar os dados; o schema
 * abaixo derruba o build (com mensagem clara) se faltar algum campo ou a categoria for inválida.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      name: z.string().min(1),
      category: z.enum(projectCategoryIds),
      /** Uma ou duas frases: o que o site faz e para quem. */
      description: z.string().min(20).max(220),
      /** Site publicado: o card abre direto nele (decisão do projeto: sem páginas de case). */
      url: z.url(),
      /** Aparece nos destaques da página inicial. */
      featured: z.boolean().default(false),
      /** Ordem de exibição (menor primeiro). */
      order: z.number().int().default(100),
      /** Print do site (Etapa 6). Enquanto não existir, o card usa uma miniatura provisória. */
      image: image().optional(),
      imageAlt: z.string().optional(),
    }),
});

export const collections = { projects };
