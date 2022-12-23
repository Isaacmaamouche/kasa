import React from "react";

import hero_home from "../../images/hero_home.jpeg";
import { Carousel } from "../../components/Carousel";
import { HeroBanner } from "../../components/HeroBanner";
import { data } from "../../constants/data";
import { Accordion } from "../../components/Accordion";
import { Card } from "../../components/Card";
import { Tag } from "../../components/Tag";

export const Home: React.FC = () => {
  return (
    <>
      <HeroBanner image={hero_home} text="Chez vous, partout et ailleurs" />
      <Tag content="tag" />
      <Card title="title" image={data[0].pictures[0]} link={"/#"} />
      <Accordion heading="heading">
        <p>content</p>
      </Accordion>
      <Carousel images={data[0].pictures} />
    </>
  );
};
