import React, { useState } from "react";
import "./carousel.scss";

type CarouselProps = {
  images: string[];
};
export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);
  const enableControls = images.length > 1;

  const updateIndex = (newIndex: number) => {
    if (newIndex === images.length) {
      setIndex(0);
    } else if (newIndex < 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  const goPrev = () => updateIndex(index - 1);
  const goNext = () => updateIndex(index + 1);
  const currentIndex = (index + 1 / images.length) | 0;

  return (
    <div className="carousel">
      <img alt={`${index} - photo du bien en location`} src={images[index]} />
      {enableControls ? (
        <>
          <div className="control" onClick={goNext} />
          <div className="control control__left" onClick={goPrev} />
          <div className="index__info">
            {currentIndex} / {images.length}
          </div>
        </>
      ) : null}
    </div>
  );
};
