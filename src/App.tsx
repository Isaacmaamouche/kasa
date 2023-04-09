import React from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./Layout";
import { routes } from "./routes";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} path="/">
          {routes.map(({ Element, isIndex = false, path }, idx) => (
            <Route key={idx} element={Element} path={path} index={isIndex} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};
