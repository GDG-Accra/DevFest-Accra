import React from "react";
import { Download } from "lucide-react";

import { Button } from "../../Components/DPForm/Button";
import DFLogoAccraPNG from "../../assets/images/Logos/_DF25-Accra.png";
import { assets } from "@/assets/assets";

interface DPTemplateProps {
  name: string;
  hook: string;
  imageURL: string;
  onDownload: () => void;
  onBack: () => void;
  isDownloading?: boolean;
}

const DPTemplate: React.FC<DPTemplateProps> = ({
  name,
  hook,
  imageURL,
  onDownload,
  isDownloading = false,
}) => {
  return (
    <main className="flex flex-col items-center max-w-6xl px-4 py-6 mx-auto">
      <div className="mb-8 text-center">
        <div className="mb-2 text-gray-600">Viola ✨</div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Here's your DP
        </h1>
      </div>

      <div
        id="dp-card"
        className="relative w-full max-w-[1024px] aspect-[1024/900] mx-auto mb-6 overflow-hidden bg-white shadow-lg rounded-xl"
      >
        {/* Decorative elements */}
        <img
          src={assets.logos.dfShapeLogo}
          alt="DevFest Shape"
          className="absolute z-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 top-2 sm:top-4 lg:top-6 xl:top-8 right-3 sm:right-6 lg:right-8 xl:right-12 rotate-12"
        />
        <img
          src={assets.logos.shape}
          alt="Shape"
          className="absolute z-10 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 top-3 sm:top-5 lg:top-8 xl:top-10 left-4 sm:left-8 lg:left-12 xl:left-16"
        />
        <div className="grid w-full h-full grid-cols-12 grid-rows-6">
          {/* Quote Section - Top Left */}
          <div className="col-span-5 rounded-lg border-white border-2 sm:border-4 row-span-3 bg-[#FFE7A5] p-2 sm:p-3 lg:p-4 xl:p-6 flex flex-col justify-center relative">
            <div className="absolute top-1 sm:top-2 lg:top-3 xl:top-4 left-1 sm:left-2 lg:left-3 xl:left-4">
              <div className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-2 rotate-12 border-[#FF7F7F] rounded-sm"></div>
            </div>
            <div className="absolute flex gap-1 top-1 sm:top-2 lg:top-3 xl:top-4 right-1 sm:right-2 lg:right-3 xl:right-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border-2 border-[#80C994] rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border-2 border-[#FF7F7F] rounded-full"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border-2 border-[#6B9BD1] rounded-full"></div>
            </div>
            <div className="text-center px-1">
              <div className="text-sm sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight text-gray-800">
                {hook}
              </div>
            </div>
            <div className="absolute bottom-1 sm:bottom-2 lg:bottom-3 xl:bottom-4 right-1 sm:right-2 lg:right-3 xl:right-4">
              <img
                src={assets.logos.slash}
                alt="Slash"
                className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rotate-12"
              />
            </div>
          </div>

          {/* Avatar Section - Top Right */}
          <div className="col-span-7 row-span-3 border-white border-r-2 border-t-2 sm:border-r-4 sm:border-t-4 bg-[#80C994] flex items-center justify-center">
            <div className="p-1 sm:p-2 lg:p-3 rotate-[9deg] bg-white rounded-lg w-32 h-28 sm:w-48 sm:h-40 lg:w-64 lg:h-52 xl:w-80 xl:h-64 2xl:w-96 2xl:h-80">
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
                  borderRadius: "0",
                }}
              >
                {/* User's uploaded image */}
                <img
                  src={imageURL}
                  alt={name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Name Section - Middle Left */}
          <div className="col-span-5 rounded-lg border-white border-t-0 border-b-2 border-l-2 border-r-2 sm:border-b-4 sm:border-l-4 sm:border-r-4 row-span-2 bg-[#FF7F7F] flex flex-col items-center justify-center text-white px-1">
            <div className="text-sm sm:text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold leading-tight text-center uppercase">
              {name}
            </div>
            <div className="mt-1 text-xs sm:text-sm lg:text-base xl:text-lg font-medium">
              WILL BE AT
            </div>
          </div>

          {/* DevFest Logo Section - Middle Center */}
          <div className="col-span-4 border-white border-r-2 border-t-0 border-b-2 sm:border-r-4 sm:border-b-4 row-span-2 bg-[#80C994] flex flex-col items-center justify-center p-1 sm:p-2 lg:p-3 xl:p-4">
            {/* PNG image for better download compatibility */}
            <img
              src={DFLogoAccraPNG}
              alt="DevFest Accra Logo"
              className="w-full max-w-[80px] sm:max-w-[120px] lg:max-w-[160px] xl:max-w-[200px] 2xl:max-w-[250px] h-auto"
              crossOrigin="anonymous"
            />
          </div>

          {/* Date & Venue Section - Right */}
          <div className="relative col-span-3 rounded-lg row-span-2 border-white border-t-2 border-r-2 border-b-2 border-l-0 sm:border-t-4 sm:border-r-4 sm:border-b-4 bg-[#6B9BD1] text-white p-1 sm:p-2 lg:p-3 xl:p-4 flex flex-col justify-center overflow-hidden">
            <div className="mb-0.5 text-xs sm:text-sm lg:text-base xl:text-lg text-blue-200">
              Date
            </div>
            <div className="mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold leading-tight">
              15 - 16th Nov
            </div>
            <div className="mb-0.5 text-xs sm:text-sm lg:text-base xl:text-lg text-blue-200">
              Venue
            </div>
            <div className="text-xs sm:text-sm lg:text-base xl:text-lg 2xl:text-xl font-bold leading-tight break-words">
              Landmark Event Center
            </div>
            <div className="absolute flex gap-1 top-1 sm:top-2 lg:top-3 xl:top-4 -rotate-12 right-1 sm:right-2 lg:right-3 xl:right-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 border-2 border-[#FF7F7F] rounded-full"></div>
            </div>
          </div>

          {/* City Skyline Section - Bottom */}
          <div className="col-span-12 border-white border-l-2 border-r-2 border-b-2 sm:border-l-4 sm:border-r-4 sm:border-b-4 rounded-lg row-span-1 bg-[#F4D03F] relative overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 z-0 h-full">
              <svg viewBox="0 0 800 100" className="w-full h-full">
                <path
                  d="M0,100 L0,60 L40,60 L40,40 L80,40 L80,20 L120,20 L120,50 L160,50 L160,30 L200,30 L200,70 L240,70 L240,45 L280,45 L280,25 L320,25 L320,55 L360,55 L360,35 L400,35 L400,65 L440,65 L440,40 L480,40 L480,20 L520,20 L520,50 L560,50 L560,30 L600,30 L600,60 L640,60 L640,40 L680,40 L680,20 L720,20 L720,50 L760,50 L760,30 L800,30 L800,100 Z"
                  fill="#E67E22"
                  stroke="#D35400"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full gap-4 mb-8">
        <Button
          onClick={() => onDownload && onDownload()}
          disabled={isDownloading}
          className={`flex items-center gap-2 px-4 py-2 text-white ${
            isDownloading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {isDownloading ? (
            <>
              <div className="w-5 h-5 border-2 border-t-2 border-white rounded-full animate-spin"></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Download className="w-5 h-5" />
              <span>Download Your DP</span>
            </>
          )}
        </Button>
      </div>
    </main>
  );
};

export default DPTemplate;
