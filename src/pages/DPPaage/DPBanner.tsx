import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';

const DPBanner: React.FC = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <Navbar/>

      {/* Hero Section */}
      <div className="relative">
        {/* Multi-color Grid Background */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 h-[70vh] md:h-[80vh]">
          <div className="bg-red-200 animate-pulse animation-delay-[0s] animation-duration-[3s]"></div>
          <div className="bg-green-200 animate-pulse animation-delay-[500ms] animation-duration-[3s]"></div>
          <div className="bg-yellow-200 animate-pulse animation-delay-[1s] animation-duration-[3s]"></div>
          <div className="bg-blue-200 animate-pulse animation-delay-[1500ms] animation-duration-[3s]"></div>
          <div className="bg-pink-200 animate-pulse animation-delay-[2s] animation-duration-[3s]"></div>
          <div className="bg-purple-200 animate-pulse animation-delay-[2500ms] animation-duration-[3s]"></div>
          
          <div className="bg-blue-200 animate-pulse animation-delay-[300ms] animation-duration-[3s]"></div>
          <div className="bg-pink-200 animate-pulse animation-delay-[800ms] animation-duration-[3s]"></div>
          <div className="bg-red-200 animate-pulse animation-delay-[1300ms] animation-duration-[3s]"></div>
          <div className="bg-green-200 animate-pulse animation-delay-[1800ms] animation-duration-[3s]"></div>
          <div className="bg-yellow-200 animate-pulse animation-delay-[2300ms] animation-duration-[3s]"></div>
          <div className="bg-purple-200 animate-pulse animation-delay-[2800ms] animation-duration-[3s]"></div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <p className="text-gray-700 mb-4 text-lg md:text-xl font-medium tracking-wide">
            Let everyone know you're coming!
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black mb-8 leading-tight max-w-6xl">
            Create your custom DevFest display photo
          </h1>
          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl active:scale-95">
            Time To Get Cooking!
          </button>
        </div>

        {/* Floating Photo Cutouts */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <div className="flex justify-center items-end space-x-4 md:space-x-8 px-4 pb-8">
            {/* Photo 1 - Rounded Square */}
            <div className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-300 rounded-2xl overflow-hidden shadow-lg border-4 border-yellow-400 rotate-3">
                {/* Photo placeholder - replace with actual image */}
                <img 
                  src="/path/to/your/photo1.jpg" 
                  alt="DevFest participant" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce animation-delay-[0s]"></div>
            </div>

            {/* Photo 2 - Circle */}
            <div className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="w-18 h-18 md:w-24 md:h-24 bg-gray-300 rounded-full overflow-hidden shadow-lg border-4 border-pink-400 -rotate-2">
                {/* Photo placeholder - replace with actual image */}
                <img 
                  src="/path/to/your/photo2.jpg" 
                  alt="DevFest participant" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -top-3 -left-3 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-green-400 animate-pulse"></div>
            </div>

            {/* Photo 3 - Rounded Rectangle (Portrait) */}
            <div className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="w-16 h-24 md:w-20 md:h-28 bg-gray-300 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-400 rotate-1">
                {/* Photo placeholder - replace with actual image */}
                <img 
                  src="/path/to/your/photo3.jpg" 
                  alt="DevFest participant" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-2 bg-red-400 rounded-full animate-pulse animation-delay-[1s]"></div>
            </div>

            {/* Photo 4 - Squircle (Super Rounded Square) */}
            <div className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="w-18 h-18 md:w-22 md:h-22 bg-gray-300 overflow-hidden shadow-lg border-4 border-green-400 -rotate-3"
                   style={{borderRadius: '30%'}}>
                {/* Photo placeholder - replace with actual image */}
                <img 
                  src="/path/to/your/photo4.jpg" 
                  alt="DevFest participant" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -top-2 -left-2 w-0 h-0 border-t-6 border-b-6 border-r-6 border-t-transparent border-b-transparent border-r-purple-400 animate-bounce animation-delay-[500ms]"></div>
            </div>

            {/* Photo 5 - Rounded Rectangle (Landscape) */}
            <div className="relative transform hover:scale-110 transition-transform duration-300">
              <div className="w-24 h-18 md:w-28 md:h-20 bg-gray-300 rounded-2xl overflow-hidden shadow-lg border-4 border-purple-400 rotate-2">
                {/* Photo placeholder - replace with actual image */}
                <img 
                  src="/path/to/your/photo5.jpg" 
                  alt="DevFest participant" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-400 transform rotate-45 animate-spin animation-duration-[4s]"></div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce animation-delay-[1s]"></div>
        <div className="absolute top-32 right-16 w-0 h-0 border-l-4 border-r-4 border-b-6 border-l-transparent border-r-transparent border-b-pink-400 animate-pulse animation-delay-[2s]"></div>
        <div className="absolute bottom-32 left-8 w-6 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-[500ms]"></div>
        <div className="absolute bottom-40 right-12 w-4 h-4 bg-green-400 transform rotate-45 animate-spin animation-duration-[6s]"></div>
      </div>
    </div>
  );
};

export default DPBanner;