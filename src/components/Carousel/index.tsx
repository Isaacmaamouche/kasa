import React, { useState } from "react";
import "./carousel.scss";

//TODO carousel props
//TODO responsive

type CarouselProps = {
  images: string[];
};
export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const enableControls = images.length > 1;

  const handleOnClick = (newIndex: number) => {
    if (newIndex === images.length) {
      setIndex(0);
    } else if (newIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      <img alt="" src={images[index]} />
      {enableControls ? (
        <>
          <div
            className="control control-left"
            onClick={() => handleOnClick(index - 1)}
          />
          <div
            className="control control-right"
            onClick={() => handleOnClick(index + 1)}
          />
          <div className="index-info">
            {index + 1}/{images.length}
          </div>
        </>
      ) : null}
    </div>
  );
};
