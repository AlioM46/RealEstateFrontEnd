import React from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import "./ourAchievements.css";

const cardsInfo = [
  {
    title: "3+ Years of Excellence",
    text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];

const OurAchievements = () => {
  return (
    <div className="ourAchievements">
      <div className="ourAchievements-content container container-gap">
        <HeadingTitle
          text={
            "Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary."
          }
          title={"Our Achievements"}
        />

        <div className="ourAchievements-cards">
          {cardsInfo.map((item, idx) => {
            return (
              <div key={idx} className="ourAchievements-card">
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default OurAchievements;
