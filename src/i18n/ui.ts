export const languages = { pt: 'PT', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'pt';

/** Textos de interface. Conteúdo longo (projetos) fica em src/content. */
export const ui = {
  pt: {
    'meta.title': 'Gabriel Somariva — Desenvolvedor Full Stack',
    'meta.description':
      'Portfólio de Gabriel Somariva: sistemas web, aplicativos Android, automação e IA — com arquitetura pensada para durar.',
    'skip': 'Pular para o conteúdo',
    'nav.projects': 'Projetos',
    'nav.about': 'Sobre',
    'nav.studio': 'Estúdio',
    'nav.contact': 'Contato',
    'nav.menu': 'Menu',
    'nav.close': 'Fechar',
    'nav.lang': 'Idioma',

    'hero.eyebrow': 'Desenvolvedor full stack · Cofundador da Small Valley',
    'hero.line1': 'Ideias viram',
    'hero.line2': 'sistemas reais.',
    'hero.lead':
      'Eu construo sistemas web, aplicativos Android e automações com IA — com segurança e arquitetura pensadas para rodar em produção, não só na demonstração.',
    'hero.cta.primary': 'Ver projetos',
    'hero.cta.secondary': 'Conversar',
    'hero.motto': 'Aprender. Construir. Melhorar. Repetir.',

    'proof.label': 'Em números',

    'projects.title': 'Projetos',
    'projects.index': 'Índice de projetos',
    'projects.open': 'Ler estudo de caso',
    'projects.stack': 'Stack',
    'projects.infra': 'Infra',
    'projects.focus': 'Foco',
    'projects.selected': 'Em foco',

    'about.label': 'Sobre',
    'about.title': 'Desenvolvedor full stack, graduando em Ciência da Computação.',
    'about.p1':
      'Sou Gabriel Somariva. Trabalho com sistemas web, APIs, aplicativos Android e automações — sempre partindo de um problema real e terminando em algo que roda em produção.',
    'about.p2':
      'Também sou professor de Educação Digital na rede pública: ensinar lógica de programação para crianças me obriga a explicar sistemas complexos de forma simples — o mesmo que faço com clientes.',
    'about.timeline': 'Trajetória',
    'about.cv': 'Baixar currículo (PDF)',

    'studio.label': 'Estúdio',
    'studio.title': 'Small Valley Development',
    'studio.p':
      'Estúdio que cofundei para desenvolver soluções digitais sob medida, com foco em arquitetura de software, banco de dados, infraestrutura em Docker e boas práticas de segurança.',
    'studio.services': 'O que entregamos',
    'studio.link': 'Conhecer o estúdio',

    'tech.label': 'Tecnologias',

    'contact.label': 'Contato',
    'contact.title': 'Vamos construir algo.',
    'contact.lead': 'Tem um projeto, uma vaga ou uma ideia? Respondo em até dois dias úteis.',
    'contact.copy': 'Copiar e-mail',
    'contact.copied': 'E-mail copiado',
    'contact.write': 'Enviar e-mail',

    'footer.built': 'Feito com Astro. Código aberto no GitHub.',
    'footer.top': 'Voltar ao topo',

    'case.back': 'Todos os projetos',
    'case.role': 'Papel',
    'case.year': 'Ano',
    'case.status': 'Status',
    'case.links': 'Links',
    'case.repo': 'Repositório',
    'case.demo': 'Demonstração',
    'case.next': 'Próximo projeto',
    'case.results': 'Resultados',
    'case.sheet': 'Ficha técnica',

    '404.title': 'Página não encontrada.',
    '404.back': 'Voltar para o início',
  },
  en: {
    'meta.title': 'Gabriel Somariva — Full Stack Developer',
    'meta.description':
      'Portfolio of Gabriel Somariva: web systems, Android apps, automation and AI — built with architecture meant to last.',
    'skip': 'Skip to content',
    'nav.projects': 'Work',
    'nav.about': 'About',
    'nav.studio': 'Studio',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'nav.lang': 'Language',

    'hero.eyebrow': 'Full stack developer · Co-founder of Small Valley',
    'hero.line1': 'Ideas become',
    'hero.line2': 'real systems.',
    'hero.lead':
      'I build web systems, Android apps and AI automations — with security and architecture designed to run in production, not just in the demo.',
    'hero.cta.primary': 'See projects',
    'hero.cta.secondary': 'Get in touch',
    'hero.motto': 'Learn. Build. Improve. Repeat.',

    'proof.label': 'By the numbers',

    'projects.title': 'Work',
    'projects.index': 'Project index',
    'projects.open': 'Read case study',
    'projects.stack': 'Stack',
    'projects.infra': 'Infra',
    'projects.focus': 'Focus',
    'projects.selected': 'In focus',

    'about.label': 'About',
    'about.title': 'Full stack developer, Computer Science undergraduate.',
    'about.p1':
      "I'm Gabriel Somariva. I work on web systems, APIs, Android apps and automations — always starting from a real problem and ending with something that runs in production.",
    'about.p2':
      'I also teach Digital Education in public schools: teaching programming logic to kids forces me to explain complex systems simply — the same thing I do with clients.',
    'about.timeline': 'Timeline',
    'about.cv': 'Download résumé (PDF)',

    'studio.label': 'Studio',
    'studio.title': 'Small Valley Development',
    'studio.p':
      'A studio I co-founded to build custom digital products, focused on software architecture, databases, Docker infrastructure and security best practices.',
    'studio.services': 'What we deliver',
    'studio.link': 'Visit the studio',

    'tech.label': 'Technologies',

    'contact.label': 'Contact',
    'contact.title': "Let's build something.",
    'contact.lead': 'Have a project, a role or an idea? I reply within two business days.',
    'contact.copy': 'Copy email',
    'contact.copied': 'Email copied',
    'contact.write': 'Send email',

    'footer.built': 'Built with Astro. Open source on GitHub.',
    'footer.top': 'Back to top',

    'case.back': 'All projects',
    'case.role': 'Role',
    'case.year': 'Year',
    'case.status': 'Status',
    'case.links': 'Links',
    'case.repo': 'Repository',
    'case.demo': 'Live demo',
    'case.next': 'Next project',
    'case.results': 'Results',
    'case.sheet': 'Project details',

    '404.title': 'Page not found.',
    '404.back': 'Back to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];
