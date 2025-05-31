import { Route } from "@/routing/models/types";

export const fallbackRoutes: Route[] = [
  {
    path: "*",
    element: <></>,
    isPrivate: false,
  },
];
