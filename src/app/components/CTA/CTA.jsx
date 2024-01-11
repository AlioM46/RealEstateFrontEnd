import React from "react";
import {PrimaryButton} from "../Button/Button";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import "./cta.css";

const CTA = () => {
  return (
    <div className="AdditionalParent section-margin">
      <div className="cta ">
        <div className="cta-content container ">
          <div className="heading">
            <h1>Start Your Real Estate Journey Today</h1>
            <p>
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <PrimaryButton>Explore Properties</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CTA;
