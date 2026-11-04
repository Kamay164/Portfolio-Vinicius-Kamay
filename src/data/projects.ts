/** Projetos exibidos na landing. Fonte: docs/conteudo.md, seção 5. */

export type ProjectKind = 'client' | 'concept';

export interface Project {
  readonly id: string;
  readonly name: string;
  /** `client` = trabalho para cliente real; `concept` = marca fictícia criada para o portfólio. */
  readonly kind: ProjectKind;
  readonly category: string;
  readonly description: string;
  /** Site publicado: o card leva direto para ele (decisão do projeto: sem páginas de case). */
  readonly url: string;
}

export const projectsSection = {
  eyebrow: 'Portfólio',
  title: 'Projetos que já estão no ar',
  intro:
    'Um trabalho para cliente real e alguns projetos conceito, criados para mostrar como eu resolvo cada tipo de negócio. Clique para ver cada site funcionando.',
  conceptNote: 'Projeto conceito: marca fictícia, criada para portfólio.',
  buttonLabel: 'Ver site',
} as const;

// TODO(vinicius): confirmar a descrição do Conversor PDF e se a Tecno autoriza "relatório semanal".
// A ordem é a de exibição: o trabalho de cliente vem primeiro.
export const projects: readonly Project[] = [
  {
    id: 'conversor-pdf',
    name: 'Conversor PDF: Tecno Construções',
    kind: 'client',
    category: 'Ferramenta web sob medida',
    description:
      'Ferramenta que transforma fotos da obra em um relatório semanal em PDF, pronto para enviar. Acaba com a montagem manual de relatórios.',
    url: 'https://conversorpdf-six.vercel.app/',
  },
  {
    id: 'oticas-visao',
    name: 'Óticas Visão',
    kind: 'concept',
    category: 'Landing page',
    description:
      'Landing page para ótica: óculos de grau, de sol e lentes de contato, com visual elegante e foco em atendimento personalizado.',
    url: 'https://ticas-vis-o.vercel.app/',
  },
  {
    id: 'academia-fit',
    name: 'Academia +Fit',
    kind: 'concept',
    category: 'Landing page',
    description:
      'Landing page para academia, com modalidades, convite para aula experimental grátis e chamada direta para matrícula.',
    url: 'https://academia-fit-nine.vercel.app/',
  },
  {
    id: 'barbearia-freitas',
    name: 'Barbearia Freitas',
    kind: 'concept',
    category: 'Landing page',
    description:
      'Site para barbearia, com serviços e preços, equipe, galeria e agendamento pelo WhatsApp.',
    url: 'https://barbearia-freitas-sand.vercel.app/',
  },
];
