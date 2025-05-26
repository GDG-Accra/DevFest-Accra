// import BeFirstImage from "../../assets/images/BeFirst/BeFirstImage.svg";
import LinkRotate from "../../assets/images/BeFirst/link.gif";

// import { ArrowRight } from 'lucide-react';
import BefirstImage from "../../assets/images/BeFirst/BeImage.svg";
import { Link } from "react-router-dom";

export const BeFirst = () => {
  return (
    <div className='bg-sky-100 p-6 md:p-10 flex items-center justify-center'>
      <div className='max-w-6xl w-full mx-auto flex flex-col md:flex-row gap-8 rounded-xl overflow-hidden'>
        {/* Left side image section */}
        <div className='md:w-1/2 bg-white p-4 md:p-8 flex items-center justify-center relative'>
          <div className='absolute top-6 left-6 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-gray-700 font-medium text-sm'>
            @DevFest
          </div>

          {/* DevFest logo */}
          <div className='absolute top-6 right-6'>
            <div className='flex items-center gap-1'>
              <div className='h-4 w-4 bg-blue-500 rounded-sm'></div>
              <div className='h-4 w-4 bg-red-400 rounded-sm'></div>
              <div className='h-4 w-4 bg-yellow-400 rounded-sm'></div>
              <div className='h-4 w-4 bg-green-400 rounded-sm'></div>
            </div>
          </div>

          {/* Event image */}
          <div className='w-full h-72 rounded-lg flex items-center justify-center relative overflow-hidden'>
            <img
              src={BefirstImage}
              alt='DevFest event participants'
              className='w-full h-full object-cover'
            />

            {/* Event tags/buttons at the bottom of the image */}
            <div className='absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-3'>
              <div className='bg-white py-2 px-6 rounded-full shadow-md flex items-center gap-2'>
                <div className='flex'>
                  <div className='h-4 w-4 bg-blue-500 rounded-sm'></div>
                  <div className='h-4 w-4 bg-red-400 rounded-sm -ml-1'></div>
                  <div className='h-4 w-4 bg-yellow-400 rounded-sm -ml-1'></div>
                  <div className='h-4 w-4 bg-green-400 rounded-sm -ml-1'></div>
                </div>
                <span className='font-semibold text-gray-700'>DevFest</span>
                <span className='text-xs bg-gray-800 text-white rounded-full px-2 py-0.5'>
                  Accra
                </span>
              </div>

              <div className='bg-white/90 backdrop-blur-sm py-2 px-4 rounded-full shadow-md'>
                <span className='text-gray-700'>GDG Accra</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right side content section */}
        <div className='md:w-1/2 p-6 md:p-10 flex flex-col justify-center'>
          <div className='text-gray-700 font-medium mb-2'>GDG ACCRA</div>
          <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
            Be the First to Know!
          </h1>

          <p className='text-gray-700 mb-8'>
            Stay updated on all our activities, events, and webinars. Get the
            inside scoop on everything happening in the GDG Accra community.
          </p>
          <Link to='https://gdg.community.dev/gdg-accra/'>
            <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md w-full md:w-auto'>
              <span
                className='text-base font-medium text-[#FDFDFD] font-inter
                sm:text-lg
                md:text-[18px]
                lg:text-[20px]
                2xl:text-[24px]
                3xl:text-[28px]'
              >
                Let&apos;s Go
              </span>
              <div
                className='bg-white rounded-full p-[2px] w-[20px] h-[20px]
                sm:p-[3px] sm:w-[24px] sm:h-[24px]
                2xl:w-[32px] 2xl:h-[32px]
                3xl:w-[38px] 3xl:h-[38px]'
              >
                <img
                  src={LinkRotate}
                  alt='icon'
                  className='w-full h-full object-contain'
                />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
