import React, { ReactNode, useState } from "react";
import "./accordion.scss";

type AccordionProps = {
  children: ReactNode;
  heading: ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ children, heading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const headingIsNode =
    typeof heading !== "string" && typeof heading !== "number";
  const accordionClass = `accordion ${isOpen ? "isOpen" : ""}`;
  return (
    <>
      <div className={accordionClass}>
        <div className="accordion__heading" onClick={() => setIsOpen(!isOpen)}>
          {headingIsNode && <div>{heading}</div>}
          {!headingIsNode && <span>{heading}</span>}
        </div>
        {isOpen && <div className="accordion__content">{children}</div>}
      </div>
    </>
  );
};
