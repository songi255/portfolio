import React from "react";

import linkIcon from "../../resources/images/arrow.svg";
import "./SkillCard.scss";

function SkillCard({ cardData }) {
  return (
    <div
      className={`card card-${
        cardData.confidence >= 0.7
          ? "epic"
          : cardData.confidence >= 0.4
          ? "rare"
          : "normal"
      }`}
    >
      <div className="card-content">
        <div className="card-image">
          <img
            src={require(`../../resources/icons/${cardData.img}`)}
            alt="skill_image"
          />
        </div>
        <div className="card-title">{cardData.name}</div>
      </div>
      <div className="card-overlay">
        <h6>{cardData.title}</h6>
        <p>{cardData.detail}</p>
        {cardData.link ? (
          <a href={cardData.link} rel="noopener noreferrer" target="_blank">
            <img src={linkIcon} alt="link icon" />
          </a>
        ) : null}
        <div className="progress-container">
          <p>{`${cardData.confidence * 100}%`}</p>
          <div
            className="progress-bar"
            style={{
              maxWidth: `${cardData.confidence * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
