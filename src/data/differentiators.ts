/** Diferenciais ("Por que comigo"). Fonte: docs/conteudo.md, seção 7. */

export interface Differentiator {
  readonly title: string;
  readonly description: string;
}

export const differentiatorsSection = {
  eyebrow: 'Por que comigo',
  title: 'Um site bonito é o começo. Ele precisa funcionar.',
} as const;

export const differentiators: readonly Differentiator[] = [
  {
    title: 'Rápido de verdade',
    description:
      'Páginas leves que abrem em segundos, inclusive no 4G. Visitante que espera vai embora.',
  },
  {
    title: 'Pensado para o celular',
    description:
      'A maioria dos seus clientes vai ver o site pelo celular, então eu começo por ele.',
  },
  {
    title: 'Feito para o Google',
    description: 'Estrutura, títulos e dados organizados para ajudar o seu site a ser encontrado.',
  },
  {
    title: 'WhatsApp em um toque',
    description: 'Botões com mensagem pronta, para o cliente falar com você sem esforço.',
  },
  {
    title: 'Atendimento direto',
    description: 'Sem intermediários: você fala com quem está construindo o seu site.',
  },
  {
    title: 'Código sob medida',
    description:
      'Nada de modelo pronto igual ao do concorrente. O seu site é feito para o seu negócio.',
  },
];
