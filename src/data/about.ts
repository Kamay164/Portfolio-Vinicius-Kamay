/** Seção "Sobre". Fonte: docs/conteudo.md, seção 9 (texto-base do perfil no Workana). */

export const aboutSection = {
  eyebrow: 'Sobre mim',
  title: 'Prazer, eu sou o Vinicius.',
  // TODO(vinicius): revisar o texto. Só entram dados que você já confirmou (4+ anos, formação).
  paragraphs: [
    'Atuo há mais de 4 anos no mercado digital, unindo design visual e tecnologia. Sou formado como Técnico em Desenvolvimento de Sistemas, com foco em desenvolvimento web (HTML, CSS, JavaScript e integração com bancos de dados SQL).',
    'Já criei landing pages, sistemas web e identidades visuais para clientes de diversos nichos. Meu trabalho une a sensibilidade do design à robustez do código: páginas rápidas, responsivas e alinhadas aos objetivos de quem as contrata.',
    'Cuido de cada projeto de perto, do primeiro contato à publicação, e explico tudo sem "tecniquês".',
  ],
  highlights: ['Mais de 4 anos no mercado digital', 'Técnico em Desenvolvimento de Sistemas'],
  // Só o que está confirmado: o Workana cita HTML, CSS, JavaScript e SQL; Astro e Tailwind são
  // a stack deste próprio site. React saiu da lista por não estar confirmado.
  technologies: ['HTML', 'CSS', 'JavaScript', 'Astro', 'Tailwind CSS'],
  photoAlt: 'Retrato de Vinicius Kamay, desenvolvedor de sites, em fundo azul',
} as const;
