import React from "react";

import googledevs from "../../assets/images/Partners/logos/googledevs.png";
import hash from "../../assets/images/Partners/logos/hash.svg";
import kraado from "../../assets/images/Partners/logos/kraado-logo.png";
import mest from "../../assets/images/Partners/logos/mest.png";
import slash from "../../assets/DPTemplate/slash.svg";
import sprynix from "../../assets/images/Partners/logos/sprynix.png";

const PartnersSection: React.FC = () => {
  return (
    <section className='text-center py-16 px-4 bg-white'>
      <h2 className='max-w-xl mx-auto text-gray-700 mb-2 md:mb-4 uppercase'>
        Sponsors | Partners
      </h2>
      <div className='relative max-w-5xl mx-auto mb-4'>
        <img
          src={hash}
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
              src={googledevs}
              alt='GDG'
              className='max-h-full w-full object-contain'
            />
          </div>
          {/* 2 */}

          <div className='flex items-center justify-center'>
            <img
              src={kraado}
              alt='Kraado'
              className='max-h-full w-full object-contain'
            />
          </div>

          {/* 3 */}
          <div className='flex items-center justify-center'>
            <img
              src={mest}
              alt='Mest'
              className='max-h-full w-full object-contain'
            />
          </div>

           {/* 4 */}
          <div className='flex items-center justify-center'>
            <img
              src={sprynix}
              alt='sprynix'
              className='max-h-full w-full object-contain'
            />
          </div>
        </div>
      </section>

      <div className='lg:w-full  flex justify-end mt-6 '>
        {/* md:mt-[-110px] */}
        <img
          src={slash}
          alt='Slash Logo'
          className='h-10 md:h-12 lg:h-20 m-0 lg:mr-20'
        />
      </div>
    </section>
  );
};

export default PartnersSection;
