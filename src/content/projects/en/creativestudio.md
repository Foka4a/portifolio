---
urlSlug: creativestudio
order: 3
title: CreativeStudio
kind: AI experiment
summary: A team of AI agents that helps build tabletop RPG campaigns, reading the campaign canon without ever overwriting it.
year: "2026"
role: Agent architecture and development
status: Verified end to end
stack: [Python, FastAPI, React 19, PostgreSQL]
infra: [Docker Compose]
focus: [Multi-agent, LLMs, Knowledge graphs]
cover: /covers/creativestudio.svg
coverAlt: Placeholder illustration of CreativeStudio — agents connected to a knowledge base
metrics:
  - value: "0"
    label: automatic writes to the campaign canon
  - value: "3"
    label: services isolated on their own ports
---

## The problem

Game masters keep entire worlds in notes. AI tools help brainstorm, but they tend to ignore what already exists — or worse, overwrite it.

## The solution

A studio of specialised agents that **read** the campaign canon (Markdown notes in Obsidian) and propose content consistent with it. The rule is simple: **the AI proposes, the game master decides.** Nothing is written to canon automatically.

## Technical decisions

- **Read-only canon, with proof.** End-to-end verification includes a test showing canon is never modified.
- **Agents configurable without rebuilding:** which agents exist, which model each uses and each system prompt live in files mounted as volumes.
- **Host ports in a dedicated range**, so it coexists with other Docker stacks on the same machine.

## Results

- Test suite, stack start-up, migrations, endpoints and reading the real vault all verified.
- Next step: run the agent queries against a real model provider.
