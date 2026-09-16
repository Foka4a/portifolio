# Portfólio — Gabriel Somariva

Site pessoal em preto e branco, bilíngue (PT/EN), feito com **Astro**.

- Estudos de caso por projeto (`/projetos/<slug>` e `/en/projects/<slug>`)
- Índice 01–04 com inversão de cor no projeto em foco
- HTML estático: rápido, bom para SEO e hospedável em qualquer lugar
- Acessível: contraste acima de 7:1, alvos de toque de 44px ou mais, navegação por teclado e respeito ao "reduzir movimento"

## Por que Astro

| Precisa de… | Como o Astro resolve |
| --- | --- |
| Visual tipográfico com pouca interatividade | Gera HTML puro e só envia JavaScript onde há interação (menu, índice, copiar e-mail) |
| Adicionar projetos sem mexer em código | Coleções de conteúdo: um arquivo `.md` por projeto, validado por schema |
| PT/EN | Textos de interface em `src/i18n/ui.ts`, conteúdo em pastas por idioma |
| Crescer depois | Dá para adicionar componentes React/Vue/Svelte, MDX, blog ou páginas com servidor sem trocar de framework |

## Rodando localmente

Requer Node.js 22.12 ou mais recente.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # checa tipos e gera dist/
npm run preview   # serve o build
```

## Estrutura

```
src/
├── components/        # Seções da home e página de estudo de caso
├── content/projects/  # Um .md por projeto, por idioma (pt/ e en/)
├── content.config.ts  # Schema dos projetos
├── data/site.ts       # Links, números da faixa de prova, trajetória, tecnologias
├── i18n/              # Textos de interface e rotas por idioma
├── layouts/           # Layout base (SEO, hreflang, cabeçalho, rodapé)
├── lib/projects.ts    # Busca e ordenação dos projetos
├── pages/             # Rotas
├── scripts/           # Animação de entrada
└── styles/global.css  # Tokens de cor/tipografia e utilitários
public/
├── covers/            # Capas dos projetos (SVGs provisórios)
└── cv/                # PDFs do currículo
```

## Como adicionar um projeto

1. Crie `src/content/projects/pt/<slug>.md` e `src/content/projects/en/<slug>.md`, com o mesmo `urlSlug`.
2. Preencha o frontmatter (o schema em `src/content.config.ts` avisa se faltar algo).
3. Coloque a capa em `public/covers/` (1200×750).
4. O índice, o cartão, a página e o sitemap são gerados sozinhos.

## Pendências de conteúdo

- [ ] Trocar as capas provisórias de `public/covers/` por screenshots reais
- [ ] Preencher `linkedin`, `studio`, `cvPt` e `cvEn` em `src/data/site.ts` (campos vazios ficam escondidos no site)
- [ ] Colocar os anos reais na trajetória (`timeline` em `src/data/site.ts`)
- [ ] Adicionar `links.repo` e `links.demo` no frontmatter dos projetos públicos
- [ ] Revisar os números da faixa de prova (`proof`)
- [ ] Ajustar `site` em `astro.config.mjs` e `public/robots.txt` para o domínio definitivo
- [ ] Trocar `public/og.png` (imagem de compartilhamento) se mudar o hero

## Deploy

O build gera arquivos estáticos em `dist/`:

- **Vercel / Netlify / Cloudflare Pages:** importar o repositório; build `npm run build`, saída `dist`.
- **GitHub Pages:** usar a action oficial `withastro/action`.
- **VPS com nginx:** servir `dist/` como site estático.
