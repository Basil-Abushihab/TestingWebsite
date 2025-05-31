import { Layout } from "@/components/layout/Layout";
import { fallbackRoutes } from "@/routing/appRoutes/FallbackRoutes";
import { privateRoutes } from "@/routing/appRoutes/PrivateRoutes";
import { publicRoutes } from "@/routing/appRoutes/PublicRoutes";
import { parseRouteObjects } from "@/routing/utils/ParseRouteObject";
import { useRoutes } from "react-router-dom";

export const AppRouter = () => {
  const routes = parseRouteObjects([
    ...fallbackRoutes,
    ...publicRoutes,
    ...privateRoutes,
  ]);
  const allRoutes = useRoutes(routes);

  return <Layout>{allRoutes}</Layout>;
};
