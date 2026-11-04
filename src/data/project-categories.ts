/** Tipos de projeto. O selo do card e o filtro da página /projetos usam esta lista. */

export const projectCategoryIds = ['landing-page', 'site-institucional', 'ferramenta-web'] as const;

export type ProjectCategoryId = (typeof projectCategoryIds)[number];

export const projectCategoryLabels: Record<ProjectCategoryId, string> = {
  'landing-page': 'Landing page',
  'site-institucional': 'Site institucional',
  'ferramenta-web': 'Ferramenta web',
};
