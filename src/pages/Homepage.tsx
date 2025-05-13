import React from "react";
import SpeakersSection from "../Components/SpeakersSection/SpeakersSection";
import { AboutSection } from "../Components/AboutSection/AboutSection";
import ThrowbackSection from "../Components/ThrowbackSection/ThrowbackSection";
import { BeFirst } from "../Components/BeFirst/BeFirst";
import DevFestLandingPage from "./DevFestLandingPage/DevFestLandingPage";
import FAQSection from "../Components/FAQSection/FAQSection";
import EventDetails from "../Components/EventDetails/EventDetails";
import PartnersSection from "../components/PartnersSection.tsx/Partner";
import DPGenerator from "../Components/DPGenerator/DPGenerator";


const Homepage = () => {
  return (
    <div>
      <DevFestLandingPage />
      <EventDetails />
      <AboutSection />
      <ThrowbackSection />
      <SpeakersSection />
      <PartnersSection/>
      <FAQSection />
        <BeFirst />
        <DPGenerator/>
     
    </div>
  );
};

export default Homepage;
