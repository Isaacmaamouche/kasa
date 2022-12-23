import React from "react";
import "./tag.scss";

type TagProps = {
  content: string;
};
export const Tag: React.FC<TagProps> = ({ content }) => {
  return (
    <>
      <p className="tag">{content}</p>
    </>
  );
};
