import React from "react";
import SpeakersSection from '../components/SpeakersSection/SpeakersSection'
import { AboutSection } from '../components/AboutSection/AboutSection'
import ThrowbackSection from '../components/ThrowbackSection/ThrowbackSection'
import { BeFirst } from '../components/BeFirst/BeFirst'
import DevFestLandingPage from "./DevFestLandingPage/DevFestLandingPage";
import FAQSection from "../components/FAQSection/FAQSection";
import PartnersSection from "../components/PartnersSection.tsx/Partner";

const Homepage = () => {
  return (
    <div>
      <DevFestLandingPage />
      <AboutSection />
      <ThrowbackSection />
      <SpeakersSection />
      <PartnersSection/>
        <BeFirst />
      <FAQSection />
    </div>
  );
};

export default Homepage;
