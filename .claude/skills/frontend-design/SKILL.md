---
name: frontend-design
description: Crie e revise interfaces HTML, CSS e JavaScript com identidade visual própria, acessibilidade e qualidade de produção. Use ao planejar, redesenhar ou melhorar páginas, apresentações interativas, layouts responsivos e componentes deste repositório.
---

# Frontend Design — HTML, CSS e apresentações

Skill de orientação para implementar frontend de forma intencional e consistente. Esta adaptação foi escrita para o projeto **Petiscos na espera** e pode ser reaproveitada em outros projetos HTML/CSS. Foi inspirada nas ideias gerais do [frontend-design da Anthropic](https://github.com/anthropics/claude-code/tree/main/plugins/frontend-design), sem reproduzir seu texto.

## 1. Antes de editar

1. Leia o pedido, identifique público, objetivo, conteúdo e contexto visual. Preserve decisões explícitas do usuário.
2. Analise primeiro os arquivos existentes e seus relacionamentos (HTML, CSS, JS, imagens e configurações de deploy). Não presuma que a aparência está toda no CSS.
3. Defina um plano visual curto: 4 a 6 cores nomeadas com valores HEX, família(s) tipográfica(s), escala de títulos, grade, espaçamento, hierarquia, responsividade e uma característica visual marcante.
4. Compare o plano com o tema real. Substitua escolhas genéricas ou efeitos decorativos sem função por decisões coerentes com o conteúdo.
5. Somente depois implemente, verifique e descreva exatamente os arquivos alterados.

## 2. Direção de design

- Prefira uma identidade memorável a templates genéricos; elementos visuais devem comunicar conteúdo e orientar o leitor.
- Destaque um único recurso principal por tela (imagem, título, dado ou interação). O restante deve apoiar a leitura.
- Escolha tipografia apropriada ao assunto; mantenha contraste, escala previsível, boa altura de linha e blocos de texto legíveis.
- Use alinhamentos e espaços consistentes. Evite grades de cartões idênticos quando elas não representam a estrutura da informação.
- Evite gradientes, sombras, ícones, etiquetas em caixa alta e animações repetidas apenas para parecer sofisticado.
- Os textos da interface devem ser claros, objetivos, em português do Brasil quando este for o idioma do projeto.

## 3. Diretrizes técnicas para HTML, CSS e JS

- Preserve HTML semântico, títulos hierárquicos, rótulos, descrições de imagens e estados de foco visíveis.
- Projete para dispositivos móveis, desktop e orientação de tela diferente; evite conteúdo cortado e rolagem indesejada.
- Respeite prefers-reduced-motion e evite animações automáticas excessivas. Animação deve indicar uma mudança real.
- Prefira CSS organizado com variáveis para tokens, regras bem agrupadas e especificidade controlada; não empilhe correções contraditórias.
- Preserve navegação por teclado, leitor de tela e gestos de toque quando já existirem.
- Não adicione bibliotecas, frameworks, fontes pesadas ou serviços externos sem uma necessidade demonstrada.
- Verifique links relativos, carregamento de imagens, tamanhos de arquivo e compatibilidade com hospedagem estática no GitHub Pages.
- Não remova funcionalidades existentes nem altere conteúdo aprovado sem pedido explícito.

## 4. Contexto obrigatório deste repositório

Projeto: **Petiscos na espera**, apresentação publicada com nove slides.

Arquitetura atual:

- index.html: estrutura do visualizador.
- style.css: identidade visual e adaptação ao tamanho da tela.
- deck.js: dados da apresentação, atalhos e interação.
- slides/slide-01.webp a slides/slide-09.webp: composições finais dos nove slides.
- images/: fotografias auxiliares.

### Decisões já aprovadas que devem ser mantidas

- Exibir exatamente os **nove slides** atuais, salvo pedido posterior em contrário.
- Preservar a identidade cromática uniforme, com fundo em tom de chocolate, e a proporção **16:9**.
- Manter a imagem de encerramento aprovada no slide 9.
- A navegação principal no computador é por **teclado**, sem mostrar botões de avançar/voltar.
- Manter suporte a setas, espaço e outros atalhos existentes, além do gesto de deslizar no celular.
- Preservar funcionamento estático do GitHub Pages, sem exigir servidor de aplicação.
- Não alterar textos, fotografias ou a ordem dos slides sem solicitação.

### Atenção especial aos slides renderizados

Os slides visíveis são imagens WebP completas. Uma mudança em style.css pode afetar o visualizador, mas **não modifica** textos, fundos ou elementos que já estejam desenhados dentro de cada imagem. Para alterar uma composição, trabalhe a partir de sua fonte editável quando disponível; não prometa que CSS externo mudará elementos internos dos WebP. Verifique proporção, nitidez e coerência de todas as nove imagens antes de substituí-las.

## 5. Tokens visuais de referência

Comece pelos tokens que já aparecem no projeto; ajuste-os apenas quando o pedido exigir:

- Fundo escuro: #120B08
- Chocolate profundo: #21140E
- Papel claro: #FAF6F0
- Texto escuro: #1C1410
- Terracota: #B84A2A
- Verde oliva: #4A5C3E

Tipografia existente: **Fraunces** para títulos editoriais e **Figtree** para texto de interface. Trate isso como identidade do projeto, não como padrão para sites de temas diferentes.

## 6. Fluxo de trabalho

**Diagnosticar.** Relacione o pedido a arquivos, telas e possíveis impactos. Identifique o que já funciona.

**Planejar.** Apresente ou registre um conceito visual específico, tokens, layout e comportamento. Se for apenas manutenção localizada, use um plano proporcional.

**Implementar.** Faça a menor alteração que resolva o pedido de maneira consistente. Reutilize componentes e variáveis existentes.

**Revisar.** Compare com o objetivo e examine legibilidade, contraste, mobile, teclado, performance e ausência de regressões.

**Validar.** Sempre que houver ferramentas disponíveis, execute verificações estáticas e teste visualmente. Se não houver como renderizar ou testar, declare a limitação.

**Entregar.** Resuma o que mudou, em quais arquivos, o que foi validado e o que ainda necessita de teste.

## 7. Checklist de aceite

- [ ] Objetivo e conteúdo preservados.
- [ ] Identidade visual consistente com o tema.
- [ ] Desktop e celular sem sobreposição ou recortes relevantes.
- [ ] Contraste, foco, semântica e movimento reduzido verificados.
- [ ] Navegação por teclado e por toque preservada.
- [ ] Nove slides e último slide aprovados preservados quando o pedido não for alterar isso.
- [ ] Caminhos locais funcionam no GitHub Pages.
- [ ] Nenhuma dependência nova desnecessária.
- [ ] Alterações e limites de validação documentados.

## Exemplo de acionamento

“Use a skill frontend-design deste repositório para revisar o HTML e o CSS da apresentação, propor melhorias profissionais e implementar somente o que respeitar os nove slides, o fundo chocolate e a navegação pelo teclado.”
