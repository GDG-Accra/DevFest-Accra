import React from "react";
import BeFirst from "../../Components/BeFirst/BeFirst";
import FAQSection from "../../Components/FAQSection/FAQSection";
import Footer from "../../Components/Footer/Footer";
import { assets } from "../../assets/assets";
import Speakers from "./Speakers";

const SpeakerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <img
        src={assets.team.codeLeft}
        alt="Code Background Left"
        className="absolute top-10 left-0 w-32 opacity-10"
      />
      <img
        src={assets.team.codeRight}
        alt="Code Background Right"
        className="absolute top-10 right-0 w-32 opacity-10"
      />

      {/* Main Content */}
      <div className="relative z-10">
        <Speakers />
        <FAQSection />
        <BeFirst />
        <Footer />
      </div>
    </div>
  );
};

export default SpeakerPage;
