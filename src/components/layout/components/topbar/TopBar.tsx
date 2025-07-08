import { AppLogo } from "@/assets/assetComponents/AppLogo";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";
import { TopbarLinks } from "./topbarlinks/TopBarLinksBar";
import { LocalizationButton } from "@/features/localization/components/LocalizationButton";
import { useAppSelector } from "@/store/hooks/reduxHooks";
import { selectLocale } from "@/features/localization/selectors";
import { LocalesEnum } from "@/features/localization/models/localizationState.model";
import { ProfileOptions } from "@/components/profileCard/ProfileOptions";

export const TopBar = () => {
  const locale=useAppSelector(selectLocale);
  return (
    <>
      <div className="flex items-center justify-center w-full h-[80px] pt-3 bg-main-theme px-5" dir={locale===LocalesEnum.english?"ltr":"rtl"}>
        <div className="flex items-center gap-x-48 w-[80%] justify-right ">
          <AppLogo className="w-[220px] sm:w-[260] md:w-[280px] lg:w-[320px]" />
          <TopbarLinks/>
        </div>
        <div className="flex space-x-5 items-center">
        <ProfileOptions contentClassName="w-40" className="hidden lg:flex py-2"/>
        <LocalizationButton className="hidden lg:flex"/>
        </div>
        <SidebarTrigger
          TriggerImage={Menu}
          className="cursor-pointer lg:hidden"
        />
      </div>
    </>
  );
};
