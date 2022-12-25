import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Error } from "./components/Error";
import { Layout } from "./Layout";
import { Flat } from "./pages/Flat";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />} path="/">
          <Route element={<Home />} index />
          <Route element={<About />} path="about" />
          <Route element={<Flat />} path="flat/:flatId" />
          <Route element={<Error />} path="*" />
        </Route>
      </Routes>
    </div>
  );
};
