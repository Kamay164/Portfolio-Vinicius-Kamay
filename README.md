# Portfólio Vinicius Kamay

Landing page de portfólio para atrair clientes de criação de sites. Astro + Tailwind CSS + TypeScript, saída estática, hospedada na Vercel.

As regras do projeto, as etapas e as decisões estão em [`CLAUDE.md`](./CLAUDE.md). A identidade visual está em [`docs/brand.md`](./docs/brand.md) e os textos em [`docs/conteudo.md`](./docs/conteudo.md).

## Scripts

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor local |
| `npm run build` | Gera o site estático em `dist/` (é o que a Vercel roda) |
| `npm run preview` | Serve o `dist/` localmente |
| `npm run check` | Verificação de tipos (`astro check`) |
| `npm run lint` | ESLint (inclui acessibilidade nos templates) |
| `npm run format` | Prettier (grava) |
| `npm run verify` | `check` + `lint` + `format:check` + `build` |

Requer Node 22 (ver `.nvmrc`).

## Fluxo de trabalho

1. Cada etapa termina com um commit e `git push` na `main`.
2. A Vercel faz o deploy automático, e os testes são feitos na URL publicada.
3. Variáveis de ambiente: ver `.env.example`.
