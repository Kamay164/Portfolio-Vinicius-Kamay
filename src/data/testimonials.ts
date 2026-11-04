/**
 * Avaliações de clientes. A seção só aparece no site quando esta lista tem pelo menos um item.
 * Só entram depoimentos reais, com autorização de quem escreveu (nada de texto inventado).
 */

export interface Testimonial {
  readonly quote: string;
  readonly author: string;
  /** Cargo e empresa, ex.: "Sócio, Tecno Construções". */
  readonly role?: string;
}

export const testimonialsSection = {
  eyebrow: 'Avaliações',
  title: 'O que dizem sobre o meu trabalho',
} as const;

// Exemplo de formato (descomente e troque pelo texto real):
// { quote: 'Texto do depoimento.', author: 'Nome', role: 'Cargo, Empresa' },
export const testimonials: readonly Testimonial[] = [];
