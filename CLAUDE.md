# CLAUDE.md — Portfólio Vinicius Kamay

> Leia este arquivo inteiro antes de qualquer ação. Ele é a fonte de verdade do projeto.

## ⛔ Regra nº 1: uma etapa por vez

- O projeto é dividido em **etapas numeradas** (seção "Etapas"). Execute **somente a etapa que o Vinicius pedir**.
- **Nunca avance para a próxima etapa sem autorização explícita** ("pode seguir para a etapa X"). Terminar uma etapa não é autorização para começar a seguinte.
- Ao concluir uma etapa, **pare** e entregue:
  1. Resumo curto do que foi feito (arquivos criados/alterados).
  2. Como verificar (checklist da etapa).
  3. Os comandos Git, passo a passo, para o Vinicius rodar (**ele mesmo executa o Git**: não faça commit nem push).
  4. Pendências e perguntas, se houver.
- Atualize a tabela "Status das etapas" ao final de cada etapa.
- Se, durante uma etapa, surgir algo que pertence a outra, **anote em "Pendências"** em vez de fazer.

## Objetivo

Landing page de portfólio pessoal do **Vinicius Kamay**, desenvolvedor freelancer de sites, para **atrair clientes (pequenas e médias empresas)** e convertê-los em pedidos de orçamento pelo **WhatsApp** ou por **formulário**.

Estilo: moderno, **limpo**, tema **claro**, muito respiro, tipografia forte e azul apenas como destaque. Referência principal de tom e estrutura: gabrieldosite.com.br (inspiração, não cópia). Referências secundárias: mgsites.com.br e lr3digital.com.br/criacao-de-sites.

SEO é prioridade alta: o site deve ser o melhor possível para buscadores.

## Decisões já tomadas (não reabrir sem o Vinicius pedir)

| Tema | Decisão |
|---|---|
| Público | Clientes de freela (empresas que precisam de site) |
| Tema visual | Claro e limpo (fundo branco/off-white, texto marinho, azul nos destaques) |
| Identidade | **Definida na Etapa 1. Fonte da verdade: `docs/brand.md`** (guia visual em `docs/brand.html`). Novos ajustes só com aprovação |
| Monograma | Opção **D (Combinado)**: squircle, um tom (`#00AAFF`), filete marinho entre o V e o K |
| Paleta | **P2-A Cobalto suave**: `ink #0F1E36`, `bg #FBFBF9`, `tint #EEF5FF`, `primary #1565D8`. `accent #00AAFF` só decorativo, **nunca em texto** |
| Tipografia | **Plus Jakarta Sans** (uma família), via `@fontsource` |
| Visual | Amigável e não corporativo: botões em pílula, cards com raio de 20 px, sombras quase invisíveis |
| Stack | **Astro + Tailwind CSS + TypeScript** (saída estática) |
| Contato | WhatsApp (links `wa.me` com mensagem pronta) **+ formulário** (serviço gratuito, sem backend próprio) |
| Projetos | **Cards na landing que levam ao site publicado** (nova aba). Sem páginas de case. Páginas extras só se servirem ao SEO e forem aprovadas |
| Projetos fictícios | Exibir com selo discreto **"Projeto conceito"** |
| Conversor PDF | Cliente real, pode exibir com o nome **Tecno Construções** |
| Idioma | Português do Brasil |
| Conteúdo | **Fonte da verdade: `docs/conteudo.md`** (textos, ordem das seções, mensagens de WhatsApp, FAQ) |
| Atendimento | Todo o Brasil, 100% online (sem cidade no texto) |
| Dados de contato | WhatsApp `5537999935176` · GitHub `github.com/Kamay164` · Instagram `instagram.com/kamay.png` |
| Serviços | Landing page · Site institucional · Ferramenta web sob medida · Reforma de site |
| Tom | Primeira pessoa, próximo. Sem preço no site (só orçamento) |
| Rodapé | E-mail visível (viniciuskamay123@gmail.com), Instagram e GitHub |
| Depoimentos | Seção preparada, renderizada só quando houver depoimento real |
| Hospedagem | Vercel (fluxo atual do Vinicius: GitHub → deploy automático) |

## Contexto do Vinicius (como ele trabalha)

- Roda os comandos Git ele mesmo; quer **instruções Git passo a passo** ao fim de cada etapa.
- Testa **só no site publicado** (Vercel), nunca localmente. O projeto fica no **Google Drive** e ele **não roda `npm install` lá**: a Vercel instala e faz o build a cada push.
- Antes de entregar cada etapa, rode `npm run verify` (tipos + lint + formatação + build) no ambiente da sessão, de preferência numa cópia **fora do Drive**, e grave na pasta do projeto só os arquivos-fonte (sem `node_modules`, `dist` ou `.astro`).
- Prefere ferramentas **gratuitas**.
- Gosta de ser consultado sobre ajustes visuais: **pergunte antes de decidir** em temas de identidade e conteúdo.

## Projetos que entram no portfólio

| Projeto | URL | Tipo | Selo |
|---|---|---|---|
| Conversor PDF (Tecno Construções) | https://conversorpdf-six.vercel.app/ | Ferramenta web: fotos → relatório em PDF | Cliente real |
| Óticas Visão | https://ticas-vis-o.vercel.app/ | Landing page (ótica) | Projeto conceito |
| Academia +Fit | https://academia-fit-nine.vercel.app/ | Landing page (academia) | Projeto conceito |
| Barbearia Freitas | https://barbearia-freitas-sand.vercel.app/ | Landing page (barbearia) | Projeto conceito |

O **Metastorm não entra** no portfólio (decisão da Etapa 2). Os textos de cada card estão em `docs/conteudo.md`.

## Assets existentes

Pasta `Referencia - Logo e identidade visual/` (somente referência; **não editar os originais**):

- `logo.png`, `logo-Perfil.png`, `1x/Logo site.png`, `1x/Logo Perfil.png`, `1x/Ativo 9.png`: variações da logo.
- `logo.ai`: arquivo-fonte do Illustrator.
- `Foto de perfil.jpg`: 2048×2048, ~2,5 MB, fundo azul. Usar via `astro:assets` (nunca o original no bundle).

As inconsistências desses arquivos (azuis, marinhos e fontes diferentes) **foram resolvidas na Etapa 1**. Use **somente** os arquivos oficiais:

- `src/assets/brand/`: logo horizontal (padrão e negativo), monograma (padrão, negativo e mono) e wordmark, em SVG.
- `public/`: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `site.webmanifest`.
- `docs/brand.md`: tokens de cor, tipografia, raios e regras de uso. `docs/etapa-1-opcoes/` guarda o histórico das opções descartadas.

## Etapas

Cada etapa é independente e só começa com autorização.

| # | Etapa | Entregáveis principais |
|---|---|---|
| 0 | Planejamento | Este CLAUDE.md |
| 1 | Identidade visual | Paleta oficial (tokens), tipografia, monograma VK refinado em SVG, variações (horizontal, ícone, monocromática), favicons, `docs/brand.md` e uma página de prévia da marca |
| 2 | Conteúdo e arquitetura | `docs/conteudo.md` com a ordem das seções, todos os textos, CTAs e mensagens de WhatsApp. Lista de dados pendentes |
| 3 | Setup do projeto | Astro + Tailwind + TS strict, estrutura de pastas, tokens da Etapa 1 no Tailwind, ESLint/Prettier, `.gitignore`, deploy inicial na Vercel |
| 4 | Layout base e componentes | Layout, Header (menu mobile), Footer, Button, Section, Card, Badge, botão flutuante de WhatsApp |
| 5 | Seções da landing | Hero, Projetos, Serviços, Processo, Sobre, FAQ e CTA final, com dados tipados em `src/data/` |
| 6 | Imagens dos projetos | Screenshots padronizadas dos 5 sites (desktop/mobile), mockups e otimização (AVIF/WebP, `srcset`) |
| 7 | Formulário e contato | Formulário com validação, honeypot, estados (enviando/sucesso/erro), consentimento LGPD e página de Política de Privacidade |
| 8 | Animações e microinterações | Entradas sutis, hover e foco, respeitando `prefers-reduced-motion` |
| 9 | SEO técnico | Metatags, Open Graph e imagem OG, JSON-LD, sitemap, robots, canonical, página 404. Avaliar (e propor, sem criar) páginas extras de serviço |
| 10 | QA: acessibilidade, performance e revisão | Lighthouse, axe, testes de 360 a 1920 px, links, revisão de código e texto |
| 11 | Lançamento | Domínio, Google Search Console, analytics sem cookies e checklist final |

### Detalhes e critérios por etapa

**Etapa 1: Identidade visual**
- Apresente **2 ou 3 opções** de paleta e de tipografia (títulos e texto), com prós e contras, e **pergunte** antes de fixar.
- Refinamento do VK: vetorizar em SVG limpo e propor ajustes (proporções, cantos, os dois tons do K). Mostre **antes e depois**. Não descaracterize a marca.
- Tokens: `navy`, `primary` (acessível para texto e botões), `accent` (azul vivo, decorativo), neutros, estados (sucesso/erro).
- Verificação: contraste ≥ 4,5:1 em texto normal (documentar os pares de cores) e logo legível em 16 px (favicon).

**Etapa 2: Conteúdo**
- Tom: direto, em primeira pessoa, conversacional e tranquilizador (o cliente não precisa entender de tecnologia).
- **Não invente dados**: número de WhatsApp, cidade de atendimento, anos de experiência, depoimentos, métricas e preços só entram se o Vinicius fornecer. Até lá, use `TODO(vinicius): ...`.
- Defina palavras-chave-alvo para SEO junto com ele.
- Verificação: o Vinicius aprova o `docs/conteudo.md`.

**Etapa 3: Setup**
- Decidido: o projeto **continua no Google Drive** e os testes são feitos na Vercel.
- Verificação: `npm run verify` sem erros nem avisos e URL da Vercel no ar.
- Até o lançamento o site sai com `noindex` (variável `PUBLIC_ALLOW_INDEXING`, ver `.env.example`).

**Etapa 4: Layout (feito)**
- Menu de desktop só a partir de `lg` (64rem): em 768 px ele não cabe. Botão de WhatsApp flutuante em verde `#25D366` com ícone marinho; rodapé claro (`bg-tint`).
- Navegação em `src/data/navigation.ts`. QA: axe 0 violações, sem rolagem horizontal de 360 a 1920 px, menu por teclado.

**Etapa 5: Seções (feito)**
- H1: "Vamos colocar o seu negócio na internet, do jeito certo?". Ordem: Hero, Projetos, Serviços, Diferenciais, Processo, Sobre, FAQ, Contato (faixa marinha). FAQ com `<details>` nativo. Foto otimizada em `src/assets/profile/vinicius.jpg` (1000 px).
- Dados em `src/data/*.ts`; seções em `src/components/sections/`. Projetos usam miniatura provisória (monograma) até a Etapa 6.
- Conteúdo vem de `src/data/*.ts` (tipado), não espalhado no markup.
- Verificação: build ok e layout correto em 360, 768, 1280 e 1920 px.

**Etapa 7: Formulário**
- Serviço sugerido: Web3Forms (gratuito). A *access key* é pública por design, mas fica em variável de ambiente `PUBLIC_WEB3FORMS_KEY` e nunca hardcoded.
- Validação no cliente (campos obrigatórios, e-mail e telefone), limite de tamanho, honeypot anti-spam, botão desabilitado durante o envio, mensagens de erro acessíveis (`aria-live`) e fallback com link de WhatsApp se o envio falhar.
- Verificação: envio real chega ao e-mail; testar erro de rede (offline) e campos inválidos.

**Etapa 9: SEO**
- JSON-LD: `Person` + `ProfessionalService` (somente com dados reais).
- Páginas extras (por exemplo, serviços) só depois de propostas e aprovadas. Os cards de projeto continuam levando ao site publicado.
- Verificação: validar no Rich Results Test, `sitemap-index.xml` acessível e metatags conferidas no preview.

**Etapa 10: QA**
- Fazer em **sessão nova** (ou com subagente), revisando o trabalho sem o contexto de quem o construiu.

## Tecnologias

- **Astro** (output `static`) + **TypeScript** (`strict`).
- **Tailwind CSS** com tokens de design centralizados (cores, fontes, raios, sombras).
- Fontes self-hosted via `@fontsource` (sem request ao Google Fonts, por performance e LGPD).
- `astro:assets` para imagens; `@astrojs/sitemap` para o sitemap.
- JS mínimo: interatividade em `<script>` do Astro ou ilhas pequenas. **Não** adicionar React/framework de UI sem necessidade justificada.
- Formulário: Web3Forms (ou equivalente gratuito aprovado).
- Deploy: GitHub → Vercel.
- Versões da Etapa 3: Astro 7, Tailwind 4, TypeScript 6, Node 22. **ESLint fica no 9** e o `eslint-plugin-astro` no 1.x, porque o `eslint-plugin-jsx-a11y` (acessibilidade nos templates) ainda não aceita o ESLint 10.
- Tailwind: a paleta padrão foi removida de propósito (`--color-*: initial`). Só existem as cores da marca (`bg-primary`, `text-ink`…). Para uma cor nova, adicione o token em `docs/brand.md` e em `global.css`.

## Estrutura de pastas (alvo)

```
/
├── CLAUDE.md
├── docs/
│   ├── brand.md            # identidade visual oficial (Etapa 1)
│   └── conteudo.md         # textos aprovados (Etapa 2)
├── public/                 # favicons, robots.txt, og-image
├── src/
│   ├── assets/
│   │   ├── brand/          # logo e monograma SVG
│   │   ├── projects/       # screenshots otimizáveis
│   │   └── profile/        # foto
│   ├── components/
│   │   ├── layout/         # Header (menu mobile), Footer, WhatsAppFloat
│   │   ├── ui/             # Button, Badge, Card, Section, ExternalMark, WhatsAppIcon
│   │   └── sections/       # Hero, Projects, Services, Process, About, Faq, Cta
│   ├── data/               # site.ts, projects.ts, services.ts, faq.ts (tipados)
│   ├── layouts/            # BaseLayout.astro (SEO head)
│   ├── lib/                # helpers puros (ex.: whatsapp.ts)
│   ├── pages/              # index.astro, politica-de-privacidade.astro, 404.astro
│   └── styles/             # global.css
├── astro.config.mjs
├── eslint.config.js · prettier.config.mjs · .env.example · .gitignore
└── tsconfig.json          # tokens do Tailwind v4: bloco @theme em src/styles/global.css
```

`Referencia - Logo e identidade visual/` fica **fora do Git** (`.gitignore`), porque contém o `.ai` e arquivos pesados.

## Padrões de código

- Clean Code, componentes pequenos e de responsabilidade única. Prefira composição a componentes "faz-tudo".
- Tipagem em tudo (`interface`/`type` para os dados em `src/data`). Nada de `any`.
- Comentários explicam **o porquê** (regras de negócio e decisões), não o quê.
- Nomes de arquivos e componentes em inglês (PascalCase para componentes); textos do site em pt-BR.
- Um único helper para links de WhatsApp (`src/lib/whatsapp.ts`), com número e mensagem codificados via `encodeURIComponent`.
- Links externos com `target="_blank" rel="noopener noreferrer"` e indicação visual (↗).
- Sem segredos no repositório; `.env` no `.gitignore` e `.env.example` documentado.
- Trate erros explicitamente (formulário, imagens ausentes). Nada pode falhar em silêncio.

## Critérios de qualidade (Definition of Done do projeto)

- Lighthouse (mobile) ≥ **95** em Performance, Acessibilidade, Boas Práticas e SEO.
- Core Web Vitals: LCP < 2,5 s, CLS < 0,1.
- WCAG 2.2 AA: contraste, foco visível, navegação por teclado, `alt` em imagens, hierarquia de headings (um único `h1`).
- Responsivo de 360 px a 1920 px, sem rolagem horizontal.
- `npm run build` e `npm run lint` sem erros nem avisos.
- Nenhum `TODO(vinicius)` restante no lançamento.
- Rodapé com "© Vinicius Kamay" e o e-mail de contato viniciuskamay123@gmail.com (confirmar se ele quer o e-mail exposto).

## Restrições

- **Não invente informações** (números, depoimentos, clientes, preços, prazos, cidade). Use placeholders `TODO(vinicius)` e pergunte.
- **Não copie** textos, layouts ou assets dos sites de referência. Use-os só como inspiração.
- Não altere os arquivos originais em `Referencia - Logo e identidade visual/`.
- Não faça commit, push nem deploy. Entregue os comandos para o Vinicius.
- Não instale dependências fora da stack sem justificar e pedir.
- **Local do projeto:** a pasta fica no Google Drive (`G:\Outros computadores\...`), por decisão do Vinicius. Nunca crie `node_modules`, `dist` ou `.astro` nela: eles sincronizam milhares de arquivos e causam lentidão e conflitos. O `.gitignore` já os cobre, mas o ideal é nem criá-los.

## Status das etapas

| # | Etapa | Status |
|---|---|---|
| 0 | Planejamento | ✅ Concluída |
| 1 | Identidade visual | ✅ Concluída |
| 2 | Conteúdo e arquitetura | ✅ Concluída (com pendências de dados, ver checklist em `docs/conteudo.md`) |
| 3 | Setup do projeto | ✅ Concluída (aguardando o primeiro deploy na Vercel) |
| 4 | Layout base e componentes | ✅ Concluída (aguardando teste na Vercel) |
| 5 | Seções da landing | ✅ Concluída (aguardando teste na Vercel) |
| 6 | Imagens dos projetos | ⏳ Não iniciada |
| 7 | Formulário e contato | ⏳ Não iniciada |
| 8 | Animações | ⏳ Não iniciada |
| 9 | SEO técnico | ⏳ Não iniciada |
| 10 | QA | ⏳ Não iniciada |
| 11 | Lançamento | ⏳ Não iniciada |

## Dados pendentes (fornecidos pelo Vinicius)

A lista completa e atualizada está no fim de `docs/conteudo.md`. Itens críticos para o lançamento:

- [x] Número de WhatsApp
- [x] H1 do hero
- [x] Link do GitHub e base da seção "Sobre" (falta revisão)
- [x] Respostas da FAQ (prazo 3–5 dias úteis, domínio "depende", ajustes 7 dias)
- [ ] Depoimento da Tecno (opcional)
- [ ] Domínio próprio (recomendado para SEO) ou subdomínio da Vercel

## Pendências

_(anotar aqui o que surgir fora do escopo da etapa atual)_

- **Etapa 9:** revisar o `public/site.webmanifest` (nome, descrição, cores) junto com o restante do SEO.
- **Etapa 6:** trocar as miniaturas provisórias dos cards (`Projects.astro`) pelos prints reais.
- **Etapa 7:** seção Depoimento (só com depoimento real) e formulário no Contato (`src/data/contact.ts` tem um TODO).
- **Pendente (Vinicius):** confirmar a descrição do Conversor PDF e se a Tecno autoriza "relatório semanal"; revisar o texto de Sobre; prazo de resposta do contato (opcional).
- **Etapa 7:** incluir "Política de Privacidade" em `footerNav` (`src/data/navigation.ts`).
- **Etapa 8:** destacar o item ativo do menu conforme a rolagem (scroll-spy).
- **Etapa 9:** o anel de foco usa `primary` em fundo claro e `accent` em `data-theme="dark"` (o azul da logo não passa 3:1 no claro). Conferir no QA.
- **Etapa 11:** definir `SITE_URL` (domínio) e `PUBLIC_ALLOW_INDEXING=true` na Vercel. Sem isso o site continua `noindex`.
- **Manutenção:** revisar o ESLint 9 → 10 quando o `eslint-plugin-jsx-a11y` suportar. O `npm audit` aponta 14 avisos moderados só em ferramentas de desenvolvimento (cadeia do ESLint, via `minimatch`), nenhum em produção.
