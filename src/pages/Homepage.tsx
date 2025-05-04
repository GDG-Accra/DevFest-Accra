
import SpeakersSection from "../Components/SpeakersSection/SpeakersSection";
import { AboutSection } from "../Components/AboutSection/AboutSection";
import ThrowbackSection from "../Components/ThrowbackSection/ThrowbackSection";
import DevFestLandingPage from "./DevFestLandingPage/DevFestLandingPage";
        import { BeFirst } from '../Components/BeFirst/BeFirst'




const Homepage = () => {
  return (
    <div>
      <DevFestLandingPage />
      <AboutSection />
      <ThrowbackSection />
      <SpeakersSection />
        <BeFirst />
    </div>
  );
};

export default Homepage;
