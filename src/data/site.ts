import type { Lang } from '@/i18n/ui';

/**
 * Dados pessoais e links. Campos vazios ('') escondem o elemento na página —
 * preencha quando tiver o link real.
 */
export const profile = {
  name: 'Gabriel Somariva',
  shortName: 'Somariva',
  email: 'gabriel.somariva1411@gmail.com',
  links: {
    github: 'https://github.com/Foka4a',
    linkedin: '', // TODO: https://www.linkedin.com/in/<seu-usuario>
    instagram: '', // opcional
    studio: '', // TODO: site da Small Valley Development
    cvPt: '', // TODO: coloque o PDF em public/cv/ e use '/cv/gabriel-somariva-pt.pdf'
    cvEn: '', // TODO: '/cv/gabriel-somariva-en.pdf'
  },
};

type Localized = Record<Lang, string>;

/** Faixa de prova logo abaixo do hero. Use números que você consegue defender. */
export const proof: { value: string; label: Localized }[] = [
  {
    value: '04',
    label: { pt: 'projetos autorais — web, mobile e IA', en: 'original projects — web, mobile and AI' },
  },
  {
    value: '11',
    label: {
      pt: 'entidades no sistema de transporte, com 3 perfis de acesso',
      en: 'domain entities in the transport system, with 3 access roles',
    },
  },
  {
    value: '04',
    label: {
      pt: 'containers em deploy validado numa VPS (Docker + nginx + TLS)',
      en: 'containers in a validated VPS deploy (Docker + nginx + TLS)',
    },
  },
];

// TODO: troque 'Atual' pelos anos reais (ex.: '2024 — hoje').
export const timeline: { period: Localized; title: Localized; detail: Localized }[] = [
  {
    period: { pt: 'Atual', en: 'Current' },
    title: { pt: 'Cofundador · Small Valley Development', en: 'Co-founder · Small Valley Development' },
    detail: { pt: 'Soluções digitais sob medida', en: 'Custom digital products' },
  },
  {
    period: { pt: 'Atual', en: 'Current' },
    title: { pt: 'Professor de Educação Digital', en: 'Digital Education Teacher' },
    detail: {
      pt: 'Rede pública municipal — lógica de programação, Scratch, robótica',
      en: 'Public school system — programming logic, Scratch, robotics',
    },
  },
  {
    period: { pt: 'Atual', en: 'Current' },
    title: { pt: 'Ciência da Computação', en: 'B.Sc. Computer Science' },
    detail: {
      pt: 'Graduação — algoritmos, estruturas de dados, POO, banco de dados',
      en: 'Undergraduate — algorithms, data structures, OOP, databases',
    },
  },
];

export const tech: { group: Localized; items: string[] }[] = [
  { group: { pt: 'Linguagens', en: 'Languages' }, items: ['Python', 'TypeScript', 'JavaScript', 'Kotlin', 'C'] },
  { group: { pt: 'Front-end', en: 'Front-end' }, items: ['React', 'Vite', 'TailwindCSS', 'Astro'] },
  { group: { pt: 'Back-end', en: 'Back-end' }, items: ['Django + DRF', 'Node.js', 'Express', 'FastAPI'] },
  { group: { pt: 'Mobile', en: 'Mobile' }, items: ['Jetpack Compose', 'Room'] },
  { group: { pt: 'Dados', en: 'Data' }, items: ['PostgreSQL', 'Redis', 'SQLite'] },
  { group: { pt: 'Infra', en: 'Infra' }, items: ['Docker', 'nginx', 'Linux', 'Git'] },
];

export const services: Localized[] = [
  { pt: 'Sistemas web', en: 'Web systems' },
  { pt: 'Aplicativos mobile', en: 'Mobile apps' },
  { pt: 'Automação e IA', en: 'Automation & AI' },
  { pt: 'Infra e segurança', en: 'Infra & security' },
];
