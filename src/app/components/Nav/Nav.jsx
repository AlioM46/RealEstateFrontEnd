"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import logo from "../../assets/images/logo.png";
import "./nav.css";

const Nav = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setToggle("");
    }, 2000);
  }, [pathname]);

  return (
    <div className="nav">
      <div className="nav-content container">
        <Link className="nav-logo" href={"/"}>
          <Image src={logo} />
          <h2>Estatein</h2>
        </Link>
        {/*  */}

        <div className={`nav-links ${toggle && "activeMenu"} `}>
          <ul>
            <li className={pathname == "/" && "SubActiveLink"}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={pathname == "/about" && "SubActiveLink"}>
              <Link href={"/about"}>About Us</Link>
            </li>
            <li className={pathname == "/properties" && "SubActiveLink"}>
              <Link href={"/properties"}>Properties</Link>
            </li>
            <li className={pathname == "/services" && "SubActiveLink"}>
              <Link href={"/services"}>Services</Link>
            </li>

            <div className="nav-links-contact">
              <Link href={"/contact"} className="activeLink">
                Contact Us
              </Link>
            </div>
          </ul>
        </div>

        <div className="nav-contact">
          <Link href={"/contact"} className="activeLink">
            Contact Us
          </Link>
        </div>

        <div onClick={() => setToggle(true)} className="openNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>

        <div
          onClick={() => setToggle(false)}
          className={`closeNav ${toggle && "activeClose"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
