"use client";

import React, {useEffect, useRef, useState} from "react";
import {SecondaryButton} from "../Button/Button";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import SlideButtons from "../SlideButtons/SlideButtons";
import "./faq.css";
const Faq = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  const outer = useRef();
  const inner = useRef();
  const card = useRef();

  useEffect(() => {
    setMaxWidth(inner.current.scrollWidth - inner.current.offsetWidth);
    setCardWidth(card.current.clientWidth);
  }, []);


  const specialStyle = {
    transform: `translateX(-${currentWidth}px)`,
  };

  const mockData = {
    question: "How do I search for properties on Estatein?",
    answer:
      "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  };

  return (
    <div className="faq">
      <div className="faq-content container container-gap">
        <div className="faq-heading">
          <HeadingTitle
            title={"Frequently Asked Questions"}
            text={
              "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way."
            }
          />
          <SecondaryButton>Viw All FAQ's</SecondaryButton>
        </div>

        {/*  */}

        <div className="faq-info">
          <div className="faq-outer" ref={outer}>
            <div className="faq-inner" style={specialStyle} ref={inner}>
              {Array(10)
                .fill(mockData)
                .map((item) => {
                  return (
                    <div ref={card} className="faq-card">
                      <h2>{item.question}</h2>
                      <p>{item.answer}</p>
                      <SecondaryButton>Read More</SecondaryButton>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {/*  */}
        <SlideButtons
          setter={setCurrentWidth}
          maxWidth={maxWidth}
          currentWidth={currentWidth}
          cardWidth={cardWidth}
        />
      </div>
    </div>
  );
};

export default Faq;
