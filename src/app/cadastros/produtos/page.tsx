import { Topbar } from "@/components/topbar";
import { produtos } from "@/lib/demo-data";

function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProdutosPage() {
  return (
    <>
      <Topbar title="Produtos" subtitle="Cadastros Mestres" />
      <main className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">{produtos.length} produtos cadastrados</p>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            + Novo produto
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
                <th className="px-5 py-3 font-medium">Código</th>
                <th className="px-5 py-3 font-medium">Descrição</th>
                <th className="px-5 py-3 font-medium">Categoria</th>
                <th className="px-5 py-3 font-medium">Tam.</th>
                <th className="px-5 py-3 font-medium">Cor</th>
                <th className="px-5 py-3 font-medium text-right">Preço</th>
                <th className="px-5 py-3 font-medium text-right">Estoque</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map((p) => (
                <tr key={p.id} className="border-t border-slate-100">
                  <td className="px-5 py-3 font-mono text-xs text-slate-500">{p.codigo}</td>
                  <td className="px-5 py-3 font-medium text-slate-900">{p.descricao}</td>
                  <td className="px-5 py-3 text-slate-600">{p.categoria}</td>
                  <td className="px-5 py-3 text-slate-600">{p.tamanho}</td>
                  <td className="px-5 py-3 text-slate-600">{p.cor}</td>
                  <td className="px-5 py-3 text-right text-slate-900">{formatBRL(p.precoVenda)}</td>
                  <td className="px-5 py-3 text-right">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        p.estoque < 20
                          ? "bg-rose-100 text-rose-800"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {p.estoque}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
