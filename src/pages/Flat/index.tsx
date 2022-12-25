import React from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "../../components/Accordion";
import { Carousel } from "../../components/Carousel";
import { Host } from "../../components/Host";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { data } from "../../constants/data";
import { Error } from "../../components/Error";
import "./flat.scss";
import { useViewportSize } from "../../utils/useViewportSize";

//TODO Figure the navigate thing out

export const Flat: React.FC = () => {
  const { flatId } = useParams();
  // const navigate = useNavigate();

  const { innerWidth } = useViewportSize();
  const mobileViewport = innerWidth < 425;

  const flatData = data?.find((flat) => flat.id === flatId);

  // useEffect(() => {
  //   if (!flatData) navigate("/about");
  // });

  if (!flatData) return <Error />;
  return (
    <>
      <Carousel images={flatData.pictures} />
      <div className="flat__info">
        <div className="flat__primary-info">
          <div>
            <p className="flat__title">{flatData.title}</p>
            <p className="flat__location">{flatData.location}</p>
          </div>
          <div className="flat__tags">
            {flatData.tags.map((tag, idx) => (
              <Tag key={idx} content={tag} />
            ))}
          </div>
        </div>

        <div className="flat__secondary-info">
          <Host name={flatData.host.name} avatar={flatData.host.picture} />
          <Rating rating={flatData.rating} />
        </div>
      </div>

      <div className="flat__details">
        <Accordion heading="Description" expanded={!mobileViewport}>
          {flatData.description}
        </Accordion>
        <Accordion heading="Equipements" expanded={!mobileViewport}>
          <ul>
            {flatData.equipments.map((equipment, idx) => (
              <li key={idx}>{equipment}</li>
            ))}
          </ul>
        </Accordion>
      </div>
    </>
  );
};
