import React from "react";
import "./card.scss";

type CardProps = {
  title: string;
  image?: string;
  link: string;
};
export const Card: React.FC<CardProps> = ({ title, image, link }) => {
  return (
    <div className="card">
      <a href={link} title={title}>
        <div className="card__title">{title}</div>
        {image && <img src={image} alt={title} />}
      </a>
    </div>
  );
};
