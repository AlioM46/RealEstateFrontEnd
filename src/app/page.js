import React from "react";
import CTA from "./components/CTA/CTA";
import Faq from "./components/Faq/Faq";
import Goal from "./components/Goal/Goal";
import Hero from "./components/HomePage/Hero/Hero";
import OurClients from "./components/HomePage/Testimonials/Testimonials";
import PropertiesFeatures from "./components/PropertiesFeatures/PropertiesFeatures";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goal />
      <PropertiesFeatures />
      <OurClients />
      <Faq />
      <CTA />
    </main>
  );
}
