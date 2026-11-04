# Identidade visual: Vinicius Kamay (v1.0)

> Documento oficial da marca, aprovado na Etapa 1. A versão visual está em `docs/brand.html`.
> Qualquer mudança aqui precisa de aprovação do Vinicius.

## Decisões aprovadas

| Item | Escolha |
|---|---|
| Monograma | **Opção D (Combinado)**: squircle, letras 8% maiores com sangria e um tom só, com filete marinho entre o V e o K |
| Paleta | **P2-A (Cobalto suave)**: amigável, sem cara de corporativo |
| Tipografia | **Plus Jakarta Sans** (uma família para títulos e texto) |
| Tema | Claro |

Opções descartadas (histórico): `docs/etapa-1-opcoes/`.

## Origem dos vetores

- O desenho do monograma e do nome "Vinicius Kamay" foi extraído **sem redesenho** do `Referencia - Logo e identidade visual/logo.ai` (artboards 4 e 2).
- Refinamentos aplicados ao monograma:
  1. O quadrado passou a ter cantos contínuos (squircle: raio de 24% com handles de 0,66).
  2. As letras cresceram 8% a partir do centro, e a sangria nas laterais foi mantida por clip.
  3. O V e o K agora usam um tom só (`#00AAFF`), separados por um filete da cor do fundo (24 unidades em 754).
  4. O marinho foi unificado em `#0F1E36` (antes havia `#001834` e `#001E36`).

## Arquivos

| Arquivo | Uso |
|---|---|
| `src/assets/brand/logo-horizontal.svg` | Logo principal (header) em fundo claro |
| `src/assets/brand/logo-horizontal-negativo.svg` | Logo em fundo marinho (nome em branco, quadrado `#1E3253`) |
| `src/assets/brand/vk-monograma.svg` | Monograma em fundo claro |
| `src/assets/brand/vk-monograma-negativo.svg` | Monograma em fundo marinho |
| `src/assets/brand/vk-monograma-mono.svg` | Uma cor (`currentColor`), com letras vazadas. Para fotos, impressos e marca d'água |
| `src/assets/brand/wordmark.svg` | Só o nome (`currentColor`) |
| `public/favicon.svg` | Favicon vetorial (navegadores modernos) |
| `public/favicon.ico` | Favicon 16, 32 e 48 px (compatibilidade) |
| `public/apple-touch-icon.png` | 180 × 180, fundo cheio (o iOS arredonda os cantos) |
| `public/icon-192.png`, `public/icon-512.png` | Ícones do manifest |
| `public/site.webmanifest` | Manifest básico (revisar na Etapa 9) |

> **Nota técnica:** os SVGs usam `clipPath`/`mask` com IDs fixos. Para repetir o mesmo SVG **inline** várias vezes na página, use `<img>`/`astro:assets` ou gere IDs únicos, para evitar IDs duplicados no DOM.
> As versões `mono` e `wordmark` usam `currentColor`: a cor é herdada só quando o SVG está **inline**. Como `<img>`, elas aparecem em preto.

## Logo: regras de uso

- **Área de respiro:** no mínimo ¼ da altura do monograma livre em volta.
- **Tamanho mínimo:** monograma com 16 px; logo horizontal com 120 px de largura (abaixo disso, use só o monograma).
- **Fundo claro:** versão padrão. **Fundo marinho:** versão negativa. **Foto ou 1 cor:** versão mono.
- **Não fazer:** esticar, girar ou recortar; trocar cores ou aplicar gradiente; remover o filete entre o V e o K; usar sobre fundo sem contraste.

## Cores (tokens)

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#0F1E36` | Títulos, texto principal, fundo do monograma |
| `muted` | `#5A6578` | Texto secundário, legendas |
| `bg` | `#FBFBF9` | Fundo da página (branco quente) |
| `surface` | `#FFFFFF` | Cards e campos sobre o fundo |
| `tint` | `#EEF5FF` | Azul-bebê: cards de destaque, seções alternadas, selos |
| `border` | `#E6E9EE` | Divisórias e contornos |
| `primary` | `#1565D8` | Cobalto: botões, links, palavras em destaque |
| `primary-hover` | `#0F52B5` | Hover/ativo |
| `accent` | `#00AAFF` | **Só decorativo** (logo, pontos, ícones grandes; anel de foco apenas em fundo escuro). **Nunca em texto** |
| `ink-2` | `#1E3253` | Quadrado do monograma em fundo marinho |
| `success` | `#0B7A57` | Feedback de sucesso |
| `error` | `#C62828` | Validação e erro |

### Contraste verificado (WCAG 2.2)

| Par | Razão | Resultado |
|---|---|---|
| `ink` / `bg` | 16,10:1 | AA ✅ |
| `muted` / `bg` | 5,68:1 | AA ✅ |
| `muted` / `tint` | 5,37:1 | AA ✅ |
| branco / `primary` (botão) | 5,41:1 | AA ✅ |
| branco / `primary-hover` | 7,26:1 | AA ✅ |
| `primary` / `bg` (link) | 5,22:1 | AA ✅ |
| `primary` / `tint` | 4,93:1 | AA ✅ |
| `success` / `bg` | 5,15:1 | AA ✅ |
| `error` / `bg` | 5,43:1 | AA ✅ |
| branco / `ink` | 16,68:1 | AA ✅ |
| `accent` / `bg` | 2,47:1 | ❌ proibido em texto |

### WhatsApp

O verde oficial do WhatsApp (`#25D366`) com texto branco tem contraste de 1,98:1 e reprova. **Recomendação:** o botão de WhatsApp usa a cor `primary` com o ícone do WhatsApp, para manter a paleta coesa. Alternativa acessível: fundo `#25D366` com texto `ink` (8,41:1). A decisão final fica para a Etapa 4.

### Pronto para a Etapa 3 (CSS custom properties)

```css
:root {
  --color-ink: #0F1E36;
  --color-ink-2: #1E3253;
  --color-muted: #5A6578;
  --color-bg: #FBFBF9;
  --color-surface: #FFFFFF;
  --color-tint: #EEF5FF;
  --color-border: #E6E9EE;
  --color-primary: #1565D8;
  --color-primary-hover: #0F52B5;
  --color-accent: #00AAFF;
  --color-success: #0B7A57;
  --color-error: #C62828;
}
```

## Tipografia

- **Família:** Plus Jakarta Sans, self-hosted via `@fontsource/plus-jakarta-sans`, subset `latin` (já cobre acentos do português) e `font-display: swap`.
- **Pesos:** 400 (texto), 500, 600 (botões, eyebrow), 700 (H3), 800 (Display/H2).

| Estilo | Peso | Tamanho / altura de linha | Tracking |
|---|---|---|---|
| Display (H1) | 800 | `clamp(40px, 6vw, 72px)` / 1.05 | -0.035em |
| H2 | 800 | `clamp(30px, 4vw, 48px)` / 1.1 | -0.03em |
| H3 | 700 | 20–24px / 1.3 | -0.02em |
| Corpo | 400 | 17–18px / 1.65 | 0 |
| Pequeno | 400–500 | 14–15px / 1.5 | 0 |
| Eyebrow | 600 | 13px, caixa alta | +0.12em |

Destaque de palavra-chave em títulos: cor `primary` com marca-texto suave (`primary` a 18% de opacidade, nos 38% inferiores da linha).

## Forma e espaço (visual amigável)

| Token | Valor |
|---|---|
| Raio de botão | `999px` (pílula) |
| Raio de card | `20px` |
| Raio pequeno (inputs, thumbs) | `12–14px` |
| Sombra | quase invisível: `0 1px 2px rgb(15 30 54 / .06), 0 8px 24px rgb(15 30 54 / .06)` |
| Container | `max-width: 1200px`, gutter de 16px (mobile) a 24px |
| Respiro de seção | `clamp(72px, 10vw, 128px)` vertical |
| Foco | `outline: 3px solid var(--color-primary); outline-offset: 3px` em fundo claro (5,22:1). Em seções escuras (`data-theme="dark"`), `var(--color-accent)` (6,51:1). O azul da logo não serve em fundo claro: 2,47:1, abaixo dos 3:1 exigidos para elementos de interface |
| Botão | padding de 14 × 22px, peso 600 |
| Selo "Projeto conceito" | pílula, 12px/600, fundo `tint` (ou branco quando estiver sobre `tint`) |
