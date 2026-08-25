import { Topbar } from "@/components/topbar";
import { StatusBadge } from "@/components/status-badge";
import { pedidos, valorPedido, clientePorId, produtoPorId, formatDataBR } from "@/lib/demo-data";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function PedidosPage() {
  return (
    <>
      <Topbar title="Pedidos" subtitle="Comercial" />
      <main className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted">{pedidos.length} pedidos registrados</p>
          <button className="rounded-lg bg-brand-dark px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark-light">
            + Novo pedido
          </button>
        </div>

        <div className="space-y-3">
          {pedidos.map((p) => {
            const cliente = clientePorId(p.clienteId);
            return (
              <div key={p.id} className="rounded-xl border border-card-border bg-card p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-foreground">{p.numero}</p>
                    <p className="text-sm text-muted">
                      {cliente?.nome} · {formatDataBR(p.data)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <StatusBadge status={p.status} />
                    <span className="text-sm font-semibold text-foreground">
                      {formatBRL(valorPedido(p))}
                    </span>
                  </div>
                </div>

                <table className="mt-4 w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-muted">
                      <th className="py-1 font-medium">Produto</th>
                      <th className="py-1 font-medium text-right">Qtd.</th>
                      <th className="py-1 font-medium text-right">Preço unit.</th>
                      <th className="py-1 font-medium text-right">Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {p.itens.map((item, idx) => {
                      const produto = produtoPorId(item.produtoId);
                      return (
                        <tr key={idx} className="border-t border-card-border">
                          <td className="py-2 text-foreground/90">
                            {produto?.descricao} ({produto?.tamanho}, {produto?.cor})
                          </td>
                          <td className="py-2 text-right text-muted">{item.quantidade}</td>
                          <td className="py-2 text-right text-muted">
                            {formatBRL(item.precoUnitario)}
                          </td>
                          <td className="py-2 text-right font-medium text-foreground">
                            {formatBRL(item.quantidade * item.precoUnitario)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
