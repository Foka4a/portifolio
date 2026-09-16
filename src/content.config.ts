import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Projetos (estudos de caso).
 * Cada projeto existe uma vez por idioma: src/content/projects/<lang>/<slug>.md
 * O `urlSlug` precisa ser igual nos dois idiomas — é ele que liga PT ↔ EN.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    // Não use o nome `slug`: o loader glob o trata como id e os dois idiomas colidiriam.
    urlSlug: z.string().regex(/^[a-z0-9-]+$/),
    order: z.number().int().positive(),
    title: z.string(),
    kind: z.string(), // ex.: "Sistema público", "Produto próprio"
    summary: z.string(),
    year: z.string(),
    role: z.string(),
    status: z.string(),
    stack: z.array(z.string()).min(1),
    infra: z.array(z.string()).default([]),
    focus: z.array(z.string()).default([]),
    /** Caminho em /public. Troque os SVGs provisórios por screenshots reais. */
    cover: z.string(),
    coverAlt: z.string(),
    metrics: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(4)
      .default([]),
    links: z
      .object({
        repo: z.url().optional(),
        demo: z.url().optional(),
      })
      .default({}),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects };
