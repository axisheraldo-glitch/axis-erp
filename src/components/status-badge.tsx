const STATUS_STYLES: Record<string, string> = {
  "Em produção": "bg-amber-100 text-amber-800 dark:bg-amber-400/15 dark:text-amber-300",
  Faturado: "bg-blue-100 text-blue-800 dark:bg-blue-400/15 dark:text-blue-300",
  Entregue: "bg-emerald-100 text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-300",
  Cancelado: "bg-rose-100 text-rose-800 dark:bg-rose-400/15 dark:text-rose-300",
};

export function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        STATUS_STYLES[status] ?? "bg-muted-bg text-muted"
      }`}
    >
      {status}
    </span>
  );
}
