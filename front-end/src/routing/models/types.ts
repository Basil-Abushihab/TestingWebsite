import { JSX } from "react";

export type Route = {
    path: string;
    element: JSX.Element;
    isPrivate:boolean
  };
