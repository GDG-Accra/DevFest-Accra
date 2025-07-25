import React from "react";
import { assets } from "../../assets/assets";

const ThrowbackSection: React.FC = () => {
  return (
    <section className='py-16 px-4 bg-white relative overflow-hidden'>
      {/* Background Shape */}
      <img
        src={assets.speakers.shape}
        alt='Background Shape'
        className='absolute top-0 left-0 w-64 lg:w-96 opacity-10'
      />

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-sm uppercase text-gray-600 mb-4'>Throwback</h2>
          <h1 className='text-4xl lg:text-5xl font-bold mb-8'>
            Relive the Magic of DevFest Accra 2024
          </h1>
        </div>

        {/* Main throwback image */}
        <div className='mb-12'>
          <img
            src={assets.throwback.throwbackImage}
            alt='DevFest Accra 2024 Main Event'
            className='w-full h-auto rounded-lg shadow-lg'
          />
        </div>

        {/* Grid of smaller images */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <img
            src={assets.throwback.throwbackImageTwo}
            alt='DevFest Accra 2024 Moment 2'
            className='w-full h-32 object-cover rounded-lg shadow-md'
          />
          <img
            src={assets.throwback.throwbackImageThree}
            alt='DevFest Accra 2024 Moment 3'
            className='w-full h-32 object-cover rounded-lg shadow-md'
          />
          <img
            src={assets.throwback.throwbackImageFour}
            alt='DevFest Accra 2024 Moment 4'
            className='w-full h-32 object-cover rounded-lg shadow-md'
          />
          <img
            src={assets.throwback.throwbackImageFive}
            alt='DevFest Accra 2024 Moment 5'
            className='w-full h-32 object-cover rounded-lg shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export default ThrowbackSection;
