import React from "react";
import "./rating.scss";

type RatingProps = { rating: string };
export const Rating: React.FC<RatingProps> = ({ rating }) => {
  const starAmount = Number(rating);
  const stars = Array(5)
    .fill("")
    .map((_, idx) => (
      <span
        key={idx}
        className={`rating__star ${
          idx + 1 <= starAmount && "rating__star--filled"
        }`}
      />
    ));

  return (
    <>
      <div className="rating__container">{stars}</div>
    </>
  );
};
