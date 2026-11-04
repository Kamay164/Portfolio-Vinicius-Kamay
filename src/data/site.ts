/** Dados globais do site. Fonte: docs/conteudo.md. */

export interface SocialLink {
  readonly label: string;
  readonly href: string;
}

export interface SiteConfig {
  readonly name: string;
  /** <title> da home (até 60 caracteres). */
  readonly title: string;
  /** Meta description da home (até 155 caracteres). */
  readonly description: string;
  readonly email: string;
  readonly whatsapp: {
    /** Formato internacional, só dígitos: 55 + DDD + número. */
    readonly number: string;
    readonly display: string;
  };
  readonly socials: readonly SocialLink[];
}

export const siteConfig: SiteConfig = {
  name: 'Vinicius Kamay',
  title: 'Vinicius Kamay | Criação de sites e landing pages',
  description:
    'Sites e landing pages rápidos, bonitos e feitos para trazer clientes. Atendo empresas de todo o Brasil. Peça seu orçamento sem compromisso.',
  email: 'viniciuskamay123@gmail.com',
  whatsapp: {
    number: '5537999935176',
    display: '(37) 99993-5176',
  },
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/kamay.png/' },
    { label: 'GitHub', href: 'https://github.com/Kamay164' },
  ],
};
