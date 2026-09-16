---
urlSlug: fastnote
order: 4
title: FastNote
kind: App Android
summary: Anotações rápidas por texto ou voz, com widget na tela inicial e organização inspirada no Obsidian.
year: "2026"
role: Produto e desenvolvimento Android
status: MVP em desenvolvimento
stack: [Kotlin, Jetpack Compose, Room]
infra: [Gradle]
focus: [Captura rápida, Offline-first, Widgets]
cover: /covers/fastnote.svg
coverAlt: Ilustração provisória do FastNote — widget de nota rápida na tela do celular
metrics: []
---

## O problema

Entre ter uma ideia e anotá-la, qualquer tela a mais faz a ideia se perder. Apps de notas completos exigem decidir onde guardar antes mesmo de escrever.

## A solução

**Capturar primeiro, organizar depois.** O FastNote combina a velocidade do Google Keep com a organização do Obsidian:

- **Widget na tela inicial** para criar nota por texto ou voz sem abrir o app.
- **Caixa de entrada** que recebe tudo o que foi capturado às pressas.
- Depois, organização com **tags, pastas, favoritos e ligações entre notas**.

## Decisões técnicas

- **Nativo em Kotlin com Jetpack Compose**, para ter widget e reconhecimento de voz sem camadas extras.
- **Room como banco local**, funcionando sem internet desde o primeiro uso.
- **Menor número possível de toques** como critério de aceite de cada fluxo.

## Próximos passos

- Concluir o fluxo widget → voz → caixa de entrada.
- Publicar uma versão de testes na Play Store.
