import { useEffect } from "react";
import { BeFirst } from "../../Components/BeFirst/BeFirst";
import Footer from "../../Components/Footer/Footer";
import DPBanner from "./DPBanner";
import DPForm from "./DPForm";

const DPPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <DPBanner />
      <DPForm />
      <BeFirst />
      <Footer />
    </div>
  );
};

export default DPPage;