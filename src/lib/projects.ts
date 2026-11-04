import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

/** Quantos projetos aparecem nos destaques da página inicial. */
export const FEATURED_LIMIT = 6;

const byOrder = (a: ProjectEntry, b: ProjectEntry): number =>
  a.data.order - b.data.order || a.data.name.localeCompare(b.data.name, 'pt-BR');

/** Todos os projetos, na ordem de exibição. */
export async function getProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection('projects');
  return projects.sort(byOrder);
}

/** Destaques da home. Sem nenhum marcado como destaque, usa os primeiros da lista. */
export async function getFeaturedProjects(): Promise<ProjectEntry[]> {
  const projects = await getProjects();
  const featured = projects.filter((project) => project.data.featured);
  return (featured.length > 0 ? featured : projects).slice(0, FEATURED_LIMIT);
}
