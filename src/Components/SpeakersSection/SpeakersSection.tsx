import React from "react";
import { assets } from "@/assets/assets";

const SpeakersSection: React.FC = () => {
  return (
    <section className='py-16 px-4 bg-gray-50 relative overflow-hidden'>
      {/* Background Shape */}
      <img
        src={assets.speakers.shape}
        alt='Background Shape'
        className='absolute top-0 right-0 w-64 lg:w-96 opacity-10'
      />

      <div className='container mx-auto relative z-10'>
        <div className='text-center mb-12'>
          <h2 className='text-sm uppercase text-gray-600 mb-4'>Our Speakers</h2>
          <h1 className='text-4xl lg:text-5xl font-bold'>
            Learn from the Best
          </h1>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Speaker 1 */}
          <div className='text-center'>
            <img
              src={assets.speakers.shadrackInusah}
              alt='Shadrack Inusah'
              className='w-32 h-32 mx-auto mb-4 rounded-full object-cover'
            />
            <h3 className='text-xl font-semibold mb-2'>Shadrack Inusah</h3>
            <p className='text-gray-600'>Senior Software Engineer</p>
          </div>

          {/* Speaker 2 */}
          <div className='text-center'>
            <img
              src={assets.speakers.okaiAbena}
              alt='Okai Abena'
              className='w-32 h-32 mx-auto mb-4 rounded-full object-cover'
            />
            <h3 className='text-xl font-semibold mb-2'>Okai Abena</h3>
            <p className='text-gray-600'>Tech Lead</p>
          </div>

          {/* Speaker 3 */}
          <div className='text-center'>
            <img
              src={assets.speakers.sosuAlfred}
              alt='Sosu Alfred'
              className='w-32 h-32 mx-auto mb-4 rounded-full object-cover'
            />
            <h3 className='text-xl font-semibold mb-2'>Sosu Alfred</h3>
            <p className='text-gray-600'>Frontend Developer</p>
          </div>

          {/* Speaker 4 */}
          <div className='text-center'>
            <img
              src={assets.speakers.shadrackOdametey}
              alt='Shadrack Odametey'
              className='w-32 h-32 mx-auto mb-4 rounded-full object-cover'
            />
            <h3 className='text-xl font-semibold mb-2'>Shadrack Odametey</h3>
            <p className='text-gray-600'>Full Stack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;