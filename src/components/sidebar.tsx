"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MODULES } from "@/lib/modules";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.split("/").slice(0, 3).join("/"));
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col bg-slate-900 text-slate-200">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500 font-bold text-white">
          E
        </div>
        <div>
          <p className="text-sm font-semibold text-white">ERP Modular</p>
          <p className="text-xs text-slate-400">Demonstração</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
        {MODULES.map((mod) => (
          <div key={mod.id} className="mb-1">
            <Link
              href={mod.enabled ? mod.href : "#"}
              className={`flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                mod.enabled
                  ? isActive(pathname, mod.href)
                    ? "bg-indigo-500/15 text-indigo-300"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  : "cursor-not-allowed text-slate-600"
              }`}
            >
              <span>{mod.label}</span>
              {!mod.enabled && (
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-normal text-slate-500">
                  em breve
                </span>
              )}
            </Link>

            {mod.enabled && mod.children && isActive(pathname, mod.href) && (
              <div className="ml-3 mt-1 space-y-0.5 border-l border-slate-800 pl-3">
                {mod.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block rounded-md px-3 py-1.5 text-sm transition-colors ${
                      pathname === child.href
                        ? "text-indigo-300"
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

      <div className="border-t border-slate-800 px-4 py-4 text-xs text-slate-500">
        Plano ativo: <span className="text-slate-300">Comercial + Cadastros</span>
      </div>
    </aside>
  );
}
