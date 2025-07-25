// Centralized asset imports - using absolute paths from project root
import AboutImage from "/src/assets/images/About/AboutImage.svg";
import BefirstImage from "/src/assets/images/BeFirst/BeImage.svg";
import DPImage from "/src/assets/images/DP/DPImage.png";
import Location from "/src/assets/images/EventDetails/Location.png";
import Calendar from "/src/assets/images/EventDetails/Calendar.png";
import faqLinkGif from "/src/assets/images/FAQs/link.gif";
import bgImage from "/src/assets/images/LandingPageImage/bgImage.svg";
import shape from "/src/assets/images/LandingPageImage/shape.svg";

// Logos
import DF25AccraPNG from "/src/assets/images/Logos/_DF25-Accra.png";
import DF25AccraJPG from "/src/assets/images/Logos/_DF25-Accra.jpg";
import DF25LogoLockupYear from "/src/assets/images/Logos/DF25-Logo-Lockup-year.png";
import DF25LogoLockup from "/src/assets/images/Logos/DF25-Logo-Lockup.png";
import DFLogoAccra from "/src/assets/images/Logos/DFLogo-Accra.svg";
import DFShapeLogo from "/src/assets/images/Logos/DFShapeLogo.svg";
import GDGLogo from "/src/assets/images/Logos/GDGLogo.png";

// Partners
import gdgLogo from "/src/assets/images/Partners/logos/gdg.svg";
import atuLibraryLogo from "/src/assets/images/Partners/logos/atu-library.svg";
import gamersHiveLogo from "/src/assets/images/Partners/logos/gamers-hive.svg";
import infobibLogo from "/src/assets/images/Partners/logos/infobib.svg";
import hashLogo from "/src/assets/images/Partners/logos/hash.svg";
import slashLogo from "/src/assets/images/Partners/logos/slash.svg";
import kraadoLogo from "/src/assets/images/Partners/logos/kraado.svg";
import mestLogo from "/src/assets/images/Partners/logos/mest.svg";

// Speakers
import ShadrackInusahImage from "/src/assets/images/Speakers/ShadrackInusah.svg";
import OkaiAbenaImage from "/src/assets/images/Speakers/OkaiAbena.svg";
import SosuAlfredImage from "/src/assets/images/Speakers/SosuAlfred.svg";
import ShadrackOdameteyImage from "/src/assets/images/Speakers/ShadrackOdametey.svg";
import speakersShape from "/src/assets/images/Speakers/shape.svg";

// Team Images
import codeLeft from "/src/assets/images/TeamImages/codeLeft.svg";
import codeRight from "/src/assets/images/TeamImages/codeRight.svg";
import TeamBG from "/src/assets/images/TeamImages/TeamBG.png";
import TeamBGWebp from "/src/assets/images/TeamImages/TeamBG.webp";

// Throwback
import throwbackImage from "/src/assets/images/Throwback/throwbackImage.svg";
import throwbackImageOne from "/src/assets/images/Throwback/throwbackImageone.jpg";
import throwbackImageTwo from "/src/assets/images/Throwback/throwbackImagetwo.jpg";
import throwbackImageThree from "/src/assets/images/Throwback/throwbackImagethree.jpg";
import throwbackImageFour from "/src/assets/images/Throwback/throwbackImagefour.jpg";
import throwbackImageFive from "/src/assets/images/Throwback/throwbackImagefive.png";

// DP Template
import DPTemplateShape from "/src/assets/DPTemplate/shape.svg";
import DPTemplateSlash from "/src/assets/DPTemplate/slash.svg";
import DPTemplateLogo from "/src/assets/DPTemplate/DFShapeLogo.svg";

export const assets = {
  about: {
    aboutImage: AboutImage,
  },
  beFirst: {
    beImage: BefirstImage,
  },
  dp: {
    dpImage: DPImage,
  },
  eventDetails: {
    location: Location,
    calendar: Calendar,
  },
  faqs: {
    linkGif: faqLinkGif,
  },
  gifs: {
    faqLinkGif: faqLinkGif,
  },
  landingPage: {
    bgImage: bgImage,
    shape: shape,
  },
  logos: {
    df25AccraPNG: DF25AccraPNG,
    df25AccraJPG: DF25AccraJPG,
    df25LogoLockupYear: DF25LogoLockupYear,
    df25LogoLockup: DF25LogoLockup,
    dfLogoAccra: DFLogoAccra,
    dfShapeLogo: DFShapeLogo,
    gdgLogo: GDGLogo,
    shape: DPTemplateShape,
    slash: DPTemplateSlash,
  },
  partners: {
    gdg: gdgLogo,
    atuLibrary: atuLibraryLogo,
    gamersHive: gamersHiveLogo,
    infobib: infobibLogo,
    hash: hashLogo,
    slash: slashLogo,
    kraado: kraadoLogo,
    mest: mestLogo,
  },
  speakers: {
    shadrackInusah: ShadrackInusahImage,
    okaiAbena: OkaiAbenaImage,
    sosuAlfred: SosuAlfredImage,
    shadrackOdametey: ShadrackOdameteyImage,
    shape: speakersShape,
  },
  team: {
    codeLeft: codeLeft,
    codeRight: codeRight,
    teamBG: TeamBG,
    teamBGWebp: TeamBGWebp,
  },
  throwback: {
    throwbackImage: throwbackImage,
    throwbackImageOne: throwbackImageOne,
    throwbackImageTwo: throwbackImageTwo,
    throwbackImageThree: throwbackImageThree,
    throwbackImageFour: throwbackImageFour,
    throwbackImageFive: throwbackImageFive,
  },
  dpTemplate: {
    shape: DPTemplateShape,
    slash: DPTemplateSlash,
    logo: DPTemplateLogo,
  },
};
