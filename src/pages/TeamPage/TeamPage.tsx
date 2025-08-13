import { BeFirst } from "../../Components/BeFirst/BeFirst";
import FAQSection from "../../Components/FAQSection/FAQSection";
import Footer from "../../Components/Footer/Footer";
import Team from "./Team";
import codeLeft from "../../assets/images/TeamImages/codeLeft.svg";
import codeRight from "../../assets/images/TeamImages/codeRight.svg";

const TeamPage = () => {
  return (
    <div>
      <Team />
      <div className="relative overflow-hidden">
        <img
          src={codeLeft}
          alt=""
          className="absolute left-2  lg:left-10 top-[10%] z-10 h-[5%]  lg:h-[10%] w-auto"
        />
        <div className="relative z-20 mt-10">
          <FAQSection />
        </div>
        <img
          src={codeRight}
          alt=""
          className="absolute right-2  lg:right-10 bottom-[10%] z-10 h-[5%] lg:h-[10%] w-auto"
        />
      </div>
      <BeFirst />
      <Footer />
    </div>
  );
};

export default TeamPage;
