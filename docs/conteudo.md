# Conteúdo e arquitetura: Portfólio Vinicius Kamay

> Entregável da Etapa 2. Textos em pt-BR, em primeira pessoa e com tom próximo.
> `TODO(vinicius)` = dado que só o Vinicius pode fornecer. **Nada aqui deve ser inventado.**
> Onde houver **opções (A/B/C)**, o Vinicius escolhe uma antes da Etapa 5.

## Decisões desta etapa

| Item | Decisão |
|---|---|
| Atendimento | Todo o Brasil, 100% online (sem cidade no texto) |
| Serviços | Landing page · Site institucional · Ferramenta web sob medida · Reforma de site existente |
| Projetos exibidos | Conversor PDF (Tecno Construções, real) · Óticas Visão · Academia +Fit · Barbearia Freitas (conceito). **Metastorm fica fora** |
| E-mail | Visível no rodapé: viniciuskamay123@gmail.com |
| Preço | Não exibido, só orçamento |
| Tom | Primeira pessoa, próximo e direto |
| Redes | Instagram (https://www.instagram.com/kamay.png/) e GitHub (`TODO(vinicius): link`) |
| Depoimento | Espaço preparado e **oculto** até chegar o texto da Tecno |

---

## 1. SEO da página

- **Palavras-chave principais:** criação de sites · criação de landing page · desenvolvedor de sites freelancer · site profissional para pequenas empresas
- **Secundárias:** site institucional · reformar site · sistema web sob medida · site para WhatsApp
- **`<title>` (≤ 60 caracteres):** `Vinicius Kamay | Criação de sites e landing pages`
- **Meta description (≤ 155 caracteres):** `Sites e landing pages rápidos, bonitos e feitos para trazer clientes. Atendo empresas de todo o Brasil. Peça seu orçamento sem compromisso.`
- **Texto do Open Graph:** "Vinicius Kamay: criação de sites e landing pages para empresas"

## 2. Arquitetura (ordem das seções)

| # | Seção | Âncora | Objetivo |
|---|---|---|---|
| 1 | Header | — | Logo, navegação e CTA fixo |
| 2 | Hero | `#inicio` | Dizer o que faço, para quem, e levar ao WhatsApp |
| 3 | Projetos | `#projetos` | Provar com trabalho real e conceitos |
| 4 | Serviços | `#servicos` | Ajudar o visitante a se identificar ("por onde começar") |
| 5 | Diferenciais | `#diferenciais` | Explicar por que vale contratar |
| 6 | Como funciona | `#processo` | Tirar o medo do processo |
| 7 | Sobre | `#sobre` | Mostrar a pessoa por trás (com foto) |
| 8 | Depoimento | `#depoimento` | **Oculta** até ter o texto real |
| 9 | Perguntas frequentes | `#faq` | Tirar objeções (bom para SEO) |
| 10 | Contato | `#contato` | Formulário + WhatsApp |
| 11 | Rodapé | — | Contatos, redes, links legais |

Páginas extras: `/politica-de-privacidade` (Etapa 7) e `404`.

---

## 3. Header

- Logo horizontal (link para o topo)
- Menu: **Projetos** · **Serviços** · **Como funciona** · **Sobre** · **Dúvidas**
- Botão: **Pedir orçamento** → WhatsApp (mensagem M1)

## 4. Hero

- **Eyebrow:** Desenvolvedor de sites · Atendo todo o Brasil
- **H1 (escolher uma opção):**
  - **A (recomendada):** Sites que fazem sua empresa ser encontrada **e escolhida**.
  - **B:** Seu site pronto para trazer clientes, **não só para existir**.
  - **C:** Sites e landing pages feitos **sob medida** para o seu negócio.
- **Subtítulo:** Eu crio sites e landing pages rápidos, bonitos e pensados para o celular, para que quem chega até você entenda o que você faz e fale com você no WhatsApp. Você conversa direto comigo, do primeiro contato à publicação.
- **CTA primário:** Pedir orçamento no WhatsApp → M1
- **CTA secundário:** Ver projetos → `#projetos`
- **Selos abaixo dos botões (3 itens):**
  - Atendimento direto comigo
  - 100% online, para todo o Brasil
  - Orçamento sem compromisso
- **Visual:** foto de perfil (fundo azul) com o monograma VK como elemento decorativo.

## 5. Projetos

- **Eyebrow:** Portfólio
- **H2:** Projetos que já estão no ar
- **Intro:** Um trabalho para cliente real e alguns projetos conceito, criados para mostrar como eu resolvo cada tipo de negócio. Clique para ver cada site funcionando.
- **Legenda do selo:** _"Projeto conceito: marca fictícia, criada para portfólio."_ (tooltip ou nota abaixo da grade)

| Ordem | Nome | Selo | Categoria | Descrição do card | Link |
|---|---|---|---|---|---|
| 1 (destaque) | Conversor PDF: Tecno Construções | **Cliente** | Ferramenta web sob medida | Ferramenta que transforma fotos da obra em um relatório semanal em PDF, pronto para enviar. Acaba com a montagem manual de relatórios. | https://conversorpdf-six.vercel.app/ |
| 2 | Óticas Visão | Projeto conceito | Landing page | Landing page para ótica: óculos de grau, de sol e lentes de contato, com visual elegante e foco em atendimento personalizado. | https://ticas-vis-o.vercel.app/ |
| 3 | Academia +Fit | Projeto conceito | Landing page | Landing page para academia, com modalidades, convite para aula experimental grátis e chamada direta para matrícula. | https://academia-fit-nine.vercel.app/ |
| 4 | Barbearia Freitas | Projeto conceito | Landing page | Site para barbearia, com serviços e preços, equipe, galeria e agendamento pelo WhatsApp. | https://barbearia-freitas-sand.vercel.app/ |

- **Botão de cada card:** Ver site ↗ (abre em nova aba)
- `TODO(vinicius)`: confirmar se a descrição do Conversor PDF está correta e se a Tecno autoriza mencionar "relatório semanal".
- O card da Tecno pode exibir **"Ferramenta interna, acesso restrito"** se o site não for público. `TODO(vinicius)`: confirmar.

## 6. Serviços ("Por onde começar")

- **Eyebrow:** Serviços
- **H2:** Qual é o seu momento?
- **Intro:** Não precisa saber o nome técnico. Escolha o que mais parece com a sua situação e a gente conversa.

| Card | Título | Texto | Botão → mensagem |
|---|---|---|---|
| 1 | Landing page | **Quero divulgar um serviço ou oferta.** Uma página única, direta, feita para transformar visitas em contatos no WhatsApp. Ideal para anúncios e para o link da bio. | Quero uma landing page → M2 |
| 2 | Site institucional | **Quero apresentar minha empresa.** Um site completo, com quem você é, o que faz, onde atende e como falar com você. Passa confiança e ajuda a aparecer no Google. | Quero um site → M3 |
| 3 | Ferramenta web sob medida | **Preciso resolver um problema do dia a dia.** Sistemas simples feitos para o seu processo, como gerar relatórios, organizar pedidos ou automatizar tarefas repetitivas. | Tenho uma ideia → M4 |
| 4 | Reforma de site | **Já tenho um site, mas ele não ajuda.** Deixo seu site mais moderno, mais rápido e funcionando bem no celular, aproveitando o que já existe. | Quero reformar meu site → M5 |

## 7. Diferenciais

- **Eyebrow:** Por que comigo
- **H2:** Um site bonito é o começo. Ele precisa funcionar.

| Título | Texto |
|---|---|
| Rápido de verdade | Páginas leves que abrem em segundos, inclusive no 4G. Visitante que espera vai embora. |
| Pensado para o celular | A maioria dos seus clientes vai ver o site pelo celular, então eu começo por ele. |
| Feito para o Google | Estrutura, títulos e dados organizados para ajudar o seu site a ser encontrado. |
| WhatsApp em um toque | Botões com mensagem pronta, para o cliente falar com você sem esforço. |
| Atendimento direto | Sem intermediários: você fala com quem está construindo o seu site. |
| Código sob medida | Nada de modelo pronto igual ao do concorrente. O seu site é feito para o seu negócio. |

## 8. Como funciona

- **Eyebrow:** Processo
- **H2:** Do primeiro "oi" ao site no ar
- **Intro:** Um processo simples e transparente. Você acompanha cada etapa e aprova antes de seguir.

1. **Conversa.** Você me conta sobre o seu negócio e o que precisa. Não precisa ter nada pronto.
2. **Proposta.** Envio o escopo, o prazo e o investimento, tudo por escrito e sem letra miúda.
3. **Criação.** Desenvolvo o site e te mostro prévias para você ajustar o que quiser.
4. **Publicação.** Coloco o site no ar e te oriento sobre os próximos passos. `TODO(vinicius)`: confirmar se oferece um período de suporte após a entrega e por quanto tempo.

- **CTA:** Começar pela conversa → M1

## 9. Sobre

- **Eyebrow:** Sobre mim
- **H2:** Prazer, eu sou o Vinicius.
- **Texto (rascunho, completar com a sua história):**
  > Sou desenvolvedor de sites e trabalho com pequenas e médias empresas de todo o Brasil. Gosto de transformar o que o cliente precisa em páginas simples, rápidas e bonitas, que fazem sentido para quem visita.
  >
  > `TODO(vinicius)`: 2 ou 3 frases sobre a sua trajetória (há quanto tempo cria sites, como começou, o que te motiva). Só com fatos reais.
  >
  > Cuido de cada projeto de perto, do primeiro contato à publicação, e explico tudo sem "tecniquês".
- **Destaques (opcionais, só com dados reais):** `TODO(vinicius)`, por exemplo nº de projetos entregues ou anos de experiência. Se não houver, a linha não entra.
- **Tecnologias (linha discreta):** HTML, CSS, JavaScript, React, Astro, Tailwind. `TODO(vinicius)`: confirmar a lista.
- **Links:** Instagram · GitHub

## 10. Depoimento (oculto até ter conteúdo)

- **H2:** Quem já trabalhou comigo
- **Conteúdo:** `TODO(vinicius)`: texto do depoimento, nome e cargo (Tecno Construções), com autorização para publicar.
- Regra técnica: a seção só é renderizada se houver ao menos 1 depoimento em `src/data/testimonials.ts`.

## 11. Perguntas frequentes

- **Eyebrow:** Dúvidas
- **H2:** Perguntas frequentes

1. **Quanto custa um site?**
   Depende do tipo de projeto, da quantidade de páginas e das funcionalidades. Depois de uma conversa rápida, eu envio um orçamento claro e sem compromisso.
2. **Quanto tempo leva para ficar pronto?**
   `TODO(vinicius)`: prazo médio (ex.: "Uma landing page costuma ficar pronta em X dias úteis depois que recebo os conteúdos").
3. **Preciso ter textos e fotos prontos?**
   Não. Se você já tiver, ótimo. Se não, eu te ajudo a organizar o conteúdo e sugiro o que funciona melhor. `TODO(vinicius)`: confirmar se você escreve os textos ou só orienta.
4. **Você atende fora da minha cidade?**
   Sim. Atendo empresas de todo o Brasil, 100% online, por WhatsApp e videochamada.
5. **O site vai aparecer no Google?**
   Eu entrego o site com a parte técnica de SEO bem feita: velocidade, estrutura e informações para o Google. A posição nas buscas também depende da concorrência e do tempo, mas o seu site começa do jeito certo.
6. **E o domínio e a hospedagem?**
   `TODO(vinicius)`: explicar como funciona (quem registra o domínio, se existe custo de hospedagem, se há mensalidade).
7. **Vou conseguir fazer alterações depois?**
   `TODO(vinicius)`: explicar a política de ajustes e manutenção depois da entrega.
8. **O site funciona no celular?**
   Sim. Todo site é feito primeiro para o celular e testado em diferentes tamanhos de tela.

## 12. Contato

- **Eyebrow:** Contato
- **H2:** Vamos tirar o seu site do papel?
- **Texto:** Me chama no WhatsApp ou preencha o formulário. Eu respondo pessoalmente. `TODO(vinicius)`: se quiser, informe um prazo de resposta (ex.: "em até 1 dia útil").
- **Botão:** Chamar no WhatsApp → M1
- **Formulário:**

| Campo | Tipo | Obrigatório | Placeholder / opções |
|---|---|---|---|
| Nome | texto | Sim | Seu nome |
| WhatsApp | tel | Sim | (00) 00000-0000 |
| E-mail | email | Não | voce@empresa.com |
| O que você precisa? | select | Sim | Landing page · Site institucional · Ferramenta sob medida · Reformar meu site · Ainda não sei |
| Mensagem | textarea (máx. 1000 caracteres) | Não | Conte um pouco sobre o seu negócio |
| Consentimento | checkbox | Sim | Concordo com o uso dos meus dados para retorno do contato, conforme a [Política de Privacidade](/politica-de-privacidade). |

- **Botão:** Enviar mensagem · enviando: "Enviando…"
- **Sucesso:** "Mensagem enviada! Vou te responder em breve." + link "Prefere agilizar? Me chama no WhatsApp."
- **Erro:** "Não consegui enviar agora. Tente de novo ou fale comigo pelo WhatsApp." + botão WhatsApp
- **Validação:**
  - "Informe seu nome."
  - "Informe um WhatsApp com DDD."
  - "Esse e-mail parece incompleto."
  - "Escolha uma opção."
  - "É preciso aceitar para enviar."

## 13. Rodapé

- Logo negativo (rodapé marinho) ou padrão (rodapé claro): decidir na Etapa 4
- Frase: Sites e landing pages para empresas de todo o Brasil.
- Contato: WhatsApp `TODO(vinicius): número` · viniciuskamay123@gmail.com
- Redes: Instagram · GitHub
- Links: Projetos · Serviços · Dúvidas · Política de Privacidade
- Linha final: © {ano atual} Vinicius Kamay. Todos os direitos reservados.

## 14. Mensagens de WhatsApp (pré-preenchidas)

Número: `TODO(vinicius)`, no formato internacional sem símbolos (ex.: `55DDNNNNNNNNN`).

| Código | Onde | Mensagem |
|---|---|---|
| M1 | Header, Hero, Processo, Contato, botão flutuante | Olá, Vinicius! Vi seu site e quero um orçamento. |
| M2 | Card Landing page | Olá, Vinicius! Quero um orçamento de landing page. |
| M3 | Card Site institucional | Olá, Vinicius! Quero um orçamento de site para minha empresa. |
| M4 | Card Ferramenta sob medida | Olá, Vinicius! Tenho uma ideia de ferramenta para o meu negócio e queria conversar. |
| M5 | Card Reforma | Olá, Vinicius! Já tenho um site e quero reformar. |

## 15. Microtextos

- **Botão flutuante (aria-label):** "Falar com Vinicius no WhatsApp"
- **Link externo (sufixo para leitores de tela):** "(abre em nova aba)"
- **404:** H1 "Essa página não existe." · Texto "O link pode estar errado ou a página mudou de lugar." · Botão "Voltar para o início"
- **Alt da foto:** "Vinicius Kamay, desenvolvedor de sites, sorrindo em fundo azul"
- **Alt dos prints:** "Página inicial do site {nome} no computador e no celular"

## 16. Política de Privacidade (estrutura; texto final na Etapa 7)

Quais dados o formulário coleta (nome, WhatsApp, e-mail, mensagem) · finalidade (responder ao contato) · onde são processados (serviço de formulário, ex.: Web3Forms, e o e-mail do Vinicius) · tempo de guarda · direitos do titular (LGPD) · contato do responsável · ausência de cookies de rastreamento (analytics sem cookies na Etapa 11).

---

## Pendências do Vinicius (checklist)

- [ ] Escolher o H1 do hero (A, B ou C)
- [ ] Número de WhatsApp
- [ ] Link do GitHub
- [ ] Trajetória para a seção "Sobre" (2 ou 3 frases reais) e destaques numéricos, se houver
- [ ] Confirmar a lista de tecnologias
- [ ] Confirmar a descrição do Conversor PDF e se o site é público
- [ ] Depoimento da Tecno (texto, nome, cargo e autorização)
- [ ] Prazo médio de entrega (FAQ 2)
- [ ] Você escreve os textos ou só orienta? (FAQ 3)
- [ ] Domínio, hospedagem e mensalidade (FAQ 6)
- [ ] Política de ajustes e suporte após a entrega (FAQ 7 e Processo 4)
- [ ] Prazo de resposta do contato (opcional)
