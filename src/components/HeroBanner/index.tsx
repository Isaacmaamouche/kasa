import React from "react";

import "./hero-banner.scss";

type HeroBannerProps = {
  text?: string;
  image: string;
};
export const HeroBanner: React.FC<HeroBannerProps> = ({ image, text }) => {
  return (
    <div className="hero__banner">
      <img alt={`image ${text}`} className="hero__image" src={image} />
      {text && <h1 className="hero__title"> {text} </h1>}
    </div>
  );
};
