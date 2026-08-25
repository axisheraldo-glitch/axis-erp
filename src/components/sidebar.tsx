"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MODULES } from "@/lib/modules";
import { LogoMark, LogoWordmark } from "@/components/logo";
import { useMobileNav } from "@/components/mobile-nav-context";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.split("/").slice(0, 3).join("/"));
}

export function Sidebar() {
  const pathname = usePathname();
  const { open, setOpen } = useMobileNav();

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex h-screen w-64 shrink-0 flex-col bg-brand-dark text-slate-200 transition-transform duration-200 md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5">
          <div className="flex items-center gap-2.5">
            <LogoMark className="h-8 w-8 shrink-0" />
            <LogoWordmark withTagline />
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar menu"
            className="text-slate-400 hover:text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
          {MODULES.map((mod) => (
            <div key={mod.id} className="mb-1">
              <Link
                href={mod.enabled ? mod.href : "#"}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  mod.enabled
                    ? isActive(pathname, mod.href)
                      ? "bg-brand-mint/15 text-brand-mint"
                      : "text-slate-300 hover:bg-brand-dark-light hover:text-white"
                    : "cursor-not-allowed text-slate-600"
                }`}
              >
                <span>{mod.label}</span>
                {!mod.enabled && (
                  <span className="rounded-full bg-brand-dark-light px-2 py-0.5 text-[10px] font-normal text-slate-500">
                    em breve
                  </span>
                )}
              </Link>

              {mod.enabled && mod.children && isActive(pathname, mod.href) && (
                <div className="ml-3 mt-1 space-y-0.5 border-l border-brand-dark-light pl-3">
                  {mod.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                        pathname === child.href
                          ? "text-brand-mint"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t border-brand-dark-light px-4 py-4 text-xs text-slate-500">
          Plano ativo: <span className="text-slate-300">Comercial + Cadastros</span>
        </div>
      </aside>
    </>
  );
}
