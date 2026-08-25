import { Topbar } from "@/components/topbar";
import { clientes } from "@/lib/demo-data";

export default function ClientesPage() {
  return (
    <>
      <Topbar title="Clientes" subtitle="Cadastros Mestres" />
      <main className="flex-1 space-y-4 p-8">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">{clientes.length} clientes cadastrados</p>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
            + Novo cliente
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-400">
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
                <tr key={c.id} className="border-t border-slate-100">
                  <td className="px-5 py-3 font-medium text-slate-900">{c.nome}</td>
                  <td className="px-5 py-3 text-slate-600">{c.tipo}</td>
                  <td className="px-5 py-3 text-slate-600">{c.documento}</td>
                  <td className="px-5 py-3 text-slate-600">
                    {c.cidade}/{c.uf}
                  </td>
                  <td className="px-5 py-3 text-slate-600">
                    <div>{c.telefone}</div>
                    <div className="text-xs text-slate-400">{c.email}</div>
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        c.status === "Ativo"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600"
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
