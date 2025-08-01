import ThrowbackImage from "../../assets/images/Throwback/throwbackImage.svg";
import ThrowbackImage2 from "../../assets/images/Throwback/throwbackImagetwo.jpg";
import ThrowbackImage3 from "../../assets/images/Throwback/throwbackImagethree.jpg";
import ThrowbackImage4 from "../../assets/images/Throwback/throwbackImagefour.jpg";
import ThrowbackImage5 from "../../assets/images/Throwback/throwbackImagefive.png";
import Shape from "../../assets/images/Speakers/shape.svg";
import { CiImageOn } from "react-icons/ci";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ThrowbackSection = () => {
  return (
    <div className='bg-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
      {/* Top badge */}
      <div className='flex justify-center mb-6 sm:mb-10'>
        <div className='bg-white rounded-full shadow-md px-4 sm:px-6 py-2 sm:py-3 flex flex-col items-center'>
          <div className='uppercase text-gray-700'>THROWBACK</div>
          <div className='flex items-center gap-1 mt-1'>
            <div className='h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full'></div>
            <div className='h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full'></div>
            <div className='h-3 w-3 sm:h-4 sm:w-4 bg-green-500 rounded-full'></div>
          </div>
        </div>
      </div>
      {/* Title section */}
      <div className='text-center mb-8'>
        <h2 className='text-4xl lg:text-5xl font-bold  text-gray-900 mb-2'>
          Throwback to DevFest Accra '24:
        </h2>
        <div className='flex items-center justify-center'>
          <h2 className='text-4xl lg:text-5xl font-bold  text-gray-900 md:mr-3'>
            Vibes and Tech All the Way
          </h2>
          <div className='flex'>
            <img src={Shape} alt='' />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='text-center mb-8 sm:mb-10 max-w-3xl mx-auto'>
        <p className='text-base sm:text-lg md:text-xl text-gray-700'>
          Remember the energy? The pictures, the jollof, the pure tech vibes?
          Last year, we turned up and showed out. From inspiring sessions to
          unforgettable connections, DevFest Accra 2024 was everything and more.
        </p>
      </div>

      {/* Image gallery */}
      <div className='hidden sm:flex justify-center gap-3 mb-10 overflow-x-auto'>
        {/* Images with staggered layout for larger screens */}
        <div className='w-[16%] h-[450px] mt-20 rounded-[30px] overflow-hidden'>
          <img
            src={ThrowbackImage}
            alt='part-1'
            className='w-full h-full object-cover object-[10%]'
          />
        </div>
        <div className='w-[16%] h-[450px] mt-0 rounded-[35px] overflow-hidden'>
          <img
            src={ThrowbackImage}
            alt='part-2'
            className='w-full h-full object-cover object-[30%]'
          />
        </div>
        <div className='w-[20%] h-[450px] mt-20 rounded-[30px] overflow-hidden'>
          <img
            src={ThrowbackImage}
            alt='part-3'
            className='w-full h-full object-cover object-center'
          />
        </div>
        <div className='w-[16%] h-[450px] mt-0 rounded-[30px] overflow-hidden'>
          <img
            src={ThrowbackImage}
            alt='part-4'
            className='w-full h-full object-cover object-[70%]'
          />
        </div>
        <div className='w-[16%] h-[450px] mt-20 rounded-[30px] overflow-hidden'>
          <img
            src={ThrowbackImage}
            alt='part-5'
            className='w-full h-full object-cover object-[90%]'
          />
        </div>
      </div>

      {/* Mobile Image Carousel (for small screens) */}
      <div className='sm:hidden flex overflow-x-auto space-x-3 pb-4 px-4'>
        {[
          {
            id: 1,
            src: ThrowbackImage,
            alt: "DevFest Accra 2024 - Opening Session",
          },
          {
            id: 2,
            src: ThrowbackImage2,
            alt: "DevFest Accra 2024 - Tech Talks",
          },
          {
            id: 3,
            src: ThrowbackImage3,
            alt: "DevFest Accra 2024 - Networking",
          },
          {
            id: 4,
            src: ThrowbackImage4,
            alt: "DevFest Accra 2024 - Workshops",
          },
          {
            id: 5,
            src: ThrowbackImage5,
            alt: "DevFest Accra 2024 - Community",
          },
        ].map((image) => (
          <div
            key={image.id}
            className='flex-shrink-0 w-64 h-64 rounded-[30px] overflow-hidden'
          >
            <img
              src={image.src}
              alt={image.alt}
              className='w-full h-full object-cover object-[0%]'
            />
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mx-auto mt-8 sm:mt-12 mb-8'>
        <Link
          to='https://www.youtube.com/@gdgaccra'
          className='w-full sm:w-auto'
        >
          <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md'>
            <span>Play Highlights</span>
            <IoPlayCircleOutline className='text-white text-xl sm:text-2xl' />
          </button>
        </Link>

        <Link
          to='https://photos.google.com/share/AF1QipMD7yxbMSrutUXdO-8Y1QGyiZWaHKgvUAt2d_hyR-gzgCBwVJ96KJaitm9JXs3azw?key=ZmMwdl9mY2xiRFlYV1pNNThqNmVSRFJwWm5IYWl3'
          className='w-full sm:w-auto'
        >
          <button className='bg-transparent border-2 border-gray-300 hover:bg-gray-100 transition-colors text-gray-800  py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md'>
            <span>DevFest Accra 24 Photos</span>
            <CiImageOn className='text-gray-800 text-xl sm:text-2xl' />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ThrowbackSection;
