import { Topbar } from "@/components/topbar";
import { clientes } from "@/lib/demo-data";

export default function ClientesPage() {
  return (
    <>
      <Topbar title="Clientes" subtitle="Cadastros Mestres" />
      <main className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted">{clientes.length} clientes cadastrados</p>
          <button className="rounded-lg bg-brand-dark px-4 py-2 text-sm font-medium text-white hover:bg-brand-dark-light">
            + Novo cliente
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-card-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-muted">
                <th className="px-5 py-3 font-medium">Nome</th>
                <th className="px-5 py-3 font-medium">Tipo</th>
                <th className="px-5 py-3 font-medium">Documento</th>
                <th className="px-5 py-3 font-medium">Cidade/UF</th>
                <th className="px-5 py-3 font-medium">Contato</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((c) => (
                <tr key={c.id} className="border-t border-card-border">
                  <td className="px-5 py-3 font-medium text-foreground">{c.nome}</td>
                  <td className="px-5 py-3 text-muted">{c.tipo}</td>
                  <td className="px-5 py-3 text-muted">{c.documento}</td>
                  <td className="px-5 py-3 text-muted">
                    {c.cidade}/{c.uf}
                  </td>
                  <td className="px-5 py-3 text-muted">
                    <div>{c.telefone}</div>
                    <div className="text-xs text-muted/70">{c.email}</div>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        c.status === "Ativo"
                          ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300"
                          : "bg-muted-bg text-muted"
                      }`}
                    >
                      {c.status}
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
