import React from "react";
import CTA from "./components/CTA/CTA";
import Faq from "./components/Faq/Faq";
import Goal from "./components/Goal/Goal";
import Header from "./components/Header/Header";
import OurClients from "./components/HomePage/OurClients/OurClients";
import PropertiesFeatures from "./components/PropertiesFeatures/PropertiesFeatures";

export default function Home() {
  return (
    <div>
      <Header />
      <Goal />
      <PropertiesFeatures />
      <OurClients />
      <Faq />
      <CTA />
    </div>
  );
}
