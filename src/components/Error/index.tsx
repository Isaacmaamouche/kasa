import React from "react";
import { Link } from "react-router-dom";
import "./error.scss";
export const Error: React.FC = () => {
  return (
    <div className="error__container">
      <p className="error__content__404">404</p>
      <p className="error__content__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" title="link to home page" className="error__content__link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
};
