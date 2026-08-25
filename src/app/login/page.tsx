"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogoMark, LogoWordmark } from "@/components/logo";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    document.cookie = "axis-auth=1; path=/; max-age=" + 60 * 60 * 24 * 7;
    router.push("/");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex flex-col items-center gap-3">
          <LogoMark className="h-14 w-14" />
          <LogoWordmark withTagline />
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-brand-dark-light bg-brand-dark-light/40 p-6"
        >
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">E-mail</label>
              <input
                type="email"
                defaultValue="demo@axis.com.br"
                required
                className="w-full rounded-lg border border-brand-dark-light bg-brand-dark px-3 py-2 text-sm text-white outline-none focus:border-brand-mint"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-300">Senha</label>
              <input
                type="password"
                defaultValue="demonstracao"
                required
                className="w-full rounded-lg border border-brand-dark-light bg-brand-dark px-3 py-2 text-sm text-white outline-none focus:border-brand-mint"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-lg bg-brand-gold px-4 py-2.5 text-sm font-semibold text-brand-dark transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>

          <p className="mt-4 text-center text-xs text-slate-400">
            Ambiente de demonstração — qualquer e-mail e senha funcionam, basta clicar em Entrar.
          </p>
        </form>
      </div>
    </div>
  );
}
