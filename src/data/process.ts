/** Como funciona. Fonte: docs/conteudo.md, seção 8. */

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

export const processSection = {
  eyebrow: 'Processo',
  title: 'Do primeiro "oi" ao site no ar',
  intro: 'Um processo simples e transparente. Você acompanha cada etapa e aprova antes de seguir.',
  cta: 'Começar pela conversa',
} as const;

export const processSteps: readonly ProcessStep[] = [
  {
    title: 'Conversa',
    description: 'Você me conta sobre o seu negócio e o que precisa. Não precisa ter nada pronto.',
  },
  {
    title: 'Proposta',
    description: 'Envio o escopo, o prazo e o investimento, tudo por escrito e sem letra miúda.',
  },
  {
    title: 'Criação',
    description: 'Desenvolvo o site e te mostro prévias para você ajustar o que quiser.',
  },
  {
    title: 'Publicação',
    description:
      'Coloco o site no ar, te oriento sobre os próximos passos e fico 7 dias à disposição para ajustes.',
  },
];
