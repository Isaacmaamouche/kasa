import React from "react";

import "./home.scss";

import hero_home from "../../images/hero_home.jpeg";
import { HeroBanner } from "../../components/HeroBanner";
import { data } from "../../constants/data";
import { Card } from "../../components/Card";

export const Home: React.FC = () => {
  return (
    <>
      <HeroBanner
        image={hero_home}
        title={
          <span>
            Chez vous, <br />
            partout et ailleurs
          </span>
        }
      />

      <div className="card__container">
        {data.map((flat) => (
          <Card
            key={flat.id}
            title={flat.title}
            link={`flat/${flat.id}`}
            image={flat.cover}
          />
        ))}
      </div>
    </>
  );
};
