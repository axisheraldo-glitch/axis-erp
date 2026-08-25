export type ModuleId =
  | "dashboard"
  | "cadastros"
  | "comercial"
  | "financeiro"
  | "compras"
  | "estoque"
  | "engenharia"
  | "pcp"
  | "expedicao"
  | "faturamento"
  | "rh";

export interface NavItem {
  label: string;
  href: string;
}

export interface ModuleDef {
  id: ModuleId;
  label: string;
  icon: string;
  href: string;
  enabled: boolean;
  children?: NavItem[];
}

// Em produção, "enabled" viria do plano contratado por cada cliente
// (o mesmo shell serve para vender o sistema inteiro ou só alguns módulos —
// núcleo, por atividade, ou RH/DP à parte).
export const MODULES: ModuleDef[] = [
  {
    id: "dashboard",
    label: "Painel",
    icon: "layout-dashboard",
    href: "/",
    enabled: true,
  },
  // Núcleo — praticamente todo cliente compra
  {
    id: "cadastros",
    label: "Cadastros Mestres",
    icon: "database",
    href: "/cadastros/clientes",
    enabled: true,
    children: [
      { label: "Clientes", href: "/cadastros/clientes" },
      { label: "Produtos", href: "/cadastros/produtos" },
    ],
  },
  {
    id: "comercial",
    label: "Comercial",
    icon: "shopping-cart",
    href: "/comercial/pedidos",
    enabled: true,
    children: [{ label: "Pedidos", href: "/comercial/pedidos" }],
  },
  {
    id: "financeiro",
    label: "Financeiro",
    icon: "banknote",
    href: "/em-breve/financeiro",
    enabled: false,
  },
  // Por atividade — vendido conforme o negócio do cliente
  {
    id: "compras",
    label: "Compras",
    icon: "shopping-bag",
    href: "/em-breve/compras",
    enabled: false,
  },
  {
    id: "estoque",
    label: "Estoque",
    icon: "package",
    href: "/em-breve/estoque",
    enabled: false,
  },
  {
    id: "engenharia",
    label: "Engenharia",
    icon: "ruler",
    href: "/em-breve/engenharia",
    enabled: false,
  },
  {
    id: "pcp",
    label: "PCP",
    icon: "workflow",
    href: "/em-breve/pcp",
    enabled: false,
  },
  {
    id: "expedicao",
    label: "Expedição/Logística",
    icon: "truck",
    href: "/em-breve/expedicao",
    enabled: false,
  },
  {
    id: "faturamento",
    label: "Faturamento",
    icon: "receipt",
    href: "/em-breve/faturamento",
    enabled: false,
  },
  // Paralelo — não depende da cadeia operacional
  {
    id: "rh",
    label: "RH/DP",
    icon: "users",
    href: "/em-breve/rh",
    enabled: false,
  },
];
