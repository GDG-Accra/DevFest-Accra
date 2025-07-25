import React from "react";
import { assets } from "../../assets/assets";

const DevFestLandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={assets.landingPage.bgImage}
          alt="DevFest Accra 2025 Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            DevFest Accra
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            2025
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            The biggest developer conference in Ghana is back! Join us for an
            incredible journey of learning, networking, and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Register Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>

          {/* Event Details */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Date</h3>
              <p className="text-blue-200">March 15, 2025</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-blue-200">Accra, Ghana</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Attendees</h3>
              <p className="text-blue-200">500+ Developers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-20">
        <img
          src={assets.landingPage.shape}
          alt="Decorative Shape"
          className="w-32 h-32 opacity-30"
        />
      </div>
    </div>
  );
};

export default DevFestLandingPage;
