# 📦 Follow UP de Compras & SLA de Fornecedores (TOTVS Protheus)

![Status](https://img.shields.io/badge/Status-Produ%C3%A7%C3%A3o%20%2F%20Portf%C3%B3lio-10B981?style=for-the-badge)
![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript%20PWA%20%7C%20Chart.js-3B82F6?style=for-the-badge)
![ERP Integrado](https://img.shields.io/badge/ERP-TOTVS%20Protheus%20(SC1%2FSC7%2FSD1)-F59E0B?style=for-the-badge)
![UI](https://img.shields.io/badge/Tema-Dark%20%26%20Light%20Mode-10B981?style=for-the-badge)

> **English Summary:** Progressive Web App (PWA) for purchase order follow-up, delivery lead time auditing, and supplier Service Level Agreement (SLA) tracking integrated with TOTVS Protheus ERP. Features offline support, interactive analytics, and full dark/light theme support.

---

## 🔒 Nota de Segurança e Conformidade (LGPD)
> **Aviso de Compliance:** Este repositório é uma versão de demonstração para portfólio. Todos os dados comerciais, razões sociais, números de pedidos, CNPJs e chaves de API foram **100% anonimizados** e substituídos por dados sintéticos (`mock_data.js`). A identidade corporativa adotada é **AgroTech Bioenergia S.A.** sob a assinatura técnica **VB Systems | RPA & Analytics**.

---

## 1. O Problema de Negócio
No setor sucroalcooleiro e florestal, atrasos na entrega de insumos críticos (como peças de moenda, óleos industriais e defensivos agrícolas) causam paradas não programadas que custam milhares de reais por hora.
O **Follow UP Compras & SLA** digitaliza o controle de prazos acordados com fornecedores, auditando o cumprimento de SLA e o *Lead Time* entre a emissão do Pedido de Compra (`SC7`) e a efetiva entrega na portaria (`SD1`).

---

## 2. Funcionalidades Principais
* **Auditoria de SLA por Comprador e Categoria:** Visualização instantânea de fornecedores pontuais vs fornecedores reincidentes em atrasos.
* **Lead Time Ponta a Ponta:** Decomposição do tempo de atendimento em dias úteis e corridos.
* **Progressive Web App (PWA):** Instalação nativa em desktops e smartphones, com suporte a cache e operação offline.
* **Alternância de Tema (Dark / Light Theme):** Interface moderna com contraste ajustável para uso no campo ou na sala de controle.

---

## 3. Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/<seu-usuario>/follow-up-compras-sla.git
   cd follow-up-compras-sla
   ```
2. Abra `index.html` diretamente no navegador ou sirva localmente com `npx serve . -l 5000`.
