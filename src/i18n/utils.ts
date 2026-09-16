import { defaultLang, ui, type Lang, type UIKey } from './ui';

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key];
}

/** Rotas equivalentes por idioma. Centralizado para facilitar mudanças de URL. */
export const routes = {
  home: (lang: Lang) => (lang === 'pt' ? '/' : '/en/'),
  project: (lang: Lang, slug: string) =>
    lang === 'pt' ? `/projetos/${slug}/` : `/en/projects/${slug}/`,
};

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith('/en') ? 'en' : 'pt';
}

export const htmlLang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };
