import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXIS — Estrutura Comercial Inteligente",
  description: "ERP modular, genérico, com dados de demonstração",
};

// Aplica o tema salvo antes da primeira pintura da página, evitando o
// "flash" de tema claro seguido de escuro (ou vice-versa) ao carregar.
const themeInitScript = `
  (function () {
    var stored = localStorage.getItem("axis-theme");
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored ? stored === "dark" : prefersDark) {
      document.documentElement.classList.add("dark");
    }
  })();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="h-full min-h-screen bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
