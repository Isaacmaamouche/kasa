import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";

type CardProps = {
  title: string;
  image?: string;
  link: string;
};
export const Card: React.FC<CardProps> = ({ image, link, title }) => {
  return (
    <Link className="card" to={link} title={title}>
      <span className="card__title">{title}</span>
      {image && <img src={image} alt={title} />}
    </Link>
  );
};
