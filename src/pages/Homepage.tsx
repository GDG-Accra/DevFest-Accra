import React from "react";
import EventDetails from "../Components/EventDetails/EventDetails";
import AboutSection from "../Components/AboutSection/AboutSection";
import SpeakersSection from "../Components/SpeakersSection/SpeakersSection";
import BeFirst from "../Components/BeFirst/BeFirst";
import ThrowbackSection from "../Components/ThrowbackSection/ThrowbackSection";
import PartnersSection from "../Components/PartnersSection/PartnersSection";
import FAQSection from "../Components/FAQSection/FAQSection";
import Footer from "../Components/Footer/Footer";

const Homepage: React.FC = () => {
  return (
    <div>
      <AboutSection />
      <EventDetails />
      <SpeakersSection />
      <BeFirst />
      <ThrowbackSection />
      <PartnersSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Homepage;