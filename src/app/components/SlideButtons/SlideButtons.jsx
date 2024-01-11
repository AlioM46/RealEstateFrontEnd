"use client";
import React from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import "./SlideButtons.css";
const SlideButtons = ({setter, maxWidth, cardWidth, currentWidth}) => {
  const increase = () => {
    if (currentWidth + 100 < maxWidth) {
      setter((prev) => prev + cardWidth + 30);
    }
  };

  const decrease = () => {
    if (currentWidth >= 0) {
      setter((prev) => prev - cardWidth - 30);
    } else if (currentWidth <= 0) {
      setter(0);
    }
  };

  return (
    <div>
      <div className="slide-buttons">
        <h3 onClick={decrease} className={`${currentWidth == 0 && "special"}`}>
          <FaArrowLeft />
        </h3>
        <h3
          onClick={increase}
          className={`${currentWidth >= maxWidth && "special"}`}
        >
          <FaArrowRight />
        </h3>
      </div>
    </div>
  );
};

export default SlideButtons;
