// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Troque `site` pelo domínio definitivo antes do deploy (usado no sitemap e nas tags OG).
export default defineConfig({
  site: 'https://gabrielsomariva.dev',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: { pt: 'pt-BR', en: 'en-US' },
      },
    }),
  ],
});
