"use client";

import { useMobileNav } from "@/components/mobile-nav-context";

export function MenuButton() {
  const { setOpen } = useMobileNav();

  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Abrir menu"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-card-border text-muted hover:text-foreground"
    >
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-4.5 w-4.5">
        <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    </button>
  );
}
