import { siteConfig } from '@/data/site';
import { whatsappMessages, type WhatsAppMessageKey } from '@/data/whatsapp-messages';

// Formato internacional sem símbolos: 55 + DDD (2 dígitos) + número (8 dígitos, ou 9 com o "9" extra).
const PHONE_PATTERN = /^55\d{2}9?\d{8}$/;

/**
 * Monta o link `wa.me` com a mensagem já preenchida.
 *
 * Lança erro em vez de gerar um link quebrado: assim um número digitado errado derruba o build
 * (e aparece na Vercel) em vez de chegar ao visitante como um botão que não funciona.
 */
export function buildWhatsAppUrl(
  message: string,
  phone: string = siteConfig.whatsapp.number,
): string {
  if (!PHONE_PATTERN.test(phone)) {
    throw new Error(`Número de WhatsApp inválido: "${phone}". Use o formato 55DDNNNNNNNNN.`);
  }
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/** Atalho para as mensagens cadastradas em `whatsappMessages`. */
export function whatsAppLink(key: WhatsAppMessageKey): string {
  return buildWhatsAppUrl(whatsappMessages[key]);
}
