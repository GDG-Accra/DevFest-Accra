import React from "react";
import { Button } from "../../Components/DPForm/Button";
import { Download } from "lucide-react";
import DFShapeLogo from "../../assets/DPTemplate/DFShapeLogo.svg";
import shape from "../../assets/DPTemplate/shape.svg";
import slash from "../../assets/DPTemplate/slash.svg";

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
  isDownloading = false
}) => {
  return (
    <main className="flex flex-col items-center max-w-6xl px-6 py-8 mx-auto">
      <div className="mb-12 text-center">
        <div className="mb-2 text-gray-600">Viola ✨</div>
        <h1 className="text-4xl font-bold text-gray-800">Here's your DP</h1>
      </div>

      <div
        id="dp-card-only"
        className="relative w-[1024px] h-[900px] mx-auto mb-8 overflow-hidden bg-white shadow-lg rounded-2xl"
      >
        {/* Decorative elements */}
        <img
          src={DFShapeLogo}
          alt="DevFest Shape"
          className="absolute z-10 w-20 h-20 top-8 right-12 rotate-12"
        />
        <img
          src={shape}
          alt="Shape"
          className="absolute z-10 w-20 h-20 top-10 left-16"
        />
        <div className="grid w-full h-full grid-cols-12 grid-rows-6">
          {/* Quote Section - Top Left */}
          <div className="col-span-5 rounded-lg border-white border-4 row-span-3 bg-[#FFE7A5] p-6 flex flex-col justify-center relative">
            <div className="absolute top-4 left-4">
              <div className="w-6 h-6 border-2 rotate-12 border-[#FF7F7F] rounded-sm"></div>
            </div>
            <div className="absolute flex gap-1 top-4 right-4">
              <div className="w-4 h-4 border-2 border-[#80C994] rounded-full"></div>
              <div className="w-4 h-4 border-2 border-[#FF7F7F] rounded-full"></div>
              <div className="w-4 h-4 border-2 border-[#6B9BD1] rounded-full"></div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold leading-tight text-gray-800">
                {hook}
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <img src={slash} alt="Slash" className="w-20 h-20 rotate-12" />
            </div>
          </div>

          {/* Avatar Section - Top Right */}
          <div className="col-span-7  row-span-3 border-white border-r-4 border-t-4 bg-[#80C994] flex items-center justify-center">
            <div className="p-3 rotate-[9deg] bg-white rounded-lg w-96 h-80">
              <div
                className="relative w-full h-full overflow-hidden"
                style={{
                  clipPath:
                    "polygon(0% 15%, 15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%)",
                  borderRadius: "0"
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
          <div className="col-span-5 rounded-lg border-white border-t-0 border-b-4 border-l-4 border-r-4 row-span-2 bg-[#FF7F7F] flex flex-col items-center justify-center text-white">
            <div className="text-4xl font-bold leading-tight text-center uppercase">
              {name}
            </div>
            <div className="mt-2 text-lg font-medium">WILL BE AT</div>
          </div>

          {/* DevFest Logo Section - Middle Center */}
          <div className="col-span-4 border-white border-r-4 border-t-0 border-b-4 row-span-2 bg-[#80C994] flex flex-col items-center justify-center">
            <div className="flex items-center gap-2 text-6xl font-bold text-gray-800">
              <span className="text-6xl text-yellow-500">{"{"}</span>
              <span>DevFest</span>
              <span className="text-6xl text-yellow-500">{"}"}</span>
            </div>
            <div className="px-4 py-1 mt-2 font-medium text-gray-800 bg-white rounded-full">
              Accra
            </div>
          </div>

          {/* Date & Venue Section - Right */}
          <div className="relative col-span-3 rounded-lg row-span-2 border-white border-t-4 border-r-4 border-b-4 border-l-0 bg-[#6B9BD1] text-white p-4 flex flex-col justify-center">
            <div className="mb-1 text-lg text-blue-200">Date</div>
            <div className="mb-3 text-2xl font-bold">15 - 16th Nov</div>
            <div className="mb-1 text-lg text-blue-200">Venue</div>
            <div className="text-2xl font-bold leading-tight">
              Landmark Event Center
            </div>
            <div className="absolute flex gap-1 top-4 -rotate-12 right-4">
              <div className="w-4 h-4 border-2 border-[#FF7F7F] rounded-full"></div>
            </div>
          </div>

          {/* City Skyline Section - Bottom */}
          <div className="col-span-12 border-white border-l-4 border-r-4 border-b-4 rounded-lg row-span-1 bg-[#F4D03F] relative overflow-hidden">
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

      <div className="flex justify-center w-full gap-4 mb-12">
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
