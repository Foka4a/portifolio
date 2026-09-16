---
urlSlug: creativestudio
order: 3
title: CreativeStudio
kind: Experimento de IA
summary: Equipe de agentes de IA que ajuda a criar campanhas de RPG, lendo o acervo da campanha sem nunca sobrescrevê-lo.
year: "2026"
role: Arquitetura de agentes e desenvolvimento
status: Verificado ponta a ponta
stack: [Python, FastAPI, React 19, PostgreSQL]
infra: [Docker Compose]
focus: [Multiagentes, LLMs, Knowledge graphs]
cover: /covers/creativestudio.svg
coverAlt: Ilustração provisória do CreativeStudio — agentes conectados a um acervo de notas
metrics:
  - value: "0"
    label: escritas automáticas no conteúdo oficial da campanha
  - value: "3"
    label: serviços isolados em portas próprias
---

## O problema

Mestres de RPG mantêm mundos inteiros em anotações. Ferramentas de IA ajudam a gerar ideias, mas costumam ignorar o que já existe — ou, pior, sobrescrever.

## A solução

Um estúdio com vários agentes especializados que **leem** o acervo da campanha (notas em Markdown no Obsidian) e propõem conteúdo coerente com ele. A regra é clara: **a IA propõe, o mestre decide.** Nada é escrito no conteúdo oficial automaticamente.

## Decisões técnicas

- **Acervo somente leitura, com prova.** A verificação ponta a ponta inclui um teste mostrando que o conteúdo oficial não é alterado.
- **Agentes configuráveis sem recompilar:** quais agentes existem, qual modelo cada um usa e o prompt de cada um ficam em arquivos montados como volume.
- **Portas de host em bloco próprio**, para conviver com outros projetos Docker na mesma máquina.

## Resultados

- Suíte de testes, subida da stack, migrações, endpoints e leitura do acervo real verificados.
- Próximo passo: rodar as consultas dos agentes contra um provedor de modelo real.
