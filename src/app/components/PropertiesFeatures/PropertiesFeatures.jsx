"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaBed, FaChevronCircleRight, FaShower } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import Data from "../../../data/mock.json";
import { PrimaryButton, SecondaryButton } from "../Button/Button";
import HeadingTitle from "../HeadingTitle/HeadingTitle";
import SlideButtons from "../SlideButtons/SlideButtons";
import "./propertiesFeatures.css";
import Image from "next/image";

const PropertiesFeatures = () => {
  const [currentWidth, setCurrentWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const outerRef = useRef();
  const innerRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    setMaxWidth(innerRef.current.scrollWidth - outerRef.current.offsetWidth);
    setCardWidth(cardRef.current.clientWidth);
  }, []);

  const specialStyle = {
    transform: `translateX(-${currentWidth}px)`,
  };

  return (
    <div className="properties">
      <div className="properties-content container container-gap">
        <div className="properties-content-heading">
          <HeadingTitle
            title={"Properties Features"}
            text={`Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.`}
          />
          <SecondaryButton>View All Properties</SecondaryButton>
        </div>
        {/*  */}

        <div className="properties-outer" ref={outerRef}>
          <div className="properties-inner" style={specialStyle} ref={innerRef}>
            {Data.map((item, idx) => {
              let desc;

              if (item.description?.length > 80) {
                desc = (
                  <p key={idx + 12}>
                    {item.description.slice(0, 80)}...{" "}
                    <Link href={"/"}>Read More</Link>
                  </p>
                );
              } else {
                <p key={idx + 11}>
                  {item.description.slice(0, 80)}...{" "}
                  <Link href={"/"}>Read More</Link>
                </p>;
              }

              return (
                <div key={idx} className="properties-card" ref={cardRef}>
                  <div className="properties-img">
                    <Image
                      src={
                        "https://s3-alpha-sig.figma.com/img/a2b4/e026/0c692d688fb8fd238642558f0aee6697?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jfWAVSxEeJ6Ldep8TEI2Fj09bS8wiJ08JoG1OYGSrwzc6~xd7Pw3MZYtVqSfVGs7vZoimgMNaCGqO1xULB4d6RPD5qjAzn17NENKtTS4k2y92QkNJtwoG0AoPgBQSNZy5xRG-8jrOmGEz5nhrqRGjCK8eg4AN5L3ftJ-bSn3UTR5FV0qUZOS3bLtL0PUT7mOqgC8O56x0-Y-E54lMj7E6nJfKUWwHwmSDnwyVpk7uHfqmfgM2ujyMNVdQU7H8rRUfPe~NsRS43FCv01BMVplpUbmse69ykHZkfjE91ZhOREEsNyJVknJpQaBNcjlr6OZXiQJnSfF9-C7-y-gKCZM4A__"
                      }
                      alt="Properties Img"
                    />
                  </div>

                  <div className="properties-info">
                    <div className="properties-info-title">
                      <h2>{item.title}</h2>
                      <p>{item.description}</p>
                    </div>
                    {/*  */}
                    <div className="properties-info-features">
                      <h4>
                        <p>{item.bedrooms}-Bedrooms</p>
                        <FaBed />
                      </h4>
                      <h4>
                        <p>{item.bathrooms}-Bathrooms</p>
                        <FaShower />
                      </h4>
                      <h4>
                        <p>{item.sqft}-SqFT</p>
                        <FaHouseChimney />
                      </h4>
                    </div>

                    {/*  */}

                    <div className="properties-info-cta">
                      <h2>${item.price}</h2>
                      <PrimaryButton>View Property Details</PrimaryButton>
                    </div>
                  </div>
                </div>
              );
            })}
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

export default PropertiesFeatures;
