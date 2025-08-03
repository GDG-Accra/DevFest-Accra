import React from "react";
import { Download } from "lucide-react";
import { Button } from "../../Components/DPForm/Button";

import DFShapeSet from "../../assets/DPTemplate/DF25 sym2.png";
import DFShapeSet2 from "../../assets/DPTemplate/DF25 sym.png";
import DFLogo from "../../assets/DPTemplate/DF25-Logo-accra.png";
import DF25 from "../../assets/DPTemplate/df25.png";
import Union from "../../assets/DPTemplate/Union.png";
import Log2 from "../../assets/DPTemplate/log2.png";
import Log1 from "../../assets/DPTemplate/log1.png";
import Pattern from "../../assets/DPTemplate/pattern.png";
import Vector from "../../assets/DPTemplate/Vector.png";

interface FinalDPBannerProps {
  name: string;
  hook: string;
  imageURL: string;
  onDownload: () => void;
  onBack: () => void;
  isDownloading?: boolean;
}

const DPTemplate: React.FC<FinalDPBannerProps> = ({
  name,
  hook,
  imageURL,
  onDownload,
  isDownloading = false,
}) => {
  return (
    <main className='flex flex-col items-center w-full min-h-screen px-2 sm:px-4 py-4 sm:py-6 mx-auto'>
      <div className='mb-4 sm:mb-8 text-center'>
        <div className='mb-2 text-sm sm:text-base text-gray-600'>Viola ✨</div>
        <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800'>
          Here's your DP
        </h1>
      </div>

      {/* Container with proper aspect ratio and responsive sizing */}
      <div className='w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mb-4 sm:mb-6'>
        <div
          id='dp-card'
          className='relative w-full bg-white shadow-xl aspect-square overflow-hidden font-sans'
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          {/* Background Vector */}
          <div className='absolute inset-0'>
            <img
              src={Vector}
              alt='Background'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Top-left Shapes - Responsive positioning */}
          <div className='absolute top-[2%] left-[4%] w-[32%] h-[10%]'>
            <img
              src={DFShapeSet}
              alt='Top Symbols'
              className='w-full h-full object-contain'
            />
          </div>

          {/* Top-right Pattern - Responsive positioning */}
          <div className='absolute right-0 w-[48%] h-[7%]'>
            <img
              src={Pattern}
              alt='Top right pattern'
              className='w-full h-full object-contain'
            />
          </div>

          {/* Tag Hook Bubble - Responsive positioning and sizing */}
          <div className='absolute top-[13%] left-[4%] w-[36%] h-[26%]'>
            <div className='relative w-full h-full'>
              <svg className='absolute inset-0 w-full h-full'>
                <defs>
                  <clipPath
                    id='tagBubbleShape'
                    clipPathUnits='objectBoundingBox'
                  >
                    <path
                      d='M 0.16 0.1
                         L 0.84 0.1
                         Q 0.94 0.1 0.94 0.26
                         L 0.94 0.5
                         Q 0.94 0.66 0.84 0.66
                         L 0.6 0.66
                         Q 0.55 0.66 0.55 0.75
                         Q 0.55 0.9 0.46 0.9
                         L 0.16 0.9
                         Q 0.06 0.9 0.06 0.73
                         L 0.06 0.26
                         Q 0.06 0.1 0.16 0.1
                         Z'
                    />
                  </clipPath>
                </defs>
              </svg>

              <div
                className='w-full h-full bg-[#FFB800] border-2 border-black'
                style={{ clipPath: "url(#tagBubbleShape)" }}
              />

              <div className='absolute inset-0 flex items-center justify-center px-[8%]'>
                <div
                  className='text-black font-bold text-center leading-tight'
                  style={{ fontSize: "clamp(0.7rem, 2.5vw, 1.1rem)" }}
                >
                  {hook}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image - Responsive positioning and sizing */}
          <div className='absolute lg:top-[22%] top-[15%] right-[8%] lg:w-[28%] lg:h-[55%] w-[29%] h-[45%]'>
            <div className='w-full h-full overflow-hidden relative'>
              <img
                src={imageURL}
                alt={name}
                className='w-full h-full object-cover'
                style={{ clipPath: "url(#customShape)" }}
                crossOrigin='anonymous'
              />
              <svg className='absolute inset-0 w-full h-full'>
                <defs>
                  <clipPath id='customShape' clipPathUnits='objectBoundingBox'>
                    <path d='M0.18,0 L0.82,0 Q1,0 1,0.12 L1,0.88 Q1,1 0.82,1 L0.29,1 Q0.18,1 0.18,0.93 L0.18,0.83 Q0.07,0.83 0.07,0.76 Q0.07,0.69 0.18,0.69 L0.18,0.12 Q0.18,0 0.18,0 Z' />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Name Section Bubble - Responsive positioning and sizing */}
          <div className='absolute top-[40%] left-[4%] w-[35%] h-[18%]'>
            <div className='bg-[#5095F1] text-white rounded-[10%]  p-[4%] shadow-lg flex flex-col justify-between'>
              <div className='flex items-start'>
                <img
                  src={Log2}
                  alt='Quote marks'
                  className='w-[18%] h-auto object-contain'
                />
              </div>
              <div className='flex-1 flex flex-col justify-center'>
                <div
                  className='font-bold uppercase leading-tight text-center'
                  style={{ fontSize: "clamp(0.7rem, 2.5vw, 1.2rem)" }}
                >
                  {name}
                </div>
                <div
                  className='font-semibold mt-1 text-center'
                  style={{ fontSize: "clamp(0.5rem, 1.8vw, 0.9rem)" }}
                >
                  WILL BE AT
                </div>
              </div>
              <div className='flex justify-end'>
                <img
                  src={Log1}
                  alt='Quote marks'
                  className='w-[18%] h-auto object-contain'
                />
              </div>
            </div>
          </div>

          {/* DevFest Logo - Responsive positioning and sizing */}
          <div className='absolute lg:bottom-[30%] bottom-[33%] lg:left-[28%] left-[39%] w-[25%] h-[8%]'>
            <img
              src={DFLogo}
              alt='DevFest Accra Logo'
              className='w-full h-full object-contain'
              crossOrigin='anonymous'
            />
          </div>

          {/* Event Details - Responsive positioning and sizing */}
          <div className='absolute bottom-[20%] lg:left-[24%] left-[25%] w-[72%] space-y-[1%]'>
            <div
              className='flex items-center text-black font-medium'
              style={{ fontSize: "clamp(0.55rem, 1.6vw, 0.8rem)" }}
            >
              <span className='bg-[#FFB800] text-black px-[6px] py-[3px] rounded-md font-semibold flex items-center whitespace-nowrap text-xs'>
                Date
                <img
                  src={Union}
                  alt='Arrow'
                  className='w-[10px] h-[10px] ml-1'
                />
              </span>
              <span className='ml-2 truncate'>Saturday, 4th October 2025</span>
            </div>
            <div
              className='flex items-center text-black font-medium'
              style={{ fontSize: "clamp(0.55rem, 1.6vw, 0.8rem)" }}
            >
              <span className='bg-[#FFB800] text-black px-[6px] py-[3px] rounded-md font-semibold flex items-center whitespace-nowrap text-xs'>
                Venue
                <img
                  src={Union}
                  alt='Arrow'
                  className='w-[10px] h-[10px] ml-1'
                />
              </span>
              <span className='ml-2 truncate'>
                ISSER Conference Hall - University of Ghana, Legon
              </span>
            </div>
          </div>

          {/* Bottom-left 15 years logo - Responsive positioning and sizing */}
          <div className='absolute bottom-[13%] left-[1%] w-[15%] h-[15%]'>
            <img
              src={DF25}
              alt='15 Years GDG Accra'
              className='w-full h-full object-contain'
            />
          </div>

          {/* Bottom Decorative Shapes - Responsive positioning and sizing */}
          <div className='absolute top-[60%] left-[6%] w-[65%] h-[65%]'>
            <img
              src={DFShapeSet2}
              alt='Bottom symbols'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
      </div>

      <div className='flex justify-center w-full gap-2 sm:gap-4 px-4'>
        <Button
          onClick={() => onDownload && onDownload()}
          disabled={isDownloading}
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base text-white rounded-lg transition-colors ${
            isDownloading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gray-800 hover:bg-gray-700"
          }`}
        >
          {isDownloading ? (
            <>
              <div className='w-4 h-4 sm:w-5 sm:h-5 border-2 border-t-2 border-white rounded-full animate-spin'></div>
              <span>Generating...</span>
            </>
          ) : (
            <>
              <Download className='w-4 h-4 sm:w-5 sm:h-5' />
              <span>Download Your DP</span>
            </>
          )}
        </Button>
      </div>
    </main>
  );
};

export default DPTemplate;
