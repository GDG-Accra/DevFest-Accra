import React from "react";
// import { Linkedin, Twitter } from "lucide-react";
import BGImage from "../../assets/images/LandingPageImage/bgImage.svg";
import firstSpeaker from "../../assets/images/Speakers/ShadrackInusah.svg";
import Navbar from "../../Components/Navbar/Navbar";
// import { useState } from "react";

interface Speaker {
  id: number;
  name: string;
  role: string;
  topic: string;
  linkedin: string;
  twitter: string;
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
      image: firstSpeaker,
      variant: "blue",
    },
    {
      id: 2,
      name: "Shadrack Inusah",
      role: "Lead, GDG Accra",
      topic: "Building Scalable Communities",
      linkedin: "#",
      twitter: "#",
      image: "EstherImage1",
      variant: "green",
    },
    {
      id: 3,
      name: "Shadrack Inusah",
      role: "Lead, GDG Accra",
      topic: "Building Scalable Communities",
      linkedin: "#",
      twitter: "#",
      image: "EstherImage1",
      variant: "yellow",
    },
  ];

  const getCardStyle = (variant: string) => {
    switch (variant) {
      case "blue":
        return "bg-blue-100 text-black";
      case "green":
        return "bg-green-100 text-black";
      case "yellow":
        return "bg-yellow-100 text-black";
      default:
        return "bg-white";
    }
  };

  const getButtonStyle = (variant: string) => {
    switch (variant) {
      case "blue":
        return "bg-white text-blue-600 border-blue-400";
      case "green":
        return "bg-white text-green-700 border-green-400";
      case "yellow":
        return "bg-white text-yellow-700 border-yellow-500";
      default:
        return "bg-white text-black";
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-white bg-opacity-90">
          <img
            src={BGImage}
            alt="Background"
            className="w-full h-full  object-cover"
          />
        </div>
      </div>

      {/* Content overlay */}
      <div className="relative z-10 min-h-screen py-2 px-4">
        {/* Navbar placeholder */}
        <Navbar />
        <div className="max-w-7lx mx-auto">
          {/* Header */}
          <div className="text-center mb-10 mt-20">
            <h1 className="text-6xl md:text-5xl font-bold text-gray-900 mb-4">
              Get To Know Our DevFest Accra 2025 Speakers
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto">
              From industry experts to rising tech stars, meet the brilliant
              minds ready to inspire, educate and spark conversations at this
              year's DevFest.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className={`rounded-2xl shadow-md p-6 ${getCardStyle(
                  speaker.variant
                )}`}
              >
                <img
                  src={speaker.image}
                  alt={`${speaker.name}`}
                  className="rounded-xl w-full z-0 h-60 object-cover mb-4"
                />
                <h3 className="text-2xl font-semibold mb-2">{speaker.name}</h3>
                <div
                  className={`inline-block px-4 py-2 mb-4 rounded-full border text-sm font-medium ${getButtonStyle(
                    speaker.variant
                  )}`}
                >
                  {speaker.role}
                </div>
                <p className="text-sm mb-4">{speaker.topic}</p>
                <p className="font-bold text-base">Day 2 - Saturday</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
