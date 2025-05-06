import React from "react";

import GDGLogo from "../../assets/images/Partners/logos/gdg.svg";
import ATULibraryLogo from "../../assets/images/Partners/logos/atu-library.svg";
import GamersHiveLogo from "../../assets/images/Partners/logos/gamers-hive.svg";
import InfobipLogo from "../../assets/images/Partners/logos/infobib.svg";

const Partners: React.FC = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h2 className="text-2xl text-gray-500 font-medium uppercase mb-2"> {/* Increased font size */}
        Partners
      </h2>
      <h1 className="text-4xl font-bold mb-4"> {/* Increased font size */}
        Powered by the Ones Who Believe <br /> — Our Partners and Sponsors.
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-10"> {/* Increased font size */}
        DevFest Accra 2024 set the stage—but in 2025, we’re turning it all the
        way up, thanks to their incredible support.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 mb-10">
            <img src={GDGLogo} alt="GDG" className="h-48" />
            <img src={ATULibraryLogo} alt="ATU Library" className="h-48" />
            <img src={GamersHiveLogo} alt="Gamers Hive" className="h-48" />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8">
            <img src={InfobipLogo} alt="Infobip" className="h-48" />
            <img src={GDGLogo} alt="GDG" className="h-48" />
    </div>


    </section>
  );
};

export default Partners;




