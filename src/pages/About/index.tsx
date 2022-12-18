import React from "react";

import hero_about from "../../images/hero_about.jpeg";
import { HeroBanner } from "../../components/HeroBanner";

export const About: React.FC = () => {
  return <HeroBanner image={hero_about} />;
};
