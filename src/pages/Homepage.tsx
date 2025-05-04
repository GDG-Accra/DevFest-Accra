import React from "react";
import SpeakersSection from '../Components/SpeakersSection/SpeakersSection'
import { AboutSection } from '../Components/AboutSection/AboutSection'
import ThrowbackSection from '../Components/ThrowbackSection/ThrowbackSection'
import { BeFirst } from '../Components/BeFirst/BeFirst'
import FAQSection from "../Components/FAQSection/FAQSection";

const Homepage = () => {
  return (
    <div>
       <AboutSection />
       <ThrowbackSection/>
       <SpeakersSection/>
       <BeFirst />
      <FAQSection />
    </div>
  )
}

export default Homepage;
