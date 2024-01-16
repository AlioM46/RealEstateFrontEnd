import React from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import {
  AcademicCapIcon,
  StarIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
const cardsInfo = [
  {
    title: "Trust",
    text: "Trust is the cornerstone of every successful real estate transaction.",
    icon: <StarIcon />,
  },
  {
    title: "Excellence",
    text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    icon: <AcademicCapIcon />,
  },
  {
    title: "Client-Centric",
    text: "Your dreams and needs are at the center of our universe. We listen, understand.",
    icon: <UsersIcon />,
  },
  {
    title: "Our Commitment",
    text: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
    icon: <StarIcon />,
  },
];

import "./ourValues.css";

const OurValues = () => {
  return (
    <section className="ourValues section-margin ">
      <div className="ourValues-content container ">
        <div className="ourValues-header">
          <HeadingTitle
            title={"Our Values"}
            text={
              "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
            }
          />
        </div>

        {/*  */}
        <div className="ourValues-cards">
          {cardsInfo.map((item) => {
            return (
              <div className="ourValues-card">
                <div className="ourValues-card-text">
                  <span>{item.icon}</span>

                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurValues;
