/** Menus do site. Os rótulos vêm de docs/conteudo.md e as âncoras das seções da home. */

export interface NavItem {
  readonly label: string;
  /** Com a barra inicial, o link também funciona a partir de outras páginas (404, privacidade). */
  readonly href: string;
}

export const mainNav: readonly NavItem[] = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Como funciona', href: '/#processo' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Dúvidas', href: '/#faq' },
];

// TODO(etapa-7): incluir "Política de Privacidade" aqui quando a página existir.
export const footerNav: readonly NavItem[] = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Dúvidas', href: '/#faq' },
];
