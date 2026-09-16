---
urlSlug: disciplinerpg
order: 2
title: DisciplineRPG
kind: Own product
summary: Productivity and habits with RPG mechanics — streaks, goals, a dashboard and KPI-based progression.
year: "2026"
role: Product, design and full stack development
status: In development
stack: [React 19, Node.js, PostgreSQL, Recharts]
infra: [Docker Compose]
focus: [Gamification, Habits, KPIs]
cover: /covers/disciplinerpg.svg
coverAlt: Placeholder illustration of DisciplineRPG — experience bar and day streak
metrics:
  - value: "3"
    label: containerised services (database, API, UI)
---

## The problem

Habit apps are usually dropped after a few weeks: ticking a box every day doesn't feel like progress.

## The solution

DisciplineRPG treats your routine as a character that levels up. Each completed habit grants experience, streaks multiply the reward and goals become quests with clear indicators on the dashboard.

## Technical decisions

- **The whole environment runs on Docker Compose** — PostgreSQL with a healthcheck, a Node.js API and the web UI — so anyone can start the project with one command.
- **The database is initialised from versioned scripts**, keeping the schema reproducible.
- **Configuration through environment variables**, with safe defaults for development.

## Next steps

- Close the core loop: habit → experience → level.
- Ship a test build and measure weekly retention.
