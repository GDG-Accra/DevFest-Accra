import React from "react";
import { assets } from "@/assets/assets";

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <img
        src={assets.team.codeLeft}
        alt="Code Background Left"
        className="absolute top-10 left-0 w-32 opacity-10"
      />
      <img
        src={assets.team.codeRight}
        alt="Code Background Right"
        className="absolute top-10 right-0 w-32 opacity-10"
      />

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Amazing Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate individuals behind DevFest Accra 2025, working
              tirelessly to bring you an unforgettable experience.
            </p>
          </div>

          {/* Team Background Image */}
          <div className="relative mb-16">
            <img
              src={assets.team.teamBG}
              alt="DevFest Accra Team"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-900 bg-opacity-50 rounded-lg flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  Organized by GDG Accra
                </h2>
                <p className="text-lg">
                  A community of passionate developers in Ghana
                </p>
              </div>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={assets.logos.gdgLogo}
                alt="Team Member"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-gray-600 mb-4">Event Organizer</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Twitter
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={assets.logos.dfShapeLogo}
                alt="Team Member"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-gray-600 mb-4">Technical Lead</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Twitter
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={assets.logos.gdgLogo}
                alt="Team Member"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-gray-600 mb-4">Marketing Lead</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Twitter
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src={assets.logos.dfShapeLogo}
                alt="Team Member"
                className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Sarah Wilson</h3>
              <p className="text-gray-600 mb-4">Community Manager</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Twitter
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
