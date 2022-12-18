import React from "react";

import "./footer.scss";
import logo from "../../images/logo.svg";

export const Footer: React.FC = () => {
  return (
    <footer>
      <img alt="" className="footer__img" src={logo} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
