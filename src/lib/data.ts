import { supabase } from "@/lib/supabase";

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

export interface Produto {
  id: number;
  codigo: string;
  descricao: string;
  categoria: string;
  tamanho: string;
  cor: string;
  precoVenda: number;
  custo: number;
  estoque: number;
  unidade: string;
}

export interface ItemPedido {
  produtoId: number;
  quantidade: number;
  precoUnitario: number;
  produto: Produto | null;
}

export interface Pedido {
  id: number;
  numero: string;
  clienteId: number;
  cliente: Cliente | null;
  data: string;
  status: "Em produção" | "Faturado" | "Entregue" | "Cancelado";
  itens: ItemPedido[];
}

type ClienteRow = {
  id: number;
  nome: string;
  tipo: string;
  documento: string;
  cidade: string;
  uf: string;
  telefone: string;
  email: string;
  status: string;
};

type ProdutoRow = {
  id: number;
  codigo: string;
  descricao: string;
  categoria: string;
  tamanho: string;
  cor: string;
  preco_venda: number;
  custo: number;
  estoque: number;
  unidade: string;
};

type PedidoRow = {
  id: number;
  numero: string;
  cliente_id: number;
  data: string;
  status: string;
  clientes: ClienteRow | null;
  pedido_itens: {
    produto_id: number;
    quantidade: number;
    preco_unitario: number;
    produtos: ProdutoRow | null;
  }[];
};

function mapCliente(row: ClienteRow): Cliente {
  return { ...row, tipo: row.tipo as Cliente["tipo"], status: row.status as Cliente["status"] };
}

function mapProduto(row: ProdutoRow): Produto {
  return {
    id: row.id,
    codigo: row.codigo,
    descricao: row.descricao,
    categoria: row.categoria,
    tamanho: row.tamanho,
    cor: row.cor,
    precoVenda: row.preco_venda,
    custo: row.custo,
    estoque: row.estoque,
    unidade: row.unidade,
  };
}

function mapPedido(row: PedidoRow): Pedido {
  return {
    id: row.id,
    numero: row.numero,
    clienteId: row.cliente_id,
    cliente: row.clientes ? mapCliente(row.clientes) : null,
    data: row.data,
    status: row.status as Pedido["status"],
    itens: row.pedido_itens.map((item) => ({
      produtoId: item.produto_id,
      quantidade: item.quantidade,
      precoUnitario: item.preco_unitario,
      produto: item.produtos ? mapProduto(item.produtos) : null,
    })),
  };
}

export async function getClientes(): Promise<Cliente[]> {
  const { data, error } = await supabase.from("clientes").select("*").order("nome");
  if (error) throw error;
  return data.map(mapCliente);
}

export async function getProdutos(): Promise<Produto[]> {
  const { data, error } = await supabase.from("produtos").select("*").order("descricao");
  if (error) throw error;
  return data.map(mapProduto);
}

export async function getPedidos(): Promise<Pedido[]> {
  const { data, error } = await supabase
    .from("pedidos")
    .select("*, clientes(*), pedido_itens(*, produtos(*))")
    .order("data", { ascending: false });
  if (error) throw error;
  return (data as unknown as PedidoRow[]).map(mapPedido);
}

export function valorPedido(p: Pedido): number {
  return p.itens.reduce((soma, item) => soma + item.quantidade * item.precoUnitario, 0);
}

// new Date("2026-08-04") é interpretado como meia-noite UTC, então em fusos
// atrás de UTC (ex.: Brasil) toLocaleDateString mostraria o dia anterior.
// Formatamos direto a partir da string ISO para evitar esse deslocamento.
export function formatDataBR(iso: string): string {
  const [ano, mes, dia] = iso.split("-");
  return `${dia}/${mes}/${ano}`;
}
