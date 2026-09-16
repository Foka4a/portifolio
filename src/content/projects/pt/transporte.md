---
urlSlug: transporte
order: 1
title: Sistema de Transporte Universitário
kind: Sistema público
summary: Gestão do transporte de estudantes com três perfis de acesso, embarque por QR Code assinado e auditoria de segurança aplicada.
year: "2026"
role: Desenvolvimento full stack, arquitetura e deploy
status: Deploy validado em VPS
stack: [Django 6, DRF, React 19, PostgreSQL]
infra: [Docker, nginx, Gunicorn]
focus: [Autenticação, Auditoria, LGPD]
cover: /covers/transporte.svg
coverAlt: Ilustração provisória do sistema de transporte — carteirinha com QR Code e rota de ônibus
metrics:
  - value: "3"
    label: perfis de acesso, com negação por padrão
  - value: "11"
    label: entidades no modelo de domínio
  - value: "4"
    label: containers orquestrados em produção
featured: true
---

## O problema

O transporte de estudantes até as instituições de ensino era organizado de forma manual: listas de quem vai em cada viagem, conferência no embarque feita no papel e pouca visibilidade para quem aloca veículos e motoristas. Além disso, o sistema lida com **dados pessoais** — CPF e comprovantes de matrícula — e precisava tratar isso com seriedade.

## A solução

Um sistema com três perfis, cada um com uma tela pensada para a sua tarefa:

- **Passageiro** confirma a ida e o retorno de cada dia e exibe a carteirinha digital com QR Code.
- **Motorista** lê o QR com a câmera do celular e registra o embarque.
- **Administrador** abre o planejamento do dia, aloca veículos e motoristas e define quais instituições cada veículo atende.

## Decisões técnicas

- **Papéis vêm do banco, nunca do cliente.** A verificação é *default-deny*: sem perfil, sem acesso.
- **QR Code assinado com expiração.** A primeira versão usava o id cru, que dava para falsificar. Hoje o token é assinado no servidor, expira em um dia e o backend rejeita token adulterado, viagem não confirmada e embarque duplicado.
- **Comprovantes tratados como dado sensível.** Não ficam em URL pública: o Django autoriza e o nginx entrega por rota interna. Uploads são validados pelo conteúdo real do arquivo (não pela extensão), com limite de tamanho e nome aleatório.
- **Padrões de projeto aplicados de propósito** — Observer para notificações, Facade para o planejamento e camada de serviços — por ser também um trabalho acadêmico.
- **Borda endurecida:** HSTS, CSP, limite de tentativas de login por IP e cookies seguros.

## Resultados

- Deploy completo validado em uma VPS em São Paulo, com quatro containers (banco, API, front-end e proxy).
- Três rodadas de revisão de segurança, com as falhas encontradas (IDOR, QR falsificável, mídia pública) corrigidas.
- Próximos passos: domínio próprio com certificado Let's Encrypt e backup automático.
