import type { WhatsAppMessageKey } from '@/data/whatsapp-messages';

/** Serviços ("Por onde começar"). Fonte: docs/conteudo.md, seção 6. */

export interface Service {
  readonly id: string;
  readonly title: string;
  /** Frase na voz do cliente: ajuda quem não conhece o nome técnico a se reconhecer. */
  readonly situation: string;
  readonly description: string;
  readonly cta: string;
  /** Mensagem de WhatsApp pré-preenchida deste serviço. */
  readonly message: WhatsAppMessageKey;
}

export const servicesSection = {
  eyebrow: 'Serviços',
  title: 'Qual é o seu momento?',
  intro:
    'Não precisa saber o nome técnico. Escolha o que mais parece com a sua situação e a gente conversa.',
} as const;

export const services: readonly Service[] = [
  {
    id: 'landing-page',
    title: 'Landing page',
    situation: 'Quero divulgar um serviço ou oferta.',
    description:
      'Uma página única, direta, feita para transformar visitas em contatos no WhatsApp. Ideal para anúncios e para o link da bio.',
    cta: 'Quero uma landing page',
    message: 'landingPage',
  },
  {
    id: 'site-institucional',
    title: 'Site institucional',
    situation: 'Quero apresentar minha empresa.',
    description:
      'Um site completo, com quem você é, o que faz, onde atende e como falar com você. Passa confiança e ajuda a aparecer no Google.',
    cta: 'Quero um site',
    message: 'institutionalSite',
  },
  {
    id: 'ferramenta-web',
    title: 'Ferramenta web sob medida',
    situation: 'Preciso resolver um problema do dia a dia.',
    description:
      'Sistemas simples feitos para o seu processo, como gerar relatórios, organizar pedidos ou automatizar tarefas repetitivas.',
    cta: 'Tenho uma ideia',
    message: 'customTool',
  },
  {
    id: 'reforma-de-site',
    title: 'Reforma de site',
    situation: 'Já tenho um site, mas ele não ajuda.',
    description:
      'Deixo seu site mais moderno, mais rápido e funcionando bem no celular, aproveitando o que já existe.',
    cta: 'Quero reformar meu site',
    message: 'redesign',
  },
];
