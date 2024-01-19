"use client";

import Link from "next/link";
import { useState } from "react";
import { PrimaryButton } from "../../Button/Button";
import "./contactForm.css";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
const inquiryTypes = [
  "General Inquiry",
  "Technical Support",
  "Product Information",
  "Other",
];

const ContactForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [hear, setHear] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  console.log(toggleMenu);

  const inquiryTypesOptionsRender = inquiryTypes.map((item) => {
    return (
      <li
        onClick={() => {
          setType(item.toLowerCase().replace(" ", "-"));
          setToggleMenu(false);
        }}
      >
        {item}
      </li>
    );
  });

  return (
    <section className="contactForm">
      <div className="contactForm-content container container-gap">
        <HeadingTitle
          title={"Let's Connect"}
          text={
            "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need."
          }
        />

        <form>
          <div className="contactForm-3col">
            <div>
              <label htmlFor="fName">First Name</label>
              <input
                type="text"
                id="fName"
                value={fName}
                placeholder="Enter First Name"
                onChange={(e) => setFName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lName">Last Name</label>
              <input
                type="text"
                id="lName"
                value={fName}
                placeholder="Enter Last Name"
                onChange={(e) => setLName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          {/*  */}

          <div className="contactForm-3col">
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                value={phone}
                placeholder="Enter Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="type">Inquiry Type</label>
              <div className="specialList">
                <div onClick={() => setToggleMenu(toggleMenu ? false : true)}>
                  <p>Select Inquiry Type</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M20.1641 8.25L12.6641 15.75L5.16406 8.25"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <ul className={toggleMenu ? "active" : ""}>
                  {inquiryTypesOptionsRender}
                </ul>
              </div>
            </div>

            {/*  */}
            <div>
              <label htmlFor="hear">How Did You Hear About Us?</label>
              <input
                type="text"
                id="hear"
                value={hear}
                placeholder="How Did You Hear About Us?"
                onChange={(e) => setHear(e.target.value)}
              />
            </div>
          </div>

          {/*  */}

          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              id="message"
              value={message}
              placeholder="Enter your Message here.."
              onChange={(e) => setHear(e.target.value)}
            />
          </div>

          <div>
            <div>
              <input
                type="checkbox"
                value={agree}
                checked={agree}
                onChange={(e) => setAgree(e.target.value)}
              />
              <p>
                I agree with{" "}
                <Link href={"/about"}>Terms of Use and Privacy Policy</Link>
              </p>
            </div>

            <PrimaryButton>Send Your Message</PrimaryButton>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
