import React, { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Layout } from "./Layout";
import { Flat } from "./pages/Flat";
import { Page404 } from "./pages/Page404";

// type RoutesType = {
//   Element: ReactNode;
//   path: string;
//   isIndex:boolean;
// };
// const routes = {} as RoutesType;

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} path="/">
          {/* {routes && routes.map({Element, path, isIndex} => (
          <Route element={Element} path={path} index={isIndex/ >
        ) } */}
          <Route element={<Home />} index />
          <Route element={<About />} path="about" />
          <Route element={<Flat />} path="flat/:flatId" />
          <Route element={<Page404 />} path="*" />
        </Route>
      </Routes>
    </div>
  );
};
