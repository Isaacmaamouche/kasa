import React from "react";
import { Link } from "react-router-dom";

import logo from "../../images/logo.svg";

export const Header: React.FC = () => {
  return (
    <header className="App-header">
      <img alt="logo" className="App-logo" src={logo} />

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
