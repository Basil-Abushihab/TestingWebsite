import AppLogoSvg from "@/assets/svgAssets/AppLogo.svg";
import AppLogoGif from "@/assets/gifAssets/AppLogo.gif";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const AppLogo = ({className}:React.ComponentProps<"img">) => {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={cn("flex items-center",className)}
      >
        <img src={isHovering?AppLogoGif:AppLogoSvg} alt="" />
      </div>
    </>
  );
};
