/** Textos do hero. Fonte: docs/conteudo.md, seção 4. */

export interface HeroContent {
  readonly eyebrow: string;
  /**
   * O H1 tem duas linhas: o ditado (gancho) e a frase com a palavra-chave "criação de sites",
   * que é a que importa para o Google. `highlight` ganha o marca-texto azul.
   */
  readonly title: {
    readonly hook: string;
    readonly before: string;
    readonly highlight: string;
    readonly after: string;
  };
  readonly subtitle: string;
  readonly primaryCta: string;
  readonly secondaryCta: string;
  /** Selos de confiança abaixo dos botões. */
  readonly assurances: readonly string[];
  readonly photoAlt: string;
}

export const hero: HeroContent = {
  eyebrow: 'Criação de sites e landing pages',
  title: {
    hook: 'Quem não é visto não é lembrado.',
    before: 'Criação de sites para o seu negócio ',
    highlight: 'aparecer no Google',
    after: '.',
  },
  subtitle:
    'Eu crio sites e landing pages rápidos, modernos e preparados para você aparecer no Google e transformar visitas em clientes. Me conta o que você precisa e eu te mando um orçamento.',
  primaryCta: 'Pedir orçamento',
  secondaryCta: 'Ver projetos',
  assurances: ['Atendimento rápido', 'Otimizado para o Google', 'Sites leves e rápidos'],
  photoAlt: 'Retrato de Vinicius Kamay, desenvolvedor de sites, em fundo azul',
};
