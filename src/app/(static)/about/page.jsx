import HowItWorks from "@/app/components/About/HowItWorks/HowItWorks";
import OurAchievements from "@/app/components/About/OurAchievements/OurAchievements";
import OurJourney from "@/app/components/About/OurJourney/OurJourney";
import OurTeam from "@/app/components/About/OurTeam/OurTeam";
import OurValues from "@/app/components/About/OurValues/OurValues";
import CTA from "@/app/components/CTA/CTA";
import OurClients from "@/app/components/About/OurClients/OurClients";
import React from "react";

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
