import React from "react";

import "./host.scss";

type HostProps = {
  name: string;
  avatar: string;
};
export const Host: React.FC<HostProps> = ({ name, avatar }) => {
  const slicedName = [name.split(" ")[0], name.split(" ").slice(1)].map(
    (part, idx) => <span key={idx}>{part}</span>
  );
  return (
    <div className="host">
      <div className="host__name">{slicedName}</div>
      <div className="host__avatar">
        <img src={avatar} alt={`${name} avatar`} />
      </div>
    </div>
  );
};
