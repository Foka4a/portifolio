---
urlSlug: fastnote
order: 4
title: FastNote
kind: Android app
summary: Quick notes by text or voice, with a home-screen widget and Obsidian-inspired organisation.
year: "2026"
role: Product and Android development
status: MVP in development
stack: [Kotlin, Jetpack Compose, Room]
infra: [Gradle]
focus: [Fast capture, Offline-first, Widgets]
cover: /covers/fastnote.svg
coverAlt: Placeholder illustration of FastNote — quick-note widget on a phone screen
metrics: []
---

## The problem

Between having an idea and writing it down, every extra screen makes the idea slip away. Full-featured note apps make you decide where to file something before you've even typed it.

## The solution

**Capture first, organise later.** FastNote blends the speed of Google Keep with the structure of Obsidian:

- **A home-screen widget** to create a note by text or voice without opening the app.
- **An inbox** that collects everything captured in a hurry.
- Later, organisation with **tags, folders, favourites and links between notes**.

## Technical decisions

- **Native Kotlin with Jetpack Compose**, for widgets and speech recognition without extra layers.
- **Room as the local database**, working offline from the first launch.
- **Fewest possible taps** as the acceptance criterion for every flow.

## Next steps

- Finish the widget → voice → inbox flow.
- Publish a test build on the Play Store.
