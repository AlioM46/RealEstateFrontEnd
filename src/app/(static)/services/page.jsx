import CTA from "@/app/components/CTA/CTA";
import Goal from "@/app/components/Goal/Goal";
import Header from "@/app/components/Header/Header";
import PropertyValue from "@/app/components/services/PropertyValue/PropertyValue";
import PropertyManagement from "@/app/components/services/propertyManagement/PropertyManagement";
import SmartInvestments from "@/app/components/services/smartInvestments/SmartInvestments";
import React from "react";

export const metadata = {
  title: "Estatein Real Estate | Services",
  description: "Buy Your Dream Home",
};

const Services = () => {
  return (
    <main>
      <Header />
      <Goal />
      <PropertyValue />
      <PropertyManagement />
      <SmartInvestments />
      <CTA />
    </main>
  );
};

export default Services;
