import React, { useState } from "react";
import { Linkedin, Twitter } from "lucide-react";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import TeamImage from '../../assets/images/TeamImages/TeamBG.png'
import Navbar from "../../Components/Navbar/Navbar";
import { teamMembers, filters, TeamMember } from "./teamData";

const Team: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const getFilteredMembers = (): TeamMember[] => {
    if (activeFilter === "All") {
      // Show only the first 4 members when "All" is selected
      return teamMembers.slice(0, 4);
    }
    return teamMembers.filter((member) => member.category === activeFilter);
  };

  const filteredMembers = getFilteredMembers();

  const handleKeyPress = (
    event: React.KeyboardEvent,
    memberId: number
  ): void => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setHoveredMember(hoveredMember === memberId ? null : memberId);
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
            className='w-full h-full  object-cover'
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className='relative z-10 min-h-screen py-2 px-4'>
        {/* Navbar placeholder */}
        <Navbar />
        <div className='max-w-7lx mx-auto'>
          {/* Header */}
          <div className='text-center mb-10 mt-20'>
            <h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
              Get To Know The Team
            </h1>
            <p className='text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
              Meet the passionate minds working behind the scenes to make
              DevFest Accra 2025 unforgettable.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className='flex flex-wrap justify-center gap-2 mb-12'>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  activeFilter === filter
                    ? "bg-blue-500 text-white shadow-md"
                    : "bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-300 hover:border-blue-400 hover:bg-white/90"
                }`}
                aria-pressed={activeFilter === filter}
                aria-label={`Filter by ${filter}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Desktop Layout - Only show when there are filtered members */}
          {filteredMembers.length > 0 && (
            <div className='hidden lg:grid lg:grid-cols-5 lg:gap-8'>
              {/* Left Panel - Team Photo */}
              <div className='lg:col-span-2'>
                <div className='sticky top-8'>
                  <div className='w-80 h-80 rounded-2xl overflow-hidden shadow-lg mx-auto'>
                    {/* Show the image of the hovered member, or first member by default */}
                    <img
                      src={hoveredMember 
                        ? filteredMembers.find(m => m.id === hoveredMember)?.image || filteredMembers[0]?.image
                        : filteredMembers[0]?.image
                      }
                      alt={hoveredMember 
                        ? `${filteredMembers.find(m => m.id === hoveredMember)?.name || filteredMembers[0]?.name} - Team member`
                        : `${filteredMembers[0]?.name} - Team member`
                      }
                      className='w-full h-full object-cover transition-all duration-300'
                    />
                  </div>
                </div>
              </div>

              {/* Right Panel - Team List */}
              <div className='lg:col-span-3'>
                <div className='space-y-1'>
                  {filteredMembers.map((member) => (
                    <div
                      key={member.id}
                      className={`flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-white/90 transition-all duration-200 cursor-pointer ${
                        hoveredMember === member.id ? 'border-blue-400 bg-blue-50/50' : ''
                      }`}
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                    >
                      <div className='flex items-center space-x-4'>
                        <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                        <div>
                          <h3 className='font-medium text-gray-900'>
                            {member.name}
                          </h3>
                          <p className='text-sm text-gray-600'>{member.role}</p>
                        </div>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <a
                          href={member.linkedin}
                          className='p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <Linkedin size={16} />
                        </a>
                         <a
                          href={member.twitter}
                          className='p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                          aria-label={`${member.name}'s Twitter profile`}
                        >
                          <Twitter size={16} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Layout - Only show when there are filtered members */}
          {filteredMembers.length > 0 && (
            <div className='lg:hidden'>
              <div className='space-y-3'>
                {filteredMembers.map((member) => (
                  <div key={member.id} className='relative'>
                    <div
                      className='p-4 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 cursor-pointer transition-all duration-300 hover:border-blue-300 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      onMouseEnter={() => setHoveredMember(member.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                      onFocus={() => setHoveredMember(member.id)}
                      onBlur={() => setHoveredMember(null)}
                      onKeyDown={(e) => handleKeyPress(e, member.id)}
                      tabIndex={0}
                      role='button'
                      aria-label={`View details for ${member.name}, ${member.role}`}
                    >
                      <div className='flex items-center justify-between'>
                        <div className='flex items-center space-x-3'>
                          <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                          <div>
                            <h3 className='font-medium text-gray-900'>
                              {member.name}
                            </h3>
                            <p className='text-sm text-gray-600'>{member.role}</p>
                          </div>
                        </div>
                        <div className='flex items-center space-x-2'>
                          <a
                            href={member.linkedin}
                            className='p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            aria-label={`${member.name}'s LinkedIn profile`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Linkedin size={16} />
                          </a>
                           <a
                            href={member.twitter }
                            className='p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500'
                            aria-label={`${member.name}'s twitter  profile`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Twitter  size={16} />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Image Display */}
                    <div
                      className={`mt-3 transition-all duration-500 ease-in-out overflow-hidden ${
                        hoveredMember === member.id
                          ? "max-h-80 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className='w-64 h-64 bg-gradient-to-br rounded-xl overflow-hidden shadow-lg mx-auto'>
                        <img
                          src={member.image}
                          alt={`${member.name} - Team member`}
                          className='w-full h-full object-cover'
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Results Message */}
          {filteredMembers.length === 0 && (
            <div className='text-center py-12 bg-white/60 flex flex-col items-center'>
              <p className='text-red-500 font-bold text-lg backdrop-blur-sm rounded-lg p-4 inline-block'>
                No Team Members Found For This Category.
              </p>
              <img src={TeamImage} alt="" className='w-64 h-auto mt-4' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;