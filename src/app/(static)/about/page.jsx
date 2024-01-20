import HowItWorks from "@/app/components/About/HowItWorks/HowItWorks";
import OurAchievements from "@/app/components/About/OurAchievements/OurAchievements";
import OurJourney from "@/app/components/About/OurJourney/OurJourney";
import OurTeam from "@/app/components/About/OurTeam/OurTeam";
import OurValues from "@/app/components/About/OurValues/OurValues";
import CTA from "@/app/components/CTA/CTA";
import OurClients from "@/app/components/About/OurClients/OurClients";
import React from "react";

export const metadata = {
  title: "Estatein Real Estate | About Us",
  description: "Buy Your Dream Home",
};

const AboutPage = () => {
  return (
    <main>
      <OurJourney />
      <OurValues />
      <OurAchievements />
      <HowItWorks />
      <OurTeam />
      <OurClients />
      <CTA />
    </main>
  );
};

export default AboutPage;
