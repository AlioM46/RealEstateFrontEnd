import React from "react";
import "./cards.css";
import { SecondaryButton } from "../../Button/Button";
const Cards = ({ title, text, icon }) => {
  return (
    <div className="cards">
      <div className="cards-text">
        <div className="outer">
          <div className="inner">
            <h4>{icon}</h4>
          </div>
        </div>
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default Cards;

export const SecondaryCards = ({ title, text }) => {
  return (
    <div className="secCards">
      <div className="secCards-text">
        <h4>{title}</h4>
        <SecondaryButton>Learn More</SecondaryButton>
      </div>

      <p>{text}</p>
    </div>
  );
};
