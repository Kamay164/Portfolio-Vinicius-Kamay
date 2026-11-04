/** Perguntas frequentes. Fonte: docs/conteudo.md, seção 11. */

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const faqSection = {
  eyebrow: 'Dúvidas',
  title: 'Perguntas frequentes',
} as const;

export const faqItems: readonly FaqItem[] = [
  {
    question: 'Quanto custa um site?',
    answer:
      'Depende do tipo de projeto, da quantidade de páginas e das funcionalidades. Depois de uma conversa rápida, eu envio um orçamento claro e sem compromisso.',
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer:
      'Uma landing page costuma ficar pronta em 3 a 5 dias úteis depois que recebo os conteúdos. Para um site completo, combinamos o prazo na proposta, conforme o tamanho do projeto.',
  },
  {
    question: 'Preciso ter textos e fotos prontos?',
    answer:
      'Não. Se você já tiver, ótimo. Se não, eu te ajudo a organizar o conteúdo e sugiro o que funciona melhor. Na conversa a gente combina o quanto você quer que eu cuide dos textos.',
  },
  {
    question: 'Você atende fora da minha cidade?',
    answer: 'Sim. Atendo empresas de todo o Brasil, 100% online, por WhatsApp e videochamada.',
  },
  {
    question: 'O site vai aparecer no Google?',
    answer:
      'Eu entrego o site com a parte técnica de SEO bem feita: velocidade, estrutura e informações para o Google. A posição nas buscas também depende da concorrência e do tempo, mas o seu site começa do jeito certo.',
  },
  {
    question: 'E o domínio e a hospedagem?',
    answer:
      'Depende do projeto. Na conversa eu explico as opções (domínio próprio, hospedagem e possíveis custos) e deixo tudo por escrito na proposta, para você saber o que paga e por quê.',
  },
  {
    question: 'Vou conseguir fazer alterações depois?',
    answer:
      'Sim. Depois da entrega você tem 7 dias para pedir ajustes sem custo. Passado esse período, novos ajustes são orçados à parte, de forma clara e sem surpresa.',
  },
  {
    question: 'O site funciona no celular?',
    answer:
      'Sim. Todo site é feito primeiro para o celular e testado em diferentes tamanhos de tela.',
  },
];
