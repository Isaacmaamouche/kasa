import React, { ReactNode } from "react";

import "./hero-banner.scss";

type HeroBannerProps = {
  text?: ReactNode;
  image: string;
};
export const HeroBanner: React.FC<HeroBannerProps> = ({ image, text }) => {
  const textIsNode = Boolean(text instanceof Element);
  const imgAlt = textIsNode ? "" : text;
  return (
    <div className="hero__banner">
      <img
        alt={`image d'illustration ${imgAlt}`}
        className="hero__image"
        src={image}
      />
      {text && (
        <>
          {textIsNode && { text }}
          {!textIsNode && <h1 className="hero__title"> {text} </h1>}
        </>
      )}
    </div>
  );
};
