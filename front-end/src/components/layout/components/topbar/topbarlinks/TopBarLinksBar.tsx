import clsx from "clsx";
import { TopbarLinkParams, TopbarLink } from "./TopBarLink";
import { useTranslation } from "react-i18next";

export const TopbarLinks = () => {
  const { t } = useTranslation("layout", { useSuspense: true });
  const links = t("navigationLinks", {
    returnObjects: true,
  }) as TopbarLinkParams[];
  return (
    <>
    <div className={clsx("hidden lg:flex items-center gap-x-6 w-auto font-medium font-sm")}>
      {links.map((link) => (
        <TopbarLink key={link.path} label={link.label} path={link.path} />
      ))}
    </div>
    </>
  );
};
