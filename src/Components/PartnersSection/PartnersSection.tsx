import React from "react";

import GDGLogo from "../../assets/images/Partners/logos/gdg.svg";
import ATULibraryLogo from "../../assets/images/Partners/logos/atu-library.svg";
import GamersHiveLogo from "../../assets/images/Partners/logos/gamers-hive.svg";
import InfobipLogo from "../../assets/images/Partners/logos/infobib.svg";
import MestLogo from "../../assets/images/Partners/logos/mest.svg";
import HashLogo from "../../assets/images/Partners/logos/hash.svg";
import SlashLogo from "../../assets/images/Partners/logos/slash.svg";
import KraadoLogo from "../../assets/images/Partners/logos/kraado.svg";

const PartnersSection: React.FC = () => {
  return (
    <section className='text-center py-16 px-4 bg-white'>
      <h2 className='max-w-xl mx-auto text-gray-700 mb-2 md:mb-4 uppercase'>
        Sponsors | Partners
      </h2>

      <div className='relative max-w-5xl mx-auto mb-4'>
        <img
          src={HashLogo}
          alt='Hash Logo'
          className='absolute md:-left-16 lg:-left-32 top-[40%] -translate-y-1/2
               h-10 lg:h-24 md:ml-20'
        />

        <h1 className='text-4xl lg:text-5xl font-bold  text-center'>
          Powered by the Ones Who Believe
          <br />
          Our Sponsors and Partners.
        </h1>
      </div>

      <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-10'>
        DevFest Accra 2024 set the stage; but in 2025, we're turning it all the
        way up, thanks to their incredible support.
      </p>

      {/* Logos section with responsive grid */}
      <section className='max-w-5xl mx-auto'>
        <div className='grid md:grid-cols-3 grid-cols-2 gap-6'>
          {/* 1 */}
          <div className='flex items-center justify-center'>
            <img
              src={GDGLogo}
              alt='GDG'
              className='max-h-full w-full object-contain'
            />
          </div>
          {/* 2 */}
          <div className='flex items-center justify-center'>
            <img
              src={ATULibraryLogo}
              alt='ATU Library'
              className='max-h-full w-full object-contain'
            />
          </div>
          {/* 3 */}
          <div className='flex items-center justify-center'>
            <img
              src={GamersHiveLogo}
              alt='Gamers Hive'
              className='max-h-full w-full object-contain'
            />
          </div>
          {/* 4 */}
          <div className='flex items-center justify-center'>
            <img
              src={InfobipLogo}
              alt='Infobip'
              className='max-h-full w-full object-contain'
            />
          </div>
          {/* 5 */}
          <div className='flex items-center justify-center'>
            <img
              src={MestLogo}
              alt='Mest'
              className='max-h-full w-full object-contain'
            />
          </div>

          {/* 6 */}
          <div className='flex items-center justify-center'>
            <img
              src={KraadoLogo}
              alt='Kraado'
              className='max-h-full w-full object-contain'
            />
          </div>
        </div>
      </section>

      <div className='lg:w-full  flex justify-end mt-6 '>
        {/* md:mt-[-110px] */}
        <img
          src={SlashLogo}
          alt='Slash Logo'
          className='h-10 md:h-12 lg:h-20 m-0 lg:mr-20'
        />
      </div>
    </section>
  );
};

export default PartnersSection;
