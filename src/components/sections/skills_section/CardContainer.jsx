import React from "react";
import { useMessage } from "../../../hooks/useMessage";
import SkillCard from "./SkillCard";

function CardContainer({ category }) {
  const msg = useMessage();

  const cards = msg.skills_section[category].map((cardData) => {
    return <SkillCard key={cardData.name} cardData={cardData} />;
  });

  return <div className="card-container">{cards}</div>;
}

export default CardContainer;
