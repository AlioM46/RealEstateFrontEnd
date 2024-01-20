import React from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import "./howItWorks.css";
const cardsInfo = [
  {
    title: "Discover a World of Possibilities",
    text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,",
  },
  {
    title: "Narrowing Down Your Choices",
    text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    title: "Personalized Guidance",
    text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    title: "See It for Yourself",
    text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    title: "Making Informed Decisions",
    text: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.",
  },
  {
    title: "Getting the Best Deal",
    text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <div className="howItWorks-content container container-gap">
        <HeadingTitle
          title={"Navigating the Estatein Experience"}
          text={
            "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works."
          }
        />

        <div className="howItWorks-cards">
          {cardsInfo.map((item, idx) => {
            return (
              <div key={idx} className="howItWorks-card">
                <span>Step 0{idx + 1}</span>
                <div className="howItWorks-text">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
