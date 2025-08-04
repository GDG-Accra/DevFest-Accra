import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import DP1 from "../../assets/images/dp/dp1.png";
import DP2 from "../../assets/images/dp/dp2.png";
import DP3 from "../../assets/images/dp/dp3.png";
import DP4 from "../../assets/images/dp/dp4.png";
import DP5 from "../../assets/images/dp/dp5.png";
import DP6 from "../../assets/images/dp/dp6.png";
import DP7 from "../../assets/images/dp/dp7.png";

const DPBanner: React.FC = () => {
  return (
    <div className='relative min-h-screen overflow-hidden bg-gray-100'>
      {/* Navigation - Fixed positioning with higher z-index */}
      <div className='relative z-50'>
        <Navbar />
      </div>

      {/* Background Image - Centered with max width */}
      <div className='absolute inset-0 z-0 flex justify-center'>
        <img
          src={BGImage}
          alt='Background'
          className='object-cover w-full h-full max-w-4xl'
        />
        {/* Optional subtle overlay for better text readability */}
        <div className='absolute inset-0 bg-white/20'></div>
      </div>

      {/* Hero Section */}
      <div className='relative z-10'>
        {/* Content Overlay */}
        <div className='flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-8 pt-20 sm:pt-24 md:pt-28 lg:pt-10 pb-8 sm:pb-12 md:pb-16 min-h-[70vh] sm:min-h-[75vh] md:min-h-[70vh] lg:min-h-[80vh]'>
          <p className='max-w-xs mb-3 text-base font-medium tracking-wide text-gray-800 sm:mb-4 md:mb-5 sm:text-lg md:text-2xl lg:text-xl sm:max-w-sm md:max-w-2xl lg:max-w-none drop-shadow-sm'>
            Let everyone know you're coming!
          </p>
          <h1 className='max-w-xs mb-6 text-5xl font-black leading-tight text-black sm:text-3xl md:text-8xl lg:text-6xl xl:text-7xl sm:mb-8 md:mb-10 sm:max-w-md md:max-w-5xl lg:max-w-6xl drop-shadow-sm'>
            Create your custom DevFest display photo
          </h1>
          <a href="#dp-container" className='cursor-pointer px-6 py-3 text-base font-bold text-white transition-all duration-300 transform bg-black shadow-lg sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-xl sm:text-lg md:text-xl hover:bg-gray-800 hover:scale-105 hover:shadow-xl active:scale-95'>
            Time To Get Cooking!
          </a>
        </div>

        {/* Floating Photo Cutouts - Large Sizes */}
        <div className='relative md:w-full max-w-6xl md:h-[500px] h-[400px] mx-auto'>
          {/* Large Photo 1 */}
          <div className='absolute md:top-20 md:left-24 -top-20 transform -rotate-12 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52  md:w-88 md:h-88 overflow-hidden'>
              <img
                src={DP1}
                alt='DevFest participant'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:w-12 md:h-12 w-5 h-5 bg-yellow-400 rounded-lg animate-bounce'></div>
          </div>

          {/* Medium Photo 2 */}
          <div className='absolute top-5 left-1/2 transform translate-x-8 rotate-15 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52  md:w-88 md:h-88 overflow-hidden'>
              <img
                src={DP2}
                alt='DevFest participant'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 md:w-12 md:h-12 w-5 h-5 bg-red-400 rounded-lg animate-bounce animation-delay-[0.2s]'></div>
          </div>

          {/* Large Photo 3 */}
          <div className='absolute top-5 md:bottom-10 lg:top-5 right-32 lg:right-32 md:right-0 transform -rotate-8 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52  md:w-88 md:h-88 overflow-hidden'>
              <img
                src={DP3}
                alt='DevFest participant'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -top-4 -right-4 md:w-12 md:h-12 w-5 h-5 bg-indigo-400 rounded-full animate-bounce animation-delay-[0.4s]'></div>
          </div>

          {/* Medium Photo 4 */}
          <div className='absolute md:-bottom-20 bottom-0 left-56 md:left-30 transform rotate-20 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52  md:w-88 md:h-88 overflow-hidden'>
              <img
                src={DP4}
                alt='DevFest participant'
                className='w-full h-full object-contain'
              />
            </div>
            <div className='absolute -top-3 -right-3 md:w-12 md:h-12 w-5 h-5 bg-blue-400 rounded-lg animate-bounce animation-delay-[0.6s]'></div>
          </div>

          {/* Extra Large Photo 5 - Hero */}
          <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 -rotate-6 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52 md:w-80 md:h-80 overflow-hidden'>
              <img
                src={DP5}
                alt='DevFest participant'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -top-5 -right-5 md:w-12 md:h-12 w-5 h-5 bg-green-400 rounded-full animate-bounce animation-delay-[0.8s]'></div>
          </div>

          {/* Large Photo 6 */}
          <div className='absolute top-56 right-24 transform rotate-25 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52 md:w-80 md:h-80 md:w-88 md:h-88 overflow-hidden'>
              <img
                src={DP6}
                alt='DevFest participant'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -top-3 -right-3 md:w-12 md:h-12 w-5 h-5 bg-purple-400 rounded-lg animate-bounce animation-delay-[1s]'></div>
          </div>

          {/* Medium Photo 7 */}
          <div className='absolute bottom-0 right-39 transform -rotate-18 hover:rotate-0 transition-transform duration-300'>
            <div className='relative w-52 h-52 md:w-80 md:h-80 md:w-88 md:h-88 overflow-hidden'>
              <img
                src={DP7}
                alt='DevFest participant'
                className='w-full h-full object-cover'
              />
            </div>
            <div className='absolute -top-2 -right-2 md:w-12 md:h-12 w-5 h-5 bg-orange-400 rounded-full animate-bounce animation-delay-[1.2s]'></div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className='absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce animation-delay-[1s] z-30 drop-shadow-md'></div>
        <div className='absolute top-32 right-16 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-pink-400 animate-pulse animation-delay-[2s] z-30 drop-shadow-md'></div>
        <div className='absolute bottom-32 left-8 w-6 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-[500ms] z-30 drop-shadow-md'></div>
        <div className='absolute bottom-40 right-12 w-4 h-4 bg-green-400 transform rotate-45 animate-spin animation-duration-[6s] z-30 drop-shadow-md'></div>
      </div>
    </div>
  );
};

export default DPBanner;
