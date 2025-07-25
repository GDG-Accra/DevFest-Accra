// Centralized asset imports - using relative paths from assets.ts location
import AboutImage from "./images/About/AboutImage.svg";
import BefirstImage from "./images/BeFirst/BeImage.svg";
import DPImage from "./images/DP/DPImage.png";
import Location from "./images/EventDetails/Location.png";
import Calendar from "./images/EventDetails/Calendar.png";
import faqLinkGif from "./images/FAQs/link.gif";
import bgImage from "./images/LandingPageImage/bgImage.svg";
import shape from "./images/LandingPageImage/shape.svg";

// Logos
import DF25AccraPNG from "./images/Logos/_DF25-Accra.png";
import DF25AccraJPG from "./images/Logos/_DF25-Accra.jpg";
import DF25LogoLockupYear from "./images/Logos/DF25-Logo-Lockup-year.png";
import DF25LogoLockup from "./images/Logos/DF25-Logo-Lockup.png";
import DFLogoAccra from "./images/Logos/DFLogo-Accra.svg";
import DFShapeLogo from "./images/Logos/DFShapeLogo.svg";
import GDGLogo from "./images/Logos/GDGLogo.png";

// Partners
import gdgLogo from "./images/Partners/logos/gdg.svg";
import atuLibraryLogo from "./images/Partners/logos/atu-library.svg";
import gamersHiveLogo from "./images/Partners/logos/gamers-hive.svg";
import infobibLogo from "./images/Partners/logos/infobib.svg";
import hashLogo from "./images/Partners/logos/hash.svg";
import slashLogo from "./images/Partners/logos/slash.svg";
import kraadoLogo from "./images/Partners/logos/kraado.svg";
import mestLogo from "./images/Partners/logos/mest.svg";

// Speakers
import ShadrackInusahImage from "./images/Speakers/ShadrackInusah.svg";
import OkaiAbenaImage from "./images/Speakers/OkaiAbena.svg";
import SosuAlfredImage from "./images/Speakers/SosuAlfred.svg";
import ShadrackOdameteyImage from "./images/Speakers/ShadrackOdametey.svg";
import speakersShape from "./images/Speakers/shape.svg";

// Team Images
import codeLeft from "./images/TeamImages/codeLeft.svg";
import codeRight from "./images/TeamImages/codeRight.svg";
import TeamBG from "./images/TeamImages/TeamBG.png";
import TeamBGWebp from "./images/TeamImages/TeamBG.webp";

// Throwback
import throwbackImage from "./images/Throwback/throwbackImage.svg";
import throwbackImageOne from "./images/Throwback/throwbackImageone.jpg";
import throwbackImageTwo from "./images/Throwback/throwbackImagetwo.jpg";
import throwbackImageThree from "./images/Throwback/throwbackImagethree.jpg";
import throwbackImageFour from "./images/Throwback/throwbackImagefour.jpg";
import throwbackImageFive from "./images/Throwback/throwbackImagefive.png";

// DP Template
import DPTemplateShape from "./DPTemplate/shape.svg";
import DPTemplateSlash from "./DPTemplate/slash.svg";
import DPTemplateLogo from "./DPTemplate/DFShapeLogo.svg";

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
