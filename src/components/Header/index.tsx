import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";
import logo from "../../images/logo.svg";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <img alt="logo" className="logo" src={logo} />

      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
              to="/"
            >
              Accueil
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : undefined
              }
              to="/about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
