import { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

export const routes = [
  {
    name: "home",
    path: "",
    index: true,
    component: Home,
  },
  {
    name: "portfolio",
    path: "/portfolio",
    index: true,
    component: Portfolio,
  },
];
