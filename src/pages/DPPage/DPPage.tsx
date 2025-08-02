import { useEffect } from "react";
import { BeFirst } from "../../Components/BeFirst/BeFirst";
import Footer from "../../Components/Footer/Footer";
import DPBanner from "./DPBanner";
import DPForm from "./DPForm";
import { Element } from "react-scroll";

const DPPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dp-page">
      {/* DPBanner Section */}
      <section className="section dp-banner-section">
        <DPBanner />
      </section>

      {/* DPForm Section */}
      <Element name="dp-form-section" className="section dp-form-section">
        <DPForm />
      </Element>

      {/* BeFirst Section */}
      <section className="section be-first-section">
        <BeFirst />
      </section>

      {/* Footer Section */}
      <section className="section footer-section">
        <Footer />
      </section>
    </div>
  );
};

export default DPPage;
