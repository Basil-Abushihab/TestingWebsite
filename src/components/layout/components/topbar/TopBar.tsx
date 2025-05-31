import { AppLogo } from "@/assets/assetComponents/AppLogo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export const TopBar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-[60px] pt-3 sm:px-0 md:px-10 lg:px-20">
        <AppLogo className="w-[60px] sm:w-[80px] md:w-[100px] lg:w-[120px]"/>
        <SidebarTrigger TriggerImage={Menu}></SidebarTrigger>
      </div>
    </>
  );
};
