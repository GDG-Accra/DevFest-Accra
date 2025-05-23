import SpeakersSection from "../Components/SpeakersSection/SpeakersSection";
import { AboutSection } from "../Components/AboutSection/AboutSection";
import ThrowbackSection from "../Components/ThrowbackSection/ThrowbackSection";
import { BeFirst } from "../Components/BeFirst/BeFirst";
import DevFestLandingPage from "./DevFestLandingPage/DevFestLandingPage";
import FAQSection from "../Components/FAQSection/FAQSection";
import EventDetails from "../Components/EventDetails/EventDetails";
import DPGenerator from "../Components/DPGenerator/DPGenerator";
import Footer from "../Components/Footer/Footer";
import PartnersSection from "../Components/PartnersSection/PartnersSection";

const Homepage = () => {
  return (
    <div>
      <DevFestLandingPage />
      <EventDetails />
      <AboutSection />
      <ThrowbackSection />
      <SpeakersSection />
      <PartnersSection />
      <FAQSection />
      <BeFirst />
      <DPGenerator />
      <Footer />
    </div>
  );
};

export default Homepage;
