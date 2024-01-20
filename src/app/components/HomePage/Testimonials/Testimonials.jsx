"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import { SecondaryButton } from "../../Button/Button";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import SlideButtons from "../../SlideButtons/SlideButtons";
import "./ourClients.css";
import Image from "next/image";

const OurClients = () => {
  const mockData = {
    title: "Efficient And Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    location: "US, Florida",
    name: "Wade Warren",
    profileImage: `https://s3-alpha-sig.figma.com/img/1dda/9e28/6768bcc08f8c496bce3bb27566805e08?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E2Tu~rcL~6hFefirXdqUd2Yu5YXVCAN9631MT85z65flTQO5MmI2CpHdOXFN6pW9sVs27DegpMr48W4yX7U86Q~Sqk-hIP1ejLJLb14BXRIoNj-4YKyasdMNzuwIoy2ndfa1Kj2Z9mdRoRVaH46J-iMWAF8ZLbXHSSNFRZ-5vZ9XXNM9tcstKFb9P3nVaOA-3KuhjjN7S8Lkg-ZH2jf4XLFBkJt0TV5cHifFbaO0GTBvrimqARahBqY~bK3acJkdamupdYdXTBFown9TitIS~5-PKLadZbXFc8xCeKELnU8vbwDZY8Ay6qOfsgUZjM7JBP~2vs5mhSCowVhIFm6rkw__`,
  };

  const [currentWidth, setCurrentWidth] = useState(0);
  const [maxWidth, setMaxWidth] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);

  //

  const outer = useRef();
  const inner = useRef();
  const card = useRef();

  //

  console.log(currentWidth);

  useEffect(() => {
    setMaxWidth(inner.current.scrollWidth - inner.current.offsetWidth);
    setCardWidth(card.current.clientWidth);
  }, []);

  const specialStyle = {
    transform: `translateX(-${currentWidth}px)`,
  };

  return (
    <div className="ourClients ">
      <div className="ourClients-content container container-gap ">
        <div className="ourClients-heading ">
          <HeadingTitle
            title={"What Our Clients Say"}
            text={
              "Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs."
            }
          />
          <SecondaryButton>View All Testimonials</SecondaryButton>
        </div>

        {/*  */}

        <div className="ourClients-info">
          {/*  */}
          <div className="ourClients-outer" ref={outer}>
            <div className="ourClients-inner" style={specialStyle} ref={inner}>
              {Array(10)
                .fill(mockData)
                .map((item, idx) => {
                  return (
                    <div key={idx} className="ourClients-card" ref={card}>
                      <div className="card-stars">
                        {Array(5)
                          .fill("")
                          .map((item, idxx) => {
                            return (
                              <h4 key={idxx}>
                                <FaStar />
                              </h4>
                            );
                          })}
                      </div>
                      <div className="card-text">
                        <h3>{item.title}</h3>
                        <h4>{item.text}</h4>
                      </div>
                      {/*  */}
                      <div className="card-info">
                        <Image src={item.profileImage} alt={item.title} />
                        <div>
                          <h4>{item.name}</h4>
                          <p>{item.location}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}{" "}
            </div>
          </div>

          {/*  */}
        </div>

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

export default OurClients;
