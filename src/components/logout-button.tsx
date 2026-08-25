"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "axis-auth=; path=/; max-age=0";
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      title="Sair"
      aria-label="Sair"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-card-border text-muted transition-colors hover:text-foreground"
    >
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" className="h-4 w-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 17l5-5-5-5M20 12H9M12 19H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
      </svg>
    </button>
  );
}
