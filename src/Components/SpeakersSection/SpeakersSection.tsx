import React, { useState } from "react";
import ShadrackImage from "../../assets/images/Speakers/ShadrackInusah.svg";
import OkaiImage from "../../assets/images/Speakers/OkaiAbena.svg";
import SosuImage from "../../assets/images/Speakers/SosuAlfred.svg";
import OdameteyImage from "../../assets/images/Speakers/ShadrackOdametey.svg";
import shape from "../../assets/images/Speakers/shape.svg";
import { RiMicLine } from "react-icons/ri";

// Simple arrow components to replace lucide-react dependency
const ChevronLeft = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M15 18l-6-6 6-6' />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path d='M9 18l6-6-6-6' />
  </svg>
);

const SpeakersSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample speakers data
  const speakers = [
    {
      name: "Shadrack Inusah",
      title: "Google Developer Groups Accra Lead",
      description:
        "Loves helping people to learn and to discover new ways of thinking. Implementing digital revolution into learning environment.",
      image: ShadrackImage,
      color: "bg-blue-100",
      textColor: "text-blue-600",
    },
    {
      name: "Okai Abena Akweley",
      title: "Google Developer Groups Accra Lead",
      description:
        "Creating intuitive interfaces and experiences that bridge technology and human needs.",
      image: OkaiImage,
      color: "bg-pink-100",
      textColor: "text-pink-600",
    },
    {
      name: "Sosu Alfred",
      title: "Google Developer Groups Accra Lead",
      description:
        "Passionate about empowering developers with tools and resources to build transformative solutions.",
      image: SosuImage,
      color: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      name: "Shadrack Odametey",
      title: "Google Developer Groups Accra Lead",
      description:
        "Building innovative solutions to solve local challenges with global impact.",
      image: OdameteyImage,
      color: "bg-purple-100",
      textColor: "text-purple-600",
    },
  ];

  // Function to navigate to previous speaker
  const prevSpeaker = () => {
    setActiveIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1));
  };

  // Function to navigate to next speaker
  const nextSpeaker = () => {
    setActiveIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1));
  };

  // Function to directly select a speaker
  const selectSpeaker = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className='w-full py-16 px-8 relative overflow-hidden'>
      {/* Header section */}
      <div className='text-center mb-12'>
        <h2 className='text-5xl font-bold mb-4 flex items-center justify-center'>
          Our Inspiring Speakers
          <span className='lg:ml-4 '>
            <div className='flex'>
              <img src={shape} alt='' />
            </div>
          </span>
        </h2>
        <p className='text-xl text-gray-700 max-w-3xl mx-auto'>
          Introducing the innivators and Visionaries leading the charge in
          development and technology
        </p>
      </div>

      {/* Speakers carousel */}
      <div className='flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto relative'>
        {/* Navigation arrows and active speaker info */}
        <div className='flex flex-col items-start mb-8 md:mb-0 w-full md:w-1/3'>
          <div className='flex items-center mb-6'>
            <button
              onClick={prevSpeaker}
              className='p-2 rounded-full hover:bg-gray-100'
              aria-label='Previous speaker'
            >
              <ChevronLeft />
            </button>
            <h3 className='text-2xl font-bold mx-4'>
              {speakers[activeIndex]?.name || "Speaker"}
            </h3>
            <button
              onClick={nextSpeaker}
              className='p-2 rounded-full hover:bg-gray-100'
              aria-label='Next speaker'
            >
              <ChevronRight />
            </button>
          </div>

          <div
            className={`px-4 py-2 rounded-full mb-4 ${
              speakers[activeIndex]?.textColor || "text-gray-600"
            } ${speakers[activeIndex]?.color || "bg-gray-100"}`}
          >
            {speakers[activeIndex]?.title || "Speaker Title"}
          </div>

          <p className='text-gray-700'>
            {speakers[activeIndex]?.description ||
              "Speaker description goes here."}
          </p>
        </div>

        {/* Image carousel */}
        <div
          className={`relative w-full md:w-2/3 h-80 ${
            speakers[activeIndex]?.color || "bg-gray-100"
          } rounded-3xl p-6`}
        >
          <div className='flex h-full items-center justify-center relative'>
            {speakers &&
              speakers.length > 0 &&
              [-1, 0, 1].map((offset) => {
                const speakerIndex =
                  (activeIndex + offset + speakers.length) % speakers.length;

                // Calculate position and styling based on offset
                let positionClass = "absolute";
                let scaleClass = "scale-75 opacity-70";
                let zIndex = "z-10";
                let leftClass = "";

                if (offset === -1) {
                  leftClass = "left-0";
                } else if (offset === 0) {
                  positionClass = "absolute transform translate-y-0";
                  scaleClass = "scale-100";
                  zIndex = "z-20";
                  leftClass = "left-1/2 transform -translate-x-1/2";
                } else if (offset === 1) {
                  leftClass = "right-0";
                }

                return (
                  <div
                    key={speakerIndex}
                    className={`${positionClass} ${leftClass} ${scaleClass} ${zIndex} transition-all duration-300 ease-in-out`}
                  >
                    <div className='w-48 h-48 bg-gray-200 rounded-lg overflow-hidden shadow-lg'>
                      <img
                        src={
                          speakers[speakerIndex]?.image ||
                          "https://via.placeholder.com/200"
                        }
                        alt={`${speakers[speakerIndex]?.name || "Speaker"}`}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Pagination dots */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
            {speakers &&
              speakers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => selectSpeaker(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? "bg-white"
                      : "bg-white bg-opacity-50"
                  }`}
                  aria-label={`Go to speaker ${index + 1}`}
                />
              ))}
          </div>
        </div>
      </div>
      <div className='mt-10 flex items-center justify-center'>
        <button className='bg-purple-300 text-white p-3 rounded-3xl flex gap-2 items-center'>
          See all Speakers
          <RiMicLine  className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default SpeakersSection;
