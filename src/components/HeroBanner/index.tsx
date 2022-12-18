import React from "react";

import "./hero-banner.scss";

type HeroBannerProps = {
  text?: string;
  image?: string;
};
export const HeroBanner: React.FC<HeroBannerProps> = ({ image, text }) => {
  return (
    <div className="hero__banner">
      {image ? <img alt="" className="hero__image" src={image} /> : null}
      {text ? <h1 className="hero__title"> {text} </h1> : null}
    </div>
  );
};
