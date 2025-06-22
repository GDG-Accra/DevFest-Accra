import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import Photo1 from "../../assets/images/Speakers/OkaiAbena.svg";

const DPBanner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden relative">
      {/* Navigation - Fixed positioning with higher z-index */}
      <div className="relative z-50">
        <Navbar/>
      </div>

      {/* Background Image - Centered with max width */}
      <div className='absolute inset-0 z-0 flex justify-center'>
        <img
          src={BGImage}
          alt='Background'
          className='max-w-4xl w-full h-full object-cover'
        />
        {/* Optional subtle overlay for better text readability */}
        <div className='absolute inset-0 bg-white/20'></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        {/* Content Overlay */}
        <div className="flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 min-h-[70vh] sm:min-h-[75vh] md:min-h-[70vh] lg:min-h-[80vh]">
          <p className="text-gray-800 mb-3 sm:mb-4 md:mb-5 text-base sm:text-lg md:text-2xl lg:text-xl font-medium tracking-wide max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-none drop-shadow-sm">
            Let everyone know you're coming!
          </p>
          <h1 className="text-5xl sm:text-3xl md:text-8xl lg:text-6xl xl:text-7xl font-black text-black mb-6 sm:mb-8 md:mb-10 leading-tight max-w-xs sm:max-w-md md:max-w-5xl lg:max-w-6xl drop-shadow-sm">
            Create your custom DevFest display photo
          </h1>
          <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl text-base sm:text-lg md:text-xl font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
            Time To Get Cooking!
          </button>
        </div>

        {/* Floating Photo Cutouts */}
       <div className="relative z-20">
  <div className="flex justify-center items-end space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-12 flex-wrap">
    {/* Photo 1 - Rounded Square */}
    <div className="relative transform hover:scale-110 transition-transform duration-300">
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 bg-gray-300 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border-3 sm:border-4 md:border-5 lg:border-6 border-yellow-400 rotate-3">
        {/* Photo placeholder - replace with actual image */}
        <img 
        src="/path/to/your/photo5.jpg" 
          alt="DevFest participant" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-yellow-400 rounded-full animate-bounce animation-delay-[0s]"></div>
    </div>

    {/* Photo 2 - Circle */}
    <div className="relative transform hover:scale-110 transition-transform duration-300">
      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-36 lg:h-36 xl:w-40 xl:h-40 bg-gray-300 rounded-full overflow-hidden shadow-lg border-3 sm:border-4 md:border-5 lg:border-6 border-pink-400 -rotate-2">
        {/* Photo placeholder - replace with actual image */}
        <img 
         src="/path/to/your/photo1.jpg" 
          alt="DevFest participant" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-0 h-0 border-l-4 border-r-4 border-b-6 sm:border-l-5 sm:border-r-5 sm:border-b-8 md:border-l-6 md:border-r-6 md:border-b-10 border-l-transparent border-r-transparent border-b-green-400 animate-pulse"></div>
    </div>

    {/* Photo 3 - Rounded Rectangle (Portrait) */}
    <div className="relative transform hover:scale-110 transition-transform duration-300">
      <div className="w-20 h-28 sm:w-24 sm:h-32 md:w-32 md:h-40 lg:w-32 lg:h-40 xl:w-36 xl:h-44 bg-gray-300 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border-3 sm:border-4 md:border-5 lg:border-6 border-blue-400 rotate-1">
        {/* Photo placeholder - replace with actual image */}
        <img 
          src="/path/to/your/photo3.jpg" 
          alt="DevFest participant" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-8 h-2 sm:w-10 sm:h-2.5 md:w-12 md:h-3 lg:w-14 lg:h-3.5 bg-red-400 rounded-full animate-pulse animation-delay-[1s]"></div>
    </div>

    {/* Photo 4 - Squircle (Super Rounded Square) */}
    <div className="relative transform hover:scale-110 transition-transform duration-300">
      <div className="w-22 h-22 sm:w-26 sm:h-26 md:w-34 md:h-34 lg:w-34 lg:h-34 xl:w-38 xl:h-38 bg-gray-300 overflow-hidden shadow-lg border-3 sm:border-4 md:border-5 lg:border-6 border-green-400 -rotate-3"
           style={{borderRadius: '30%'}}>
        {/* Photo placeholder - replace with actual image */}
        <img 
          src="/path/to/your/photo4.jpg" 
          alt="DevFest participant" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-0 h-0 border-t-6 border-b-6 border-r-6 sm:border-t-7 sm:border-b-7 sm:border-r-7 md:border-t-8 md:border-b-8 md:border-r-8 border-t-transparent border-b-transparent border-r-purple-400 animate-bounce animation-delay-[500ms]"></div>
    </div>

    {/* Photo 5 - Rounded Rectangle (Landscape) */}
    <div className="relative transform hover:scale-110 transition-transform duration-300">
      <div className="w-28 h-20 sm:w-32 sm:h-24 md:w-40 md:h-32 lg:w-40 lg:h-32 xl:w-44 xl:h-36 bg-gray-300 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border-3 sm:border-4 md:border-5 lg:border-6 border-purple-400 rotate-2">
        {/* Photo placeholder - replace with actual image */}
        <img 
          src="/path/to/your/photo5.jpg" 
          alt="DevFest participant" 
          className="w-full h-full object-cover grayscale"
        />
      </div>
      <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 bg-orange-400 transform rotate-45 animate-spin animation-duration-[4s]"></div>
    </div>
  </div>
</div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce animation-delay-[1s] z-30 drop-shadow-md"></div>
        <div className="absolute top-32 right-16 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-pink-400 animate-pulse animation-delay-[2s] z-30 drop-shadow-md"></div>
        <div className="absolute bottom-32 left-8 w-6 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-[500ms] z-30 drop-shadow-md"></div>
        <div className="absolute bottom-40 right-12 w-4 h-4 bg-green-400 transform rotate-45 animate-spin animation-duration-[6s] z-30 drop-shadow-md"></div>
      </div>
    </div>
  );
};

export default DPBanner;