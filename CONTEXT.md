# CONTEXT.md — follow-up-compras

## Produto
PWA de follow-up de pedidos de compra e SLA de fornecedores integrada a exportações do TOTVS Protheus (SC1/SC7/SD1). Usuários, bases e logs ficam no Firestore (payload comprimido com pako).

## Estrutura
- `index.html` — SPA monolítica (~7,5 mil linhas)
- `sw.js` — service worker (cache `sla-compras-vN`)
- `manifest.json` — PWA
- `Logo Azul.png`, `Logo Branca.png` — logo fictícia AgroTech
- `mock_data.js` — dados sintéticos

## Tecnologias
HTML + JS vanilla, Firebase Firestore (compat 10.8), SheetJS, pako, PWA.
