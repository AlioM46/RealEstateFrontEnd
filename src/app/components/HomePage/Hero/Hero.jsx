import Image from "next/image";
import React from "react";
import img from "../../../assets/images/header.png";
import img2 from "../../../assets/images/header2.png";
import { PrimaryButton, SecondaryButton } from "../../Button/Button";
import "./hero.css";

const cardsInfo = [
  { title: "200+", text: "Happy Customers" },
  { title: "10k+", text: "Properties For Clients" },
  { title: "16+", text: "Years of Experience" },
];

const Hero = () => {
  return (
    <div className={"hero"}>
      <div className={" hero-content container"}>
        <div className="hero-text">
          <h1>Discover Your Dream Property with Estatein</h1>
          <p>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="hero-text-btns">
            <SecondaryButton>Learn More</SecondaryButton>
            <PrimaryButton>Browser Properties</PrimaryButton>
          </div>
          <div className="hero-text-cards">
            {cardsInfo?.map((item, idx) => {
              return (
                <div key={idx} className="hero-text-card">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className="hero-img">
          <Image src={img} alt="Hero Images" />

          <Image src={img2} alt="Hero Images" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
