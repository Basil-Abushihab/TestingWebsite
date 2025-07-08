import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks/reduxHooks";
import { selectLocale } from "../selectors";
import ArFlag from "@/assets/svgAssets/JordanFlag.svg";
import EnFlag from "@/assets/svgAssets/UnitedKingdomFlag.svg";
import { LocalesEnum } from "../models/localizationState.model";
import { changeLanguage } from "i18next";
import { changeLocaleLanguage } from "../reducers/localizationSlice";
import { cn } from "@/lib/utils";

export const LocalizationButton = ({
  className,
}: React.ComponentProps<"button">) => {
  const locale = useAppSelector(selectLocale);
  const dispatch = useAppDispatch();

  const changeLocaleOnClick = () => {
    const targetLocale =
      locale === LocalesEnum.english ? LocalesEnum.arabic : LocalesEnum.english;
    dispatch(changeLocaleLanguage({ locale: targetLocale }));
    changeLanguage(targetLocale);
  };
  return (
    <>
      <Button
        onClick={changeLocaleOnClick}
        className={cn(
          "text-center cursor-pointer bg-transparent text-white hover:bg-transparent outline-0 border-0",
          className
        )}
        variant={"secondary"}
      >
        <img
          src={locale === LocalesEnum.english ? EnFlag : ArFlag}
          alt="Localization Flag"
        />
        {locale.toUpperCase()}
      </Button>
    </>
  );
};
