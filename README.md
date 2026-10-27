# Petiscos na espera — apresentação completa

Site estático com os 9 slides finais, design padronizado em gradiente chocolate e apresentação navegável. O slide 9 mostra o novo agradecimento com a foto da mesa de restaurante.

## Navegação

Abra `index.html` e use as teclas **← / →**, **Page Up / Page Down** ou **barra de espaço** para navegar, sem botões visíveis. **Home / End** vão ao primeiro e ao último slide; **F** abre tela cheia; **S** abre notas do apresentador; **N** abre a visão geral. No celular, deslize horizontalmente sobre o slide.

## Estrutura

- `index.html` — página inicial da apresentação.
- `deck.js` — navegação, roteiro do apresentador e índice de slides.
- `style.css` — aparência responsiva.
- `slides/slide-01.webp` até `slides/slide-09.webp` — slides finais renderizados.
- `images/` — fotografias originais preservadas como arquivos auxiliares.

O site é publicado automaticamente pelo GitHub Actions + GitHub Pages a cada atualização da branch `main`.

## Revisão com frontend-design

- Os nove slides foram mantidos e a identidade em tons de chocolate continua no formato 16:9.
- Os slides **1, 5 e 8** agora são composições HTML/CSS com texto editável e menos repetição; os demais slides continuam com o material WebP aprovado, inclusive o **slide 9 sem alterações**.
- Roteiro, atalho **N** da visão geral, **S/R** das notas, **F** da tela cheia, setas, espaço, Home/End e gesto de deslizar continuam disponíveis.
- A visão geral agora conserva o botão Fechar, mesmo após atualizar a lista de slides.
- Imagens mantidas em `slides/` e `images/`, inclusive as originais dos slides revisados, para permitir restauração.
- Uma cópia do estado anterior está na branch `backup/pre-frontend-design-2026-10-27`. Se solicitado, o projeto pode ser revertido a esse estado.

As imagens WebP continuam sendo o conteúdo visual dos slides 2, 3, 4, 6, 7 e 9. O visualizador oferece descrições textuais desses slides para tecnologias assistivas.
