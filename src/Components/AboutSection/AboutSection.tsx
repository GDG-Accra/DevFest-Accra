import AboutImage from "../../assets/images/About/AboutImage.svg";
import { Code } from "../../assets/elements/code";
import { Heart } from "../../assets/elements/heart";

export const AboutSection = () => {
  return (
    <section className='container mx-auto px-4 py-12 sm:py-16 md:py-24 lg:py-40 relative'>
      <div className='flex flex-col md:flex-row gap-8'>
        {/* Text content on the left */}
        <div className='md:w-1/2 px-2 sm:px-4 md:px-6 lg:px-10'>
          <div className='flex mb-6'>
            <h1 className='text-4xl md:text-5xl font-bold'>
              About <br /> DevFest Accra
            </h1>
            <Code className='w-6 md:ml-2' />
          </div>
          <p className='text-lg md:text-xl text-gray-700 text-justify'>
            DevFest Accra brings this global experience to Ghana, uniting local
            developers, designers, and industry experts in an environment that
            fosters learning and innovation. It serves as a platform for
            professionals and aspiring technologists to engage with cutting-edge
            tools, gain hands-on experience, and build meaningful connections
            within the tech ecosystem. By promoting collaboration and knowledge
            sharing, DevFest Accra contributes to the expansion and development
            of Ghana's technology community.
          </p>
        </div>
        
        {/* Image and heart on the right */}
        <div className='md:w-1/2 relative md:mt-0 flex justify-center md:pr-5'>
          <div className='relative w-4/5 md:w-full'>
            <img
              src={AboutImage}
              alt='About Image'
              className='w-full h-auto'
            />
            <Heart
              className='absolute right-0 bottom-0 sm:right-2 md:right-3 lg:right-10 2xl:-right-3'
            />
          </div>
        </div>
      </div>

    </section>
  );
};