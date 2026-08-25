import { Topbar } from "@/components/topbar";
import { StatCard } from "@/components/stat-card";
import { StatusBadge } from "@/components/status-badge";
import { clientes, produtos, pedidos, valorPedido, clientePorId, formatDataBR } from "@/lib/demo-data";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function DashboardPage() {
  const clientesAtivos = clientes.filter((c) => c.status === "Ativo").length;
  const produtosBaixoEstoque = produtos.filter((p) => p.estoque < 20).length;
  const pedidosAtivos = pedidos.filter((p) => p.status !== "Cancelado");
  const faturamentoTotal = pedidosAtivos.reduce((soma, p) => soma + valorPedido(p), 0);
  const emProducao = pedidos.filter((p) => p.status === "Em produção").length;

  return (
    <>
      <Topbar title="Painel" subtitle="Visão geral da operação" />
      <main className="flex-1 space-y-6 p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Clientes ativos" value={String(clientesAtivos)} hint={`${clientes.length} cadastrados no total`} />
          <StatCard label="Produtos cadastrados" value={String(produtos.length)} hint={`${produtosBaixoEstoque} com estoque baixo`} />
          <StatCard label="Pedidos em produção" value={String(emProducao)} hint={`${pedidos.length} pedidos no total`} />
          <StatCard label="Faturamento (pedidos válidos)" value={formatBRL(faturamentoTotal)} hint="Exclui pedidos cancelados" />
        </div>

        <div className="rounded-xl border border-card-border bg-card">
          <div className="border-b border-card-border px-5 py-4">
            <h2 className="text-sm font-semibold text-foreground">Últimos pedidos</h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3 font-medium">Número</th>
                <th className="px-5 py-3 font-medium">Cliente</th>
                <th className="px-5 py-3 font-medium">Data</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium text-right">Valor</th>
              </tr>
            </thead>
            <tbody>
              {pedidos.map((p) => (
                <tr key={p.id} className="border-t border-card-border">
                  <td className="px-5 py-3 font-medium text-foreground">{p.numero}</td>
                  <td className="px-5 py-3 text-muted">{clientePorId(p.clienteId)?.nome}</td>
                  <td className="px-5 py-3 text-muted">{formatDataBR(p.data)}</td>
                  <td className="px-5 py-3">
                    <StatusBadge status={p.status} />
                  </td>
                  <td className="px-5 py-3 text-right text-foreground">{formatBRL(valorPedido(p))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-xl border border-dashed border-brand-mint/40 bg-brand-mint/10 p-5 text-sm text-foreground">
          <p className="font-medium">Este é um ambiente de demonstração</p>
          <p className="mt-1 text-muted">
            Todos os dados abaixo (clientes, produtos e pedidos) são fictícios, simulando uma
            confecção de camisetas chamada &quot;Estilo Camisetas Ltda&quot;. Servem para mostrar
            como o sistema funciona na prática antes de configurar os dados reais de um cliente.
          </p>
        </div>
      </main>
    </>
  );
}
