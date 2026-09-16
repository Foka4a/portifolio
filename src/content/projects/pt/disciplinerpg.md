---
urlSlug: disciplinerpg
order: 2
title: DisciplineRPG
kind: Produto próprio
summary: Produtividade e hábitos com mecânicas de RPG — sequências, metas, painel e progressão por indicadores.
year: "2026"
role: Produto, design e desenvolvimento full stack
status: Em desenvolvimento
stack: [React 19, Node.js, PostgreSQL, Recharts]
infra: [Docker Compose]
focus: [Gamificação, Hábitos, Indicadores]
cover: /covers/disciplinerpg.svg
coverAlt: Ilustração provisória do DisciplineRPG — barra de experiência e sequência de dias
metrics:
  - value: "3"
    label: serviços em contêiner (banco, API, interface)
---

## O problema

Apps de hábitos costumam ser abandonados depois de poucas semanas: marcar uma caixinha todo dia não dá sensação de progresso.

## A solução

O DisciplineRPG trata a rotina como um personagem que evolui. Cada hábito cumprido gera experiência, sequências (*streaks*) aumentam a recompensa e as metas viram missões com indicadores claros no painel.

## Decisões técnicas

- **Ambiente inteiro em Docker Compose** — banco PostgreSQL com *healthcheck*, API em Node.js e interface web — para que qualquer pessoa suba o projeto com um comando.
- **Banco inicializado por scripts versionados**, o que deixa o esquema reproduzível.
- **Configuração por variáveis de ambiente**, com valores padrão seguros para desenvolvimento.

## Próximos passos

- Fechar o ciclo principal: hábito → experiência → nível.
- Publicar uma versão de testes e medir retenção semanal.
