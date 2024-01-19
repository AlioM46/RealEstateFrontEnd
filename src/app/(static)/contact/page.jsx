import CTA from "@/app/components/CTA/CTA";
import Goal from "@/app/components/Goal/Goal";
import Header from "@/app/components/Header/Header";
import ContactForm from "@/app/components/contactUs/ContactForm/ContactForm";
import ContactInfo from "@/app/components/contactUs/ContactInfo/ContactInfo";
import Gallery from "@/app/components/contactUs/Gallery/Gallery";
import OurOffices from "@/app/components/contactUs/OurOffices/OurOffices";
import React from "react";

const Contact = () => {
  return (
    <main>
      <Header />
      <ContactInfo />
      <ContactForm />
      <OurOffices />
      <Gallery />
      <CTA />
    </main>
  );
};

export default Contact;
