import React, { ReactNode, useState } from "react";
import "./accordion.scss";

type AccordionProps = {
  children: ReactNode;
  heading: ReactNode;
  expanded?: boolean;
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  expanded = false,
  heading,
}) => {
  const [isOpen, setIsOpen] = useState(expanded);
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
