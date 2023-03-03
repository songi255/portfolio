import React from "react";

import "../../../resources/css/components/sections/details_section/ProjectCard.css";

export default function ProjectCard({ cardData }) {
  return (
    <div
      className={`card-project ${cardData.img === "add.png" ? "card-add" : ""}`}
    >
      <div className="card-project-img">
        <img
          src={require(`../../../resources/images/${cardData.img}`)}
          alt={`${cardData.title}`}
        />
      </div>
      <div className="card-project-overlay">
        <a
          href={cardData.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-project-detail"
        >
          <h3>{cardData.title}</h3>
        </a>
      </div>
    </div>
  );
}
