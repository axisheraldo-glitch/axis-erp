import { ThemeToggle } from "@/components/theme-toggle";
import { LogoutButton } from "@/components/logout-button";
import { MenuButton } from "@/components/menu-button";

export function Topbar({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex items-center justify-between gap-3 border-b border-card-border bg-card px-4 py-4 sm:px-8 sm:py-5">
      <div className="flex min-w-0 items-center gap-3">
        <MenuButton />
        <div className="min-w-0">
          <h1 className="truncate text-lg font-semibold text-foreground">{title}</h1>
          {subtitle && <p className="truncate text-sm text-muted">{subtitle}</p>}
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-2 sm:gap-3">
        <span className="hidden rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-medium text-brand-gold md:inline-flex">
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
