import { Topbar } from "@/components/topbar";
import { pedidos, valorPedido, clientePorId, produtoPorId, formatDataBR } from "@/lib/demo-data";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const statusStyles: Record<string, string> = {
  "Em produção": "bg-amber-100 text-amber-800",
  Faturado: "bg-blue-100 text-blue-800",
  Entregue: "bg-emerald-100 text-emerald-800",
  Cancelado: "bg-rose-100 text-rose-800",
};

export default function PedidosPage() {
  return (
    <>
      <Topbar title="Pedidos" subtitle="Comercial" />
      <main className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">{pedidos.length} pedidos registrados</p>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            + Novo pedido
          </button>
        </div>

        <div className="space-y-3">
          {pedidos.map((p) => {
            const cliente = clientePorId(p.clienteId);
            return (
              <div key={p.id} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-semibold text-slate-900">{p.numero}</p>
                    <p className="text-sm text-slate-500">
                      {cliente?.nome} · {formatDataBR(p.data)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[p.status]}`}>
                      {p.status}
                    </span>
                    <span className="text-sm font-semibold text-slate-900">
                      {formatBRL(valorPedido(p))}
                    </span>
                  </div>
                </div>

                <table className="mt-4 w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
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
                        <tr key={idx} className="border-t border-slate-100">
                          <td className="py-2 text-slate-700">
                            {produto?.descricao} ({produto?.tamanho}, {produto?.cor})
                          </td>
                          <td className="py-2 text-right text-slate-600">{item.quantidade}</td>
                          <td className="py-2 text-right text-slate-600">
                            {formatBRL(item.precoUnitario)}
                          </td>
                          <td className="py-2 text-right font-medium text-slate-900">
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
