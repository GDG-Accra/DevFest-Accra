import React, { useState } from "react";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import firstSpeaker from "../../assets/images/Logos/DFShapeLogo.svg";
import ShadrackImage from "../../assets/images/Speakers/ShadrackInusah.svg";
// import OkaiImage from "../../assets/images/Speakers/OkaiAbena.svg";
// import SosuImage from "../../assets/images/Speakers/SosuAlfred.svg";
// import OdameteyImage from "../../assets/images/Speakers/ShadrackOdametey.svg";
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
  bio: string;
}

const Speakers: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());

  const speakers: Speaker[] = [
    {
      id: 1,
      name: "Shadrack Inusah",
      role: "Lead, GDG Accra",
      topic: "Building Scalable Communities",
      linkedin: "#",
      twitter: "#",
      instagram: "#",
      image: ShadrackImage,
      variant: "blue",
      bio: "Shadrack is a passionate community leader with over 8 years of experience in building and scaling tech communities across Africa. He has helped launch multiple successful developer programs and mentored hundreds of developers in their career journey.",
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
      bio: "Shadrack is a passionate community leader with over 8 years of experience in building and scaling tech communities across Africa. He has helped launch multiple successful developer programs and mentored hundreds of developers in their career journey.",
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
      bio: "Shadrack is a passionate community leader with over 8 years of experience in building and scaling tech communities across Africa. He has helped launch multiple successful developer programs and mentored hundreds of developers in their career journey.",
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

  const handleCardClick = (speakerId: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(speakerId)) {
        newSet.delete(speakerId);
      } else {
        newSet.add(speakerId);
      }
      return newSet;
    });
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-opacity-90">
          <img
            src={BGImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen py-2 px-4">
        {/* Navbar placeholder */}
        <Navbar />
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 mt-20">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4">
              Get To Know Our DevFest Accra <br />
              2025 Speakers
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From industry experts to rising tech stars, meet the brilliant
              minds ready to inspire, educate and spark conversations at this
              year's DevFest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
            {speakers.map((speaker) => (
              <div key={speaker.id} className="relative">
                {/* Card Container with flip animation */}
                <div
                  className="relative w-full h-80 cursor-pointer"
                  style={{ perspective: "1000px" }}
                  onClick={() => handleCardClick(speaker.id)}
                >
                  <div
                    className={`relative w-full h-full transition-transform duration-700 ${
                      flippedCards.has(speaker.id) ? "rotate-y-180" : ""
                    }`}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: flippedCards.has(speaker.id)
                        ? "rotateY(180deg)"
                        : "rotateY(0deg)",
                    }}
                  >
                    {/* Front Side */}
                    <div
                      className="absolute inset-0 w-full h-full backface-hidden"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 h-full">
                        {/* Speaker Image */}
                        <div className="flex justify-center pt-4 pb-3">
                          <div className="w-40 h-40 rounded-md overflow-hidden shadow-md">
                            <img
                              src={speaker.image}
                              alt={`${speaker.name}`}
                              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="px-4 py-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            {speaker.name}
                          </h3>

                          {/* Social Media Icons */}
                          <div className="flex space-x-3">
                            <a
                              href={speaker.linkedin}
                              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                              aria-label={`${speaker.name}'s LinkedIn`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Linkedin size={18} />
                            </a>
                            <a
                              href={speaker.twitter}
                              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-400 transition-colors duration-200"
                              aria-label={`${speaker.name}'s Twitter`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Twitter size={18} />
                            </a>
                            <a
                              href={speaker.instagram}
                              className="p-2 rounded-full bg-gray-100 hover:bg-pink-100 text-gray-600 hover:text-pink-600 transition-colors duration-200"
                              aria-label={`${speaker.name}'s Instagram`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Instagram size={18} />
                            </a>
                          </div>
                          <div className="mt-4 text-center text-xs text-gray-500">
                            Click to flip back
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Side */}
                    <div
                      className="absolute inset-0 w-full h-full backface-hidden"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200 h-full p-6 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                          About {speaker.name}
                        </h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {speaker.bio}
                        </p>
                        <div className="text-center">
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            {speaker.topic}
                          </span>
                        </div>
                        <div className="mt-4 text-center text-xs text-gray-500">
                          Click to flip back
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Role Badge - Outside the card, positioned over the border */}
                <div className="absolute -bottom-2 left-4 z-10">
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
