import { Sidebar } from "@/components/sidebar";
import { MobileNavProvider } from "@/components/mobile-nav-context";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <MobileNavProvider>
      <div className="flex h-full min-h-screen w-full">
        <Sidebar />
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>
      </div>
    </MobileNavProvider>
  );
}
