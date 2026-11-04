/** Textos do hero. Fonte: docs/conteudo.md, seção 4. */

export interface HeroContent {
  readonly eyebrow: string;
  /** Título em duas partes: `highlight` ganha o marca-texto azul. */
  readonly title: { readonly before: string; readonly highlight: string; readonly after: string };
  readonly subtitle: string;
  readonly primaryCta: string;
  readonly secondaryCta: string;
  /** Selos de confiança abaixo dos botões. */
  readonly assurances: readonly string[];
  readonly photoAlt: string;
}

export const hero: HeroContent = {
  eyebrow: 'Desenvolvedor de sites · Atendo todo o Brasil',
  title: {
    before: 'Vamos colocar o seu negócio na internet, ',
    highlight: 'do jeito certo',
    after: '?',
  },
  subtitle:
    'Eu crio sites e landing pages rápidos, bonitos e pensados para o celular, para que quem chega até você entenda o que você faz e chame no WhatsApp. Você conversa direto comigo, do primeiro contato à publicação.',
  primaryCta: 'Pedir orçamento no WhatsApp',
  secondaryCta: 'Ver projetos',
  assurances: [
    'Atendimento direto comigo',
    '100% online, para todo o Brasil',
    'Orçamento sem compromisso',
  ],
  photoAlt: 'Retrato de Vinicius Kamay, desenvolvedor de sites, em fundo azul',
};
