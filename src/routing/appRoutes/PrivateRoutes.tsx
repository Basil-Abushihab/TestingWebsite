import { Route } from "@/routing/models/types";

export const privateRoutes: Route[] = [
  {
    path: "/hello",
    element: <></>,
    isPrivate: true,
  },
];
