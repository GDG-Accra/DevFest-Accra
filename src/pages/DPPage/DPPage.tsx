import React from "react";
import BeFirst from "../../Components/BeFirst/BeFirst";
import FAQSection from "../../Components/FAQSection/FAQSection";
import Footer from "../../Components/Footer/Footer";
import DPBanner from "./DPBanner";
import DPForm from "./DPForm";

const DPPage: React.FC = () => {
  return (
    <div>
      <DPBanner />
      <DPForm />
      <BeFirst />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default DPPage;