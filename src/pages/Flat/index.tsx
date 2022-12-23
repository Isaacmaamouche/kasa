import React from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "../../components/Accordion";
import { Carousel } from "../../components/Carousel";
import { Host } from "../../components/Host";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { data } from "../../constants/data";

//TODO Responsiveness
//TODO Data layout

export const Flat: React.FC = () => {
  const { flatId } = useParams();

  const flatData = data.find((flat) => flat.id === flatId);

  if (!flatData) return null;

  return (
    <>
      <Carousel images={flatData.pictures} />
      <div className="flat__primary-info">
        <div>
          {flatData.title}
          {flatData.location}
          {flatData.tags.map((tag) => (
            <Tag content={tag} />
          ))}
        </div>

        <div className="flat__secondary-info">
          <Rating rating={flatData.rating} />
          <Host name={flatData.host.name} avatar={flatData.host.picture} />
        </div>
      </div>

      <div className="flat__details">
        <Accordion heading="Description">{flatData.description}</Accordion>
        <Accordion heading="Equipements">
          <ul>
            {flatData.equipments.map((equipment) => (
              <li>{equipment}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </>
  );
};
