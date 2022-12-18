import React from "react";

import { Carousel } from "../../components/Carousel";
import { data } from "../../constants/data";
export const Home: React.FC = () => {
  return (
    <>
      <div>Homepage</div>
      <Carousel images={data[0].pictures} />
    </>
  );
};
