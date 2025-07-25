import { assets } from "../../assets/assets";

const AboutSection = () => {
  return (
    <section className='py-16 px-4 bg-white overflow-hidden'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-12'>
          {/* Text Content */}
          <div className='lg:w-1/2 space-y-6'>
            <h2 className='text-sm uppercase text-gray-600 mb-2'>
              About DevFest Accra 2025
            </h2>
            <h1 className='text-4xl lg:text-5xl font-bold leading-tight'>
              Think you know what a tech conference should be?
              <br />
              <span className='text-blue-600'>Think again.</span>
            </h1>
            <p className='text-lg text-gray-700 leading-relaxed'>
              DevFest Accra 2025 isn't just about tech talks and networking—
              it's where Ghana's brightest developers, innovators, and dreamers
              come together to push boundaries, spark ideas, and create the
              future.
            </p>
            <p className='text-lg text-gray-700 leading-relaxed'>
              From cutting-edge workshops to mind-blowing keynotes, we're
              redefining what it means to learn, grow, and connect in the tech
              space.
            </p>
          </div>

          {/* Image */}
          <div className='lg:w-1/2'>
            <img
              src={assets.about.aboutImage}
              alt='DevFest Accra 2025'
              className='w-full h-auto'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
