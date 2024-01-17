"use client";

import React, { useEffect, useRef, useState } from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import Link from "next/link";
import "./ourClients.css";
import { SecondaryButton } from "../../Button/Button";
import SlideButtons from "../../SlideButtons/SlideButtons";
const cardsInfo = [
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    date: "2018",
    title: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    text: "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
];

const OurClients = () => {
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

  const transformStyle = {
    transform: `translateX(-${currentWidth}px)`,
  };

  return (
    <section className="ourClients">
      <div className="ourClients-content container container-gap">
        <HeadingTitle
          title={"Our Valued Clients"}
          text={
            "At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving"
          }
        />

        <div className=" outer" ref={outer}>
          <div className="inner" ref={inner} style={transformStyle}>
            {cardsInfo.map((item) => {
              return (
                <div ref={card} className="ourClients-card">
                  <ul className="ourClients-text">
                    <li>
                      <p>Since {item.date}</p>
                      <h3>{item.title}</h3>
                    </li>
                    <li className="Linkkk">
                      <Link href={"/"}>
                        <SecondaryButton>Visit Website</SecondaryButton>
                      </Link>
                    </li>
                  </ul>

                  {/*  */}
                  <ul>
                    <li>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                        >
                          <path
                            d="M3.75 6.5C3.75 5.25736 4.75736 4.25 6 4.25H8.25C9.49264 4.25 10.5 5.25736 10.5 6.5V8.75C10.5 9.99264 9.49264 11 8.25 11H6C4.75736 11 3.75 9.99264 3.75 8.75V6.5Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.75 16.25C3.75 15.0074 4.75736 14 6 14H8.25C9.49264 14 10.5 15.0074 10.5 16.25V18.5C10.5 19.7426 9.49264 20.75 8.25 20.75H6C4.75736 20.75 3.75 19.7426 3.75 18.5V16.25Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.5 6.5C13.5 5.25736 14.5074 4.25 15.75 4.25H18C19.2426 4.25 20.25 5.25736 20.25 6.5V8.75C20.25 9.99264 19.2426 11 18 11H15.75C14.5074 11 13.5 9.99264 13.5 8.75V6.5Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M13.5 16.25C13.5 15.0074 14.5074 14 15.75 14H18C19.2426 14 20.25 15.0074 20.25 16.25V18.5C20.25 19.7426 19.2426 20.75 18 20.75H15.75C14.5074 20.75 13.5 19.7426 13.5 18.5V16.25Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Domain</span>
                      </div>
                      <p>{item.category}</p>
                    </li>
                    <li>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                        >
                          <path
                            d="M4.5 14L15 2.75L12.75 11H21L10.5 22.25L12.75 14H4.5Z"
                            stroke="#999999"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Category</span>
                      </div>
                      <p>{item.category}</p>
                    </li>
                  </ul>

                  <div className="ourClients-card-review">
                    <p>What They Said😊</p>
                    <h6>{item.text}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <SlideButtons
          setter={setCurrentWidth}
          maxWidth={maxWidth}
          cardWidth={cardWidth}
          currentWidth={currentWidth}
        />
      </div>
    </section>
  );
};

export default OurClients;
