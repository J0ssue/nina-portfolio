import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));

export const routes = [
  {
    name: "home",
    path: "",
    index: true,
    component: Home,
  },
];
