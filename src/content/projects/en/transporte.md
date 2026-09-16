---
urlSlug: transporte
order: 1
title: University Transport System
kind: Public-sector system
summary: Student transport management with three access roles, signed QR Code boarding and an applied security audit.
year: "2026"
role: Full stack development, architecture and deploy
status: Deploy validated on a VPS
stack: [Django 6, DRF, React 19, PostgreSQL]
infra: [Docker, nginx, Gunicorn]
focus: [Authentication, Auditing, Data privacy (LGPD)]
cover: /covers/transporte.svg
coverAlt: Placeholder illustration of the transport system — student card with QR Code and bus route
metrics:
  - value: "3"
    label: access roles, deny by default
  - value: "11"
    label: entities in the domain model
  - value: "4"
    label: containers orchestrated in production
featured: true
---

## The problem

Student transport to schools and universities was organised by hand: paper lists of who rides each trip, manual checks at boarding and little visibility for whoever assigns vehicles and drivers. The system also handles **personal data** — national ID numbers and enrolment documents — and had to treat it seriously.

## The solution

A system with three roles, each with a screen built for its job:

- **Passengers** confirm their outbound and return trips for each day and show a digital card with a QR Code.
- **Drivers** scan the QR with their phone camera to register boarding.
- **Admins** open the day's plan, assign vehicles and drivers and map which institutions each vehicle serves.

## Technical decisions

- **Roles come from the database, never from the client.** Authorisation is *default-deny*: no profile, no access.
- **Signed, expiring QR Codes.** The first version used a raw id that could be forged. The token is now signed server-side, expires in a day, and the backend rejects tampered tokens, unconfirmed trips and duplicate boardings.
- **Enrolment documents treated as sensitive data.** They never sit behind a public URL: Django authorises and nginx serves them through an internal route. Uploads are validated by actual file content (not extension), size-limited and randomly named.
- **Design patterns used on purpose** — Observer for notifications, Facade for planning and a service layer — since this is also an academic project.
- **Hardened edge:** HSTS, CSP, per-IP login throttling and secure cookies.

## Results

- Full deploy validated on a VPS in São Paulo, with four containers (database, API, front-end and proxy).
- Three security review rounds, with the issues found (IDOR, forgeable QR, public media) fixed.
- Next steps: custom domain with a Let's Encrypt certificate and automated backups.
