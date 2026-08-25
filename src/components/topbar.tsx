export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-8 py-5">
      <div>
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
          Ambiente de demonstração · Estilo Camisetas Ltda
        </span>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">
          EC
        </div>
      </div>
    </header>
  );
}
