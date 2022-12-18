import React, { useState } from "react";
import "./carousel.scss";

//TODO carousel props
//TODO responsive

import { data } from "../../constants/data";
const img = data[0].pictures;
export const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const enableControls = img.length > 1;

  const handleOnClick = (newIndex: number) => {
    if (newIndex === img.length) {
      setIndex(0);
    } else if (newIndex < 0) {
      setIndex(img.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div className="carousel">
      <img alt="" src={img[index]} />
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
            {index + 1}/{img.length}
          </div>
        </>
      ) : null}
    </div>
  );
};
