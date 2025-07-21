import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import { assets } from "../../assets/assets";

const DevFestLandingPage = () => {
  // const [isHovering, setIsHovering] = useState(false);
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-white bg-opacity-90'>
          <img
            src={BGImage}
            alt='Background'
            className='w-full h-full object-cover'
          />
        </div>
      </div>

      {/* Navbar will be imported from existing code */}
      <Navbar />
      {/* Main Content */}
      <main className='pt-20 px-4 mx-auto max-w-6xl'>
        {/* GDG Accra Presents Badge */}
        <div className='text-center mb-3'>
          <div className='inline-block px-6 py-2 bg-white rounded-full shadow-md'>
            <span className='text-gray-700 tracking-wide'>
              GDG ACCRA PRESENTS
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className='text-center mt-10 relative'>
          <h1 className='text-7xl md:text-9xl font-bold mb-2'>DevFest Accra</h1>
          <div className='absolute top-0 right-[19%] md:right-[26%] lg:right-[14%] -mt-1'>
            <span className='md:text-3xl text-2xl font-bold'>2025</span>
          </div>
        </div>

        {/* Description Text */}
        <div className='max-w-3xl mx-auto text-center mt-5 md:mt-16 md:mb-16'>
          <p className='text-base sm:text-lg md:text-xl'>
            Join us at DevFest Accra 2025 on 4th October 2025 for Accra's largest
            tech celebration of the year! This event is your gateway to the
            latest in AI, Android, Cloud, Web, and more. Don't miss out on this!
          </p>
        </div>

        {/* Join Now Button */}
        <div className='p-8 flex justify-center'>
          <Link to='https://gdg.community.dev/gdg-accra/'>
            <button className='bg-blue-500 hover:bg-blue-600 transition-colors text-white py-3 px-10 rounded-md flex items-center justify-center gap-2 shadow-md'>
              <span className='text-base font-medium text-white font-inter'>
                Register Now
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
      </main>
    </div>
  );
};

export default DevFestLandingPage;
