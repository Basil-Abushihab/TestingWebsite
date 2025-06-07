import { SideBar } from "@/components/layout/components/sidebar/Sidebar";
import { TopBar } from "@/components/layout/components/topbar/TopBar";
import { SidebarProvider } from "@/components/ui/sidebar";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <SidebarProvider >
     
        <SideBar />
     
      <div className="flex flex-col w-full">
      <TopBar />
      <main className="w-full flex justify-center">
        {children}
      </main>
      </div>
    </SidebarProvider>
  );
};
