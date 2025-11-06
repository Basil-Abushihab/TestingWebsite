import { Home } from "@/pages/home/Home";
import { Login } from "@/pages/login/Login";
import { Signup } from "@/pages/signup/Signup";
import { Route } from "@/routing/models/types";

export const publicRoutes: Route[] = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/signup",
    element: <Signup />,
    isPrivate: false,
  },
];
