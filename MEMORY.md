# MEMORY.md — follow-up-compras

## Status atual (2026-11-08)
- 2026-11-08: removido login fixo (`Victor Beraldo` / `1528`); config Firebase real trocada por placeholders; logo da Eco Brasil removida; nomes de compradores, aprovador e clientes reais (Arauco, Inpasa) trocados por genéricos.

## Pendências / próximos passos
- Se a versão antiga roda em produção (`follow-up-sla`): remover o mesmo backdoor lá e trocar senhas.
- Senha com SHA-256 sem salt: migrar para Firebase Auth.
- Separar JS do `index.html`.

## Decisões
- Identidade fictícia única para o portfólio: **AgroTech Bioenergia S.A.** / VB Systems.
- Repositório reescrito em commit único limpo para não manter dados reais no histórico.

## Pegadinhas
- Ao mudar assets, incrementar `CACHE_NAME` em `sw.js`, senão o navegador mantém a versão antiga.
- `hash()` usa WebCrypto, que não funciona em `file://` — sempre servir via HTTP.
