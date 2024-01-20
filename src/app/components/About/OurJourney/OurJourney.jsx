import React from "react";

import img from "../../../../../public/images/abouthouse.png";
import Image from "next/image";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import "./ourJourney.css";
const cardsInfo = [
  { title: "200+", text: "Happy Customers" },
  { title: "10k+", text: "Properties For Clients" },
  { title: "16+", text: "Years of Experience" },
];

const OurJourney = () => {
  return (
    <section className="ourJourney">
      <div className="ourJourney-content container section-margin">
        <div className="ourJourney-text container-gap">
          <HeadingTitle
            title={"Our Journey"}
            text={
              "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients."
            }
          />
          <div className="ourJourney-cards">
            {cardsInfo?.map((item, key) => {
              return (
                <div key={key} className="ourJourney-card">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ourJourney-image">
          <Image src={img} alt="Nothing" />
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
