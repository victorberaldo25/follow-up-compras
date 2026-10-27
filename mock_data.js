/**
 * AgroTech Bioenergia S.A. | VB Systems - RPA & Analytics
 * Mock Data: Acompanhamento de Pedidos de Compras (SC7/SC1) & SLA de Fornecedores
 */
window.DEMO_MODE = true;

window.MOCK_SLA_DATA = {
  empresa: "AgroTech Bioenergia S.A.",
  resumo_sla: {
    total_pedidos: 86,
    dentro_sla: 79,
    fora_sla: 7,
    sla_geral_pct: 91.8,
    lead_time_medio_dias: 11.4,
    valor_total_brl: 5420300.00
  },
  compradores: [
    { nome: "Comprador 01 (Agrícola)", pedidos: 28, taxa_sla: 92.8, lead_time_medio: 9.5 },
    { nome: "Comprador 02 (Industrial)", pedidos: 34, taxa_sla: 88.2, lead_time_medio: 13.2 },
    { nome: "Comprador 03 (Serviços / TI)", pedidos: 24, taxa_sla: 95.8, lead_time_medio: 8.0 }
  ],
  categorias: [
    { categoria: "Peças Industriais", pedidos: 31, taxa_sla: 87.1, valor: 2150000.00 },
    { categoria: "Insumos Agrícolas", pedidos: 22, taxa_sla: 95.5, valor: 1840000.00 },
    { categoria: "EPIs & Segurança", pedidos: 18, taxa_sla: 100.0, valor: 280300.00 },
    { categoria: "Hardware & TI", pedidos: 15, taxa_sla: 93.3, valor: 1150000.00 }
  ],
  pedidos: [
    { numero_pc: "081290", operacao: "Lençóis Paulista - SP", comprador: "Comprador 02", fornecedor: "Metalúrgica Vale Verde Ltda", valor: 125000.00, emissao: "2026-10-05", entrega_prevista: "2026-10-20", entrega_real: "2026-10-18", status_sla: "No Prazo", lead_time: 13 },
    { numero_pc: "081291", operacao: "Aracruz - ES", comprador: "Comprador 01", fornecedor: "AgroQuímica do Brasil S.A.", valor: 340000.00, emissao: "2026-10-06", entrega_prevista: "2026-10-22", entrega_real: "2026-10-21", status_sla: "No Prazo", lead_time: 15 },
    { numero_pc: "081292", operacao: "Lençóis Paulista - SP", comprador: "Comprador 02", fornecedor: "Rolamentos Industriais Alfa", valor: 45000.00, emissao: "2026-09-28", entrega_prevista: "2026-10-12", entrega_real: "2026-10-16", status_sla: "Atrasado", lead_time: 18 },
    { numero_pc: "081293", operacao: "São Paulo - SP", comprador: "Comprador 03", fornecedor: "TechSolutions Sistemas Ltda", valor: 98000.00, emissao: "2026-10-10", entrega_prevista: "2026-10-25", entrega_real: "2026-10-23", status_sla: "No Prazo", lead_time: 13 },
    { numero_pc: "081294", operacao: "Aracruz - ES", comprador: "Comprador 01", fornecedor: "Fertilizantes & Nutrição Delta", valor: 210000.00, emissao: "2026-10-12", entrega_prevista: "2026-10-26", entrega_real: "2026-10-25", status_sla: "No Prazo", lead_time: 13 }
  ]
};
