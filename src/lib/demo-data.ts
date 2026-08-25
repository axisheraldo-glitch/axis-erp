// Dados de demonstração — empresa fictícia "Estilo Camisetas Ltda" (confecção de camisetas)
// Servem só para mostrar o sistema funcionando. Em um cliente real, isso viria do banco de dados.

export interface Cliente {
  id: number;
  nome: string;
  tipo: "Pessoa Física" | "Pessoa Jurídica";
  documento: string;
  cidade: string;
  uf: string;
  telefone: string;
  email: string;
  status: "Ativo" | "Inativo";
}

export const clientes: Cliente[] = [
  { id: 1, nome: "Loja Fashion Store", tipo: "Pessoa Jurídica", documento: "12.345.678/0001-90", cidade: "São Paulo", uf: "SP", telefone: "(11) 4002-8922", email: "compras@fashionstore.com.br", status: "Ativo" },
  { id: 2, nome: "Boutique Mania de Roupa", tipo: "Pessoa Jurídica", documento: "23.456.789/0001-11", cidade: "Curitiba", uf: "PR", telefone: "(41) 3252-1010", email: "contato@maniaderoupa.com.br", status: "Ativo" },
  { id: 3, nome: "Ana Paula Ribeiro", tipo: "Pessoa Física", documento: "123.456.789-00", cidade: "Belo Horizonte", uf: "MG", telefone: "(31) 99876-5432", email: "ana.ribeiro@email.com", status: "Ativo" },
  { id: 4, nome: "Grife Urbana Confecções", tipo: "Pessoa Jurídica", documento: "34.567.890/0001-22", cidade: "Rio de Janeiro", uf: "RJ", telefone: "(21) 3555-7788", email: "financeiro@grifeurbana.com.br", status: "Ativo" },
  { id: 5, nome: "Distribuidora Textil Sul", tipo: "Pessoa Jurídica", documento: "45.678.901/0001-33", cidade: "Porto Alegre", uf: "RS", telefone: "(51) 3025-4477", email: "vendas@textilsul.com.br", status: "Inativo" },
  { id: 6, nome: "Carlos Eduardo Souza", tipo: "Pessoa Física", documento: "987.654.321-00", cidade: "Salvador", uf: "BA", telefone: "(71) 99654-3210", email: "cadu.souza@email.com", status: "Ativo" },
  { id: 7, nome: "Rede Estampa Camisetaria", tipo: "Pessoa Jurídica", documento: "56.789.012/0001-44", cidade: "Fortaleza", uf: "CE", telefone: "(85) 3231-9900", email: "compras@estampacamisetaria.com.br", status: "Ativo" },
];

export interface Produto {
  id: number;
  codigo: string;
  descricao: string;
  categoria: "Básica" | "Polo" | "Regata" | "Infantil" | "Moletom";
  tamanho: "PP" | "P" | "M" | "G" | "GG" | "XG";
  cor: string;
  precoVenda: number;
  custo: number;
  estoque: number;
  unidade: "UN";
}

const baseProdutos: Omit<Produto, "id">[] = [
  { codigo: "CAM-BAS-P-BR", descricao: "Camiseta Básica Algodão", categoria: "Básica", tamanho: "P", cor: "Branco", precoVenda: 29.9, custo: 14.5, estoque: 320, unidade: "UN" },
  { codigo: "CAM-BAS-M-BR", descricao: "Camiseta Básica Algodão", categoria: "Básica", tamanho: "M", cor: "Branco", precoVenda: 29.9, custo: 14.5, estoque: 410, unidade: "UN" },
  { codigo: "CAM-BAS-G-PT", descricao: "Camiseta Básica Algodão", categoria: "Básica", tamanho: "G", cor: "Preto", precoVenda: 29.9, custo: 14.5, estoque: 275, unidade: "UN" },
  { codigo: "CAM-BAS-GG-PT", descricao: "Camiseta Básica Algodão", categoria: "Básica", tamanho: "GG", cor: "Preto", precoVenda: 32.9, custo: 15.8, estoque: 140, unidade: "UN" },
  { codigo: "CAM-POL-M-AZ", descricao: "Camiseta Polo Piquet", categoria: "Polo", tamanho: "M", cor: "Azul Marinho", precoVenda: 59.9, custo: 28.0, estoque: 95, unidade: "UN" },
  { codigo: "CAM-POL-G-VD", descricao: "Camiseta Polo Piquet", categoria: "Polo", tamanho: "G", cor: "Verde Musgo", precoVenda: 59.9, custo: 28.0, estoque: 60, unidade: "UN" },
  { codigo: "CAM-REG-P-CZ", descricao: "Regata Dry Fit", categoria: "Regata", tamanho: "P", cor: "Cinza Mescla", precoVenda: 34.9, custo: 16.2, estoque: 180, unidade: "UN" },
  { codigo: "CAM-INF-4-AM", descricao: "Camiseta Infantil Estampada", categoria: "Infantil", tamanho: "PP", cor: "Amarelo", precoVenda: 24.9, custo: 11.0, estoque: 210, unidade: "UN" },
  { codigo: "MOL-CAP-M-CZ", descricao: "Moletom Canguru com Capuz", categoria: "Moletom", tamanho: "M", cor: "Cinza", precoVenda: 89.9, custo: 42.0, estoque: 70, unidade: "UN" },
  { codigo: "MOL-CAP-G-PT", descricao: "Moletom Canguru com Capuz", categoria: "Moletom", tamanho: "G", cor: "Preto", precoVenda: 89.9, custo: 42.0, estoque: 55, unidade: "UN" },
  { codigo: "CAM-BAS-PP-RS", descricao: "Camiseta Básica Algodão", categoria: "Básica", tamanho: "PP", cor: "Rosa", precoVenda: 29.9, custo: 14.5, estoque: 12, unidade: "UN" },
  { codigo: "CAM-BAS-XG-BR", descricao: "Camiseta Básica Algodão", categoria: "Básica", tamanho: "XG", cor: "Branco", precoVenda: 34.9, custo: 17.0, estoque: 8, unidade: "UN" },
];

export const produtos: Produto[] = baseProdutos.map((p, i) => ({ id: i + 1, ...p }));

export interface ItemPedido {
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
}

export interface Pedido {
  id: number;
  numero: string;
  clienteId: number;
  data: string; // ISO
  status: "Em produção" | "Faturado" | "Entregue" | "Cancelado";
  itens: ItemPedido[];
}

export const pedidos: Pedido[] = [
  { id: 1, numero: "PED-1001", clienteId: 1, data: "2026-08-04", status: "Entregue", itens: [ { produtoId: 1, quantidade: 50, precoUnitario: 29.9 }, { produtoId: 2, quantidade: 80, precoUnitario: 29.9 } ] },
  { id: 2, numero: "PED-1002", clienteId: 2, data: "2026-08-10", status: "Faturado", itens: [ { produtoId: 5, quantidade: 30, precoUnitario: 59.9 }, { produtoId: 6, quantidade: 20, precoUnitario: 59.9 } ] },
  { id: 3, numero: "PED-1003", clienteId: 3, data: "2026-08-14", status: "Em produção", itens: [ { produtoId: 9, quantidade: 10, precoUnitario: 89.9 } ] },
  { id: 4, numero: "PED-1004", clienteId: 4, data: "2026-08-18", status: "Em produção", itens: [ { produtoId: 3, quantidade: 120, precoUnitario: 29.9 }, { produtoId: 4, quantidade: 60, precoUnitario: 32.9 } ] },
  { id: 5, numero: "PED-1005", clienteId: 7, data: "2026-08-20", status: "Faturado", itens: [ { produtoId: 8, quantidade: 200, precoUnitario: 24.9 } ] },
  { id: 6, numero: "PED-1006", clienteId: 6, data: "2026-08-22", status: "Cancelado", itens: [ { produtoId: 7, quantidade: 40, precoUnitario: 34.9 } ] },
];

export function valorPedido(p: Pedido): number {
  return p.itens.reduce((soma, item) => soma + item.quantidade * item.precoUnitario, 0);
}

export function clientePorId(id: number): Cliente | undefined {
  return clientes.find((c) => c.id === id);
}

export function produtoPorId(id: number): Produto | undefined {
  return produtos.find((p) => p.id === id);
}

// new Date("2026-08-04") é interpretado como meia-noite UTC, então em fusos
// atrás de UTC (ex.: Brasil) toLocaleDateString mostraria o dia anterior.
// Formatamos direto a partir da string ISO para evitar esse deslocamento.
export function formatDataBR(iso: string): string {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}
