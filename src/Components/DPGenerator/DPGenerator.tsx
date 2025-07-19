import { useEffect } from "react";
import DPImage from "../../assets/images/DP/DPImage.png";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const DPGenerator = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center py-8 px-4 max-w-4xl mx-auto text-center mt-10 md:mt-20'>
      {/* Header Section */}
      <div className='mb-6'>
        <p className='max-w-xl mx-auto text-xl text-[#1E1E1E] mb-2 md:mb-4 font-sans'>
          DP GENERATOR
        </p>
        <h1 className='text-4xl lg:text-5xl font-bold  mb-3'>
          DevFest Accra '25 Vibes?
          <br />
          Make Your DP!
        </h1>
        <p className='text-base sm:text-lg md:text-xl text-gray-600  max-w-2xl mx-auto'>
          Let the world know you're all in for DevFest 2025 — no matter what.
          Create your own super cool DP and rep the community in style!
        </p>
      </div>

      {/* Image Templates Section - Responsive on all screen sizes */}
      <div className='relative w-full my-12'>
        {/* On mobile (stacked vertically with smaller tilt) */}
        <div className='md:hidden flex flex-col items-center gap-6'>
          <div className='transform rotate-3'>
            <img
              src={DPImage}
              alt='DevFest DP Template 1'
              className='w-64 shadow-lg rounded-lg'
            />
          </div>
          <div className='transform -rotate-3 hidden '>
            <img
              src={DPImage}
              alt='DevFest DP Template 2'
              className='w-64 shadow-lg rounded-lg'
            />
          </div>
        </div>

        {/* On medium and up (side by side with more tilt) */}
        <div className='hidden md:flex justify-center relative h-96'>
          <div className='absolute transform -translate-x-20 lg:-translate-x-28 rotate-6 z-10 hover:z-20'>
            <img
              src={DPImage}
              alt='DevFest DP Template 1'
              className='w-80 lg:w-96 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105'
            />
          </div>
          <div className=' absolute transform translate-x-20 lg:translate-x-28 -rotate-6 z-0 hover:z-20'>
            <img
              src={DPImage}
              alt='DevFest DP Template 2'
              className='w-80 lg:w-96 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105'
            />
          </div>
        </div>
      </div>

      <Link to='/devfest/dp-generator'>
        <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md'>
          <span className='text-base font-medium text-white font-inter'>
            Create DP Now
          </span>
          <div className='bg-white rounded-full p-1 w-5 h-5'>
            <img
              src={assets.gifs.faqLinkGif}
              alt='icon'
              className='w-full h-full object-contain'
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default DPGenerator;