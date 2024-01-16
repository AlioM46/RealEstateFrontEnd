import Image from "next/image";
import React from "react";
import img from "../../assets/images/header.png";
import img2 from "../../assets/images/header2.png";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import "./header.css";

const cardsInfo = [
  { title: "200+", text: "Happy Customers" },
  { title: "10k+", text: "Properties For Clients" },
  { title: "16+", text: "Years of Experience" },
];

const Header = () => {
  return (
    <div className={"header"}>
      <div className={" header-content container"}>
        <div className="header-text">
          <h1>Discover Your Dream Property with Estatein</h1>
          <p>
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>
          <div className="header-text-btns">
            <SecondaryButton>Learn More</SecondaryButton>
            <PrimaryButton>Browser Properties</PrimaryButton>
          </div>
          <div className="header-text-cards">
            {cardsInfo?.map((item) => {
              return (
                <div className="header-text-card">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/*  */}
        <div className="header-img">
          <Image src={img} alt="" />

          <Image src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
