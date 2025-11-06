import { SidebarHeaderLayout } from "@/components/layout/components/sidebar/SidebarHeader";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type SideBarProps = {
  className?: string;
};
export const SideBar = ({ className }: SideBarProps) => {
  return (
    <div className="md:hidden lg:hidden">
      <Sidebar collapsible="icon" className={className}>
        <div className="bg-main-theme h-full">
          <SidebarHeaderLayout />
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </div>
      </Sidebar>
    </div>
  );
};
