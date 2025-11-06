import { Link } from "react-router-dom";
import "./topLinks.css";
import clsx from "clsx";

export type TopbarLinkParams = {
  path: string;
  label: string;
};
export const TopbarLink = (props: TopbarLinkParams) => {
  const { label, path } = props;
  return (
    <>
      <Link
        className={clsx(
          "links text-white font-playpen"
        )}
        to={`${path}`}
      >
        {label}
      </Link>
    </>
  );
};
