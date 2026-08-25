export type ModuleId =
  | "dashboard"
  | "cadastros"
  | "comercial"
  | "pcp"
  | "estoque"
  | "financeiro";

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
// (o mesmo shell serve para vender o sistema inteiro ou só alguns módulos).
export const MODULES: ModuleDef[] = [
  {
    id: "dashboard",
    label: "Painel",
    icon: "layout-dashboard",
    href: "/",
    enabled: true,
  },
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
    id: "pcp",
    label: "PCP",
    icon: "workflow",
    href: "/em-breve/pcp",
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
    id: "financeiro",
    label: "Financeiro",
    icon: "banknote",
    href: "/em-breve/financeiro",
    enabled: false,
  },
];
