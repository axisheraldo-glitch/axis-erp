import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/components/logout-button";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex items-center justify-between border-b border-card-border bg-card px-8 py-5">
      <div>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
        {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-medium text-brand-gold">
          Ambiente de demonstração · Estilo Camisetas Ltda
        </span>
        <ThemeToggle />
        <LogoutButton />
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted-bg text-sm font-semibold text-foreground">
          EC
        </div>
      </div>
    </header>
  );
}
