import React from "react";

import hero_about from "../../images/hero_about.jpeg";
import { HeroBanner } from "../../components/HeroBanner";
import { Accordion } from "../../components/Accordion";
import "./about.scss";

export const About: React.FC = () => {
  return (
    <>
      <HeroBanner image={hero_about} />
      <div className="about__container">
        <Accordion heading="Fiabilité">
          <p className="about__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            recusandae cupiditate fuga provident perspiciatis qui odio ad!
            Optio, dolores officia recusandae vel odio sed, doloribus harum,
            error cum eaque molestias!
          </p>
        </Accordion>
        <Accordion heading="Respect">
          <p className="about__content">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </p>
        </Accordion>
        <Accordion heading="Service">
          <p className="about__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            recusandae cupiditate fuga provident perspiciatis qui odio ad!
            Optio, dolores officia recusandae vel odio sed, doloribus harum,
            error cum eaque molestias!
          </p>
        </Accordion>
        <Accordion heading="Responsabilité">
          <p className="about__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            recusandae cupiditate fuga provident perspiciatis qui odio ad!
            Optio, dolores officia recusandae vel odio sed, doloribus harum,
            error cum eaque molestias!
          </p>
        </Accordion>
      </div>
    </>
  );
};
