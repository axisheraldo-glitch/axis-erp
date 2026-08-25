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
          <p className="text-sm text-muted">{produtos.length} produtos cadastrados</p>
          <button className="rounded-lg bg-brand-dark px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark-light">
            + Novo produto
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-card-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
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
                <tr key={p.id} className="border-t border-card-border">
                  <td className="px-5 py-3 font-mono text-xs text-muted">{p.codigo}</td>
                  <td className="px-5 py-3 font-medium text-foreground">{p.descricao}</td>
                  <td className="px-5 py-3 text-muted">{p.categoria}</td>
                  <td className="px-5 py-3 text-muted">{p.tamanho}</td>
                  <td className="px-5 py-3 text-muted">{p.cor}</td>
                  <td className="px-5 py-3 text-right text-foreground">{formatBRL(p.precoVenda)}</td>
                  <td className="px-5 py-3 text-right">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        p.estoque < 20
                          ? "bg-rose-100 text-rose-800 dark:bg-rose-400/15 dark:text-rose-300"
                          : "bg-muted-bg text-muted"
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
