import React from "react";
import "./card.scss";

type CardProps = {
  title: string;
  image?: string;
  link: string;
};
export const Card: React.FC<CardProps> = ({ title, image, link }) => {
  return (
    <a className="card" href={link} title={title}>
      <span className="card__title">{title}</span>
      {image && <img src={image} alt={title} />}
    </a>
  );
};
