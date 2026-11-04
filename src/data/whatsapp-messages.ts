/** Mensagens pré-preenchidas dos botões de WhatsApp (M1 a M5 em docs/conteudo.md). */
export const whatsappMessages = {
  /** M1: header, hero, processo, contato e botão flutuante. */
  general: 'Olá, Vinicius! Vi seu site e quero um orçamento.',
  /** M2 */
  landingPage: 'Olá, Vinicius! Quero um orçamento de landing page.',
  /** M3 */
  institutionalSite: 'Olá, Vinicius! Quero um orçamento de site para minha empresa.',
  /** M4 */
  customTool: 'Olá, Vinicius! Tenho uma ideia de ferramenta para o meu negócio e queria conversar.',
  /** M5 */
  redesign: 'Olá, Vinicius! Já tenho um site e quero reformar.',
} as const satisfies Record<string, string>;

export type WhatsAppMessageKey = keyof typeof whatsappMessages;
