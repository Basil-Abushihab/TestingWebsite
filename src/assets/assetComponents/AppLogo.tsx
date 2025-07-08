import AppLogoSvg from "@/assets/svgAssets/AppLogoWhite.svg";
import AppLogoGif from "@/assets/gifAssets/AppLogoWhite.gif";
import AppLogoSvgAr from "@/assets/svgAssets/AppLogoAr.svg";
import AppLogoGifAr from "@/assets/gifAssets/AppLogoAr.gif";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/store/hooks/reduxHooks";
import { selectLocale } from "@/features/localization/selectors";
import { LocalesEnum } from "@/features/localization/models/localizationState.model";

export const AppLogo = ({ className }: React.ComponentProps<"img">) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const locale = useAppSelector(selectLocale);
  const appLogoBasedOnLocaleSvg =
    locale === LocalesEnum.english ? AppLogoSvg : AppLogoSvgAr;
  const appLogoBasedOnLocaleGif =
    locale === LocalesEnum.english ? AppLogoGif : AppLogoGifAr;
  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={cn("flex items-center", className)}
      >
        <img
          src={isHovering ? appLogoBasedOnLocaleGif : appLogoBasedOnLocaleSvg}
          alt=""
        />
      </div>
    </>
  );
};
