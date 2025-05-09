import React from "react";

import GDGLogo from "../../assets/images/Partners/logos/gdg.svg";
import ATULibraryLogo from "../../assets/images/Partners/logos/atu-library.svg";
import GamersHiveLogo from "../../assets/images/Partners/logos/gamers-hive.svg";
import InfobipLogo from "../../assets/images/Partners/logos/infobib.svg";
import HashLogo from "../../assets/images/Partners/logos/hash.svg";
import SlashLogo from "../../assets/images/Partners/logos/slash.svg";


const Partners: React.FC = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">

      <h2 className="text-2xl text-gray-500 font-medium uppercase mb-2"> {/* Increased font size */}
        Partners
      </h2>
     
        <div className="relative max-w-5xl mx-auto mb-4">
          <img
            src={HashLogo}
            alt="Hash Logo"
            className="absolute -left-32 top-[40%] -translate-y-1/2 h-24 sm:h-22"
           
          />

          <h1 className="text-4xl font-bold text-center">
            Powered by the Ones Who Believe <br /> — Our Partners and Sponsors.
          </h1>
        </div>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10"> {/* Increased font size */}
        DevFest Accra 2024 set the stage—but in 2025, we’re turning it all the
        way up, thanks to their incredible support.
      </p>


      <section className="py-16 px-4 bg-white text-center">
 
  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-items-center mb-10">
    <img src={GDGLogo} alt="GDG" className="h-48" />
    <img src={ATULibraryLogo} alt="ATU Library" className="h-48" />
    <img src={GamersHiveLogo} alt="Gamers Hive" className="h-48" />
  </div>

  <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center">
    <img src={InfobipLogo} alt="Infobip" className="h-48" />
    <img src={GDGLogo} alt="GDG Duplicate" className="h-48" />
  </div>
</section>
<div className="w-full flex justify-end mt-[-130px]">
          <img src={SlashLogo} alt="Slash Logo" className="h-24 sm:h-22 m-0" />
        </div>


 

    </section>
  );
};

export default Partners;




