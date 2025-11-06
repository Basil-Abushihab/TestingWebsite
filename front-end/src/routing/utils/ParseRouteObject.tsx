import { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "@/components/protectedRoute/ProtectedRoute";
import { Route } from "@/routing/models/types";

export const parseRouteObjects = (routes: Route[]): RouteObject[] => {
  return routes.map((route) => ({
    path: route.path,
    element: route.isPrivate ? (
      <ProtectedRoute>{route.element}</ProtectedRoute>
    ) : (
      route.element
    ),
  }));
};
