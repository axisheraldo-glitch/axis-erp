"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("axis-theme", next ? "dark" : "light");
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      title={isDark ? "Tema claro" : "Tema escuro"}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:text-foreground"
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-4.5 w-4.5">
          <circle cx="12" cy="12" r="4.5" />
          <path strokeLinecap="round" d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M20.7 14.6A8.5 8.5 0 1 1 9.4 3.3a7 7 0 0 0 11.3 11.3Z" />
        </svg>
      )}
    </button>
  );
}
