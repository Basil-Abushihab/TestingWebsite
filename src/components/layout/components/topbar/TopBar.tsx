import { AppLogo } from "@/assets/assetComponents/AppLogo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export const TopBar = () => {
  return (
    <>
      <div className="flex items-center justify-between w-full h-[80px] pt-3 bg-sub-theme px-5">
        <div className="flex justify-center items-center gap-25">
          <AppLogo className="w-[220px] sm:w-[260] md:w-[280px] lg:w-[320px]" />
        </div>
        <SidebarTrigger
          TriggerImage={Menu}
          className="cursor-pointer md:hidden lg:hidden"
        />
      </div>
    </>
  );
};
