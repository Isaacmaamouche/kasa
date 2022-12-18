import React from "react";

import hero_home from "../../images/hero_home.jpeg";
import { Carousel } from "../../components/Carousel";
import { HeroBanner } from "../../components/HeroBanner";
import { data } from "../../constants/data";
export const Home: React.FC = () => {
  return (
    <>
      <HeroBanner image={hero_home} text="Chez vous, partout et ailleurs" />
      <Carousel images={data[0].pictures} />
    </>
  );
};
