import ThrowbackImage from '../../assets/images/Throwback/throwbackImage.svg';
import Shape from '../../assets/images/Speakers/shape.svg'
import { CiImageOn } from 'react-icons/ci';
import { IoPlayCircleOutline } from 'react-icons/io5';

const ThrowbackSection = () => {
  return (
    <div className="bg-white md:py-10 py-5 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Top badge */}
      <div className="flex justify-center mb-10">
        <div className="bg-white rounded-full shadow-md px-6 py-3 flex flex-col items-center">
          <div className="uppercase text-gray-700 text-sm font-medium">THROWBACK</div>
          <div className="flex items-center gap-1 mt-1">
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            <div className="h-4 w-4 bg-green-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Title section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Throwback to DevFest Accra '24:
        </h2>
        <div className="flex items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 md:mr-3">
            Vibes and Tech All the Way
          </h2>
          <div className="flex">
           <img src={Shape} alt="" />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg">
          Remember the energy? The pictures, the jollof, the pure tech vibes? Last year, we turned up and 
          showed out. From inspiring sessions to unforgettable connections, DevFest Accra 2024 was 
          everything and more.
        </p>
      </div>

      {/* Image gallery - matching exactly the reference layout */}
      <div className="flex justify-center gap-3 mb-10">
        {/* First panel - tall and narrow */}
        <div className="w-[16%] h-[450px] rounded-[30px] overflow-hidden">
          <img 
            src={ThrowbackImage} 
            alt="DevFest Accra attendees 1" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Second panel - tall and narrow */}
        <div className="w-[16%] h-[450px] rounded-[30px] overflow-hidden">
          <img 
            src={ThrowbackImage} 
            alt="DevFest Accra attendees 2" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Central panel - extra tall */}
        <div className="w-[20%] h-[450px] rounded-[30px] overflow-hidden">
          <img 
            src={ThrowbackImage} 
            alt="DevFest Accra group shot" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Fourth panel - tall and narrow */}
        <div className="w-[16%] h-[450px] rounded-[30px] overflow-hidden">
          <img 
            src={ThrowbackImage} 
            alt="DevFest Accra participants 1" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Fifth panel - tall and narrow */}
        <div className="w-[16%] h-[450px] rounded-[30px] overflow-hidden">
          <img 
            src={ThrowbackImage} 
            alt="DevFest Accra participants 2" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Action buttons - FIXED for better display on large screens */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full max-w-3xl mx-auto mt-12">
        {/* Play highlights button - yellow/orange button */}
        <button className="bg-yellow-500 text-gray-800 py-4 px-6 rounded-full font-semibold text-lg flex justify-center items-center gap-2 transition hover:bg-yellow-600">
          <span>Play highlights</span>
          <IoPlayCircleOutline className="text-gray-800 text-2xl" />
        </button>

        {/* DevFest Lagos photos button - outlined button */}
        <button className="bg-transparent border-2 border-gray-300 text-gray-800 py-4 px-6 rounded-full font-semibold text-lg flex justify-center items-center gap-2 transition hover:bg-gray-100">
          <span>DevFest Accra 24 photos</span>
          <CiImageOn className="text-gray-800 text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default ThrowbackSection;