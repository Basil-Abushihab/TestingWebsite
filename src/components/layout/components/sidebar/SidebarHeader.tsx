import { Button } from "@/components/ui/button";
import { SidebarHeader, useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { ChevronRightIcon } from "lucide-react";

export const SidebarHeaderLayout = ({ className }: { className?: string }) => {
  const { toggleSidebar, open } = useSidebar();
  return (
    <>
      <SidebarHeader
        className={cn("h-[20%] justify-center items-center", className)}
      >
        <Button
          onClick={toggleSidebar}
          size={clsx({ icon: !open, lg: open }) as "icon" | "lg"}
          className="h-[50%] w-full "
        >
          <span
            className={clsx("transition-all duration-100", { hidden: !open })}
          >
            Collapse Content
          </span>
          <ChevronRightIcon className="" />
        </Button>
      </SidebarHeader>
    </>
  );
};
