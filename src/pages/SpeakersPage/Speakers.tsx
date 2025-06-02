import React from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import firstSpeaker from "../../assets/images/Logos/DFShapeLogo.svg";
import Navbar from "../../Components/Navbar/Navbar";

interface Speaker {
  id: number;
  name: string;
  role: string;
  topic: string;
  linkedin: string;
  twitter: string;
  instagram: string;
  image: string;
  variant: "blue" | "green" | "yellow";
}

const Speakers: React.FC = () => {
  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Shadrack Inusah",
      role: "Lead, GDG Accra",
      topic: "Building Scalable Communities",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      image: firstSpeaker,
      variant: "blue",
    },
    {
      id: 2,
      name: "Lisa Crosbie",
      role: "External speaker",
      topic: "Building Scalable Communities",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      image: firstSpeaker,
      variant: "green",
    },
    {
      id: 3,
      name: "Megan V. Walker",
      role: "Internal speaker",
      topic: "Building Scalable Communities",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      image: firstSpeaker,
      variant: "yellow",
    },
  ];

  const getRoleBadgeStyle = (role: string) => {
    if (role.toLowerCase().includes("external")) {
      return "bg-blue-500 text-white";
    } else if (role.toLowerCase().includes("internal")) {
      return "bg-green-500 text-white";
    } else {
      return "bg-gray-500 text-white";
    }
  };

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

      {/* Content overlay */}
      <div className='relative z-10 min-h-screen py-2 px-4'>
        {/* Navbar placeholder */}
        <Navbar />
        <div className='max-w-7xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-10 mt-20'>
            <h1 className='text-4xl md:text-5xl font-bold text-[#1E1E1E] mb-4'>
              Get To Know Our DevFest Accra <br />2025 Speakers
            </h1>
            <p className='text-gray-700 max-w-2xl mx-auto'>
              From industry experts to rising tech stars, meet the brilliant
              minds ready to inspire, educate and spark conversations at this
              year's DevFest.
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
            {speakers.map((speaker) => (
              <div key={speaker.id} className='relative'>
                {/* Speaker Card */}
                <div className='bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200'>
                  {/* Speaker Image */}
                  <div className='flex justify-center pt-4 pb-3'>
                    <div className='w-40 h-40 rounded-md overflow-hidden shadow-md'>
                      <img
                        src={speaker.image}
                        alt={`${speaker.name}`}
                        className='w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300'
                      />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className='px-4 py-4'>
                    <h3 className='text-lg font-semibold text-gray-900 mb-3'>
                      {speaker.name}
                    </h3>

                    {/* Social Media Icons */}
                    <div className='flex space-x-3'>
                      <a
                        href={speaker.linkedin}
                        className='p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200'
                        aria-label={`${speaker.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={speaker.twitter}
                        className='p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-400 transition-colors duration-200'
                        aria-label={`${speaker.name}'s Twitter`}
                      >
                        <Twitter size={18} />
                      </a>
                      <a
                        href={speaker.instagram}
                        className='p-2 rounded-full bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 transition-colors duration-200'
                        aria-label={`${speaker.name}'s Instagram`}
                      >
                        <Instagram size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Role Badge - Outside the card, positioned over the border */}
                <div className='absolute -bottom-2 left-4 z-10'>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium shadow-md ${getRoleBadgeStyle(
                      speaker.role
                    )}`}
                  >
                    {speaker.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
