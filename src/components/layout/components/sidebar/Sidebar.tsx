import { SidebarHeaderLayout } from "@/components/layout/components/sidebar/SidebarHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";

export const SideBar = () => {
  return (
    <Sidebar collapsible="icon" >
      <div className="bg-main-theme h-full">
      <SidebarHeaderLayout/>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
      </div>
    </Sidebar>
  );
};
