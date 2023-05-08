import React, { ReactNode } from "react";

import "./hero-banner.scss";

type HeroBannerProps = {
  title?: ReactNode;
  image: string;
};
export const HeroBanner: React.FC<HeroBannerProps> = ({ image, title }) => {
  return (
    <div className="hero__banner">
      <img alt="image d'illustration" className="hero__image" src={image} />
      {title && <h1 className="hero__title">{title}</h1>}
    </div>
  );
};
