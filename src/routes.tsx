import { ReactNode } from "react";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Flat } from "./pages/Flat";
import { Page404 } from "./pages/Page404";

type RoutesType = {
  Element: ReactNode;
  path: string;
  isIndex?: boolean;
};
export const routes: RoutesType[] = [
  {
    Element: <Home />,
    path: "",
    isIndex: true,
  },
  {
    Element: <About />,
    path: "about",
  },
  {
    Element: <Flat />,
    path: "flat/:flatId",
  },
  {
    Element: <Page404 />,
    path: "*",
  },
];
