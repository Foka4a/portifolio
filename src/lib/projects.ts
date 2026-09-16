import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '@/i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** Projetos publicados de um idioma, na ordem definida no frontmatter. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection(
    'projects',
    ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft,
  );
  return all.sort((a, b) => a.data.order - b.data.order);
}

export const pad = (n: number) => String(n).padStart(2, '0');
