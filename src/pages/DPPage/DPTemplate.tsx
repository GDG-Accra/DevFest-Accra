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
import Shape from "../../assets/DPTemplate/newshape.png";

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
          <div className='absolute top-[13%] left-[4%] w-[28%] h-[20%]'>
            <div className='relative w-full h-full'>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 736 473'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='absolute inset-0'
              >
                <mask
                  id='path-1-outside-1_73_8'
                  maskUnits='userSpaceOnUse'
                  x='0.318359'
                  y='0.046875'
                  width='735'
                  height='473'
                  fill='black'
                >
                  <rect
                    fill='white'
                    x='0.318359'
                    y='0.046875'
                    width='735'
                    height='473'
                  />
                  <path d='M636.534 8.04688C686.604 8.04693 727.193 48.6364 727.193 98.7061V230.962C727.193 281.032 686.604 321.621 636.534 321.621H376.952C369.118 324.088 359.083 332.069 352.824 350.436V372.817C352.824 423.476 311.756 464.543 261.098 464.543H100.044C49.3855 464.543 8.31851 423.476 8.31836 372.817V98.7061C8.31844 48.6365 48.908 8.0471 98.9775 8.04688H636.534Z' />
                </mask>
                <path
                  d='M636.534 8.04688C686.604 8.04693 727.193 48.6364 727.193 98.7061V230.962C727.193 281.032 686.604 321.621 636.534 321.621H376.952C369.118 324.088 359.083 332.069 352.824 350.436V372.817C352.824 423.476 311.756 464.543 261.098 464.543H100.044C49.3855 464.543 8.31851 423.476 8.31836 372.817V98.7061C8.31844 48.6365 48.908 8.0471 98.9775 8.04688H636.534Z'
                  fill='#F9AB00'
                />
                <path
                  d='M636.534 8.04688V0.046875V8.04688ZM727.193 98.7061H735.193V98.706L727.193 98.7061ZM727.193 230.962L735.193 230.962V230.962H727.193ZM636.534 321.621V329.621V321.621ZM376.952 321.621V313.621H375.722L374.549 313.991L376.952 321.621ZM352.824 350.436L345.252 347.855L344.824 349.11V350.436H352.824ZM352.824 372.817L360.824 372.817V372.817H352.824ZM100.044 464.543L100.044 472.543H100.044V464.543ZM8.31836 372.817H0.318359V372.817L8.31836 372.817ZM8.31836 98.7061L0.318359 98.706V98.7061H8.31836ZM98.9775 8.04688V0.046875H98.9775L98.9775 8.04688ZM636.534 8.04688V16.0469C682.186 16.0469 719.193 53.0547 719.193 98.7061L727.193 98.7061L735.193 98.706C735.193 44.2181 691.022 0.0469317 636.534 0.046875V8.04688ZM727.193 98.7061H719.193V230.962H727.193H735.193V98.7061H727.193ZM727.193 230.962L719.193 230.962C719.193 276.613 682.186 313.621 636.534 313.621V321.621V329.621C691.022 329.621 735.193 285.45 735.193 230.962L727.193 230.962ZM636.534 321.621V313.621H376.952V321.621V329.621H636.534V321.621ZM376.952 321.621L374.549 313.991C363.757 317.389 352.135 327.656 345.252 347.855L352.824 350.436L360.397 353.016C366.031 336.481 374.478 330.788 379.355 329.252L376.952 321.621ZM352.824 350.436H344.824V372.817H352.824H360.824V350.436H352.824ZM352.824 372.817L344.824 372.817C344.824 419.058 307.338 456.543 261.098 456.543V464.543V472.543C316.175 472.543 360.824 427.894 360.824 372.817L352.824 372.817ZM261.098 464.543V456.543H100.044V464.543V472.543H261.098V464.543ZM100.044 464.543L100.044 456.543C53.8038 456.543 16.3185 419.058 16.3184 372.817L8.31836 372.817L0.318359 372.817C0.318518 427.894 44.9672 472.543 100.044 472.543L100.044 464.543ZM8.31836 372.817H16.3184V98.7061H8.31836H0.318359V372.817H8.31836ZM8.31836 98.7061L16.3184 98.7061C16.3184 53.0548 53.3263 16.0471 98.9776 16.0469L98.9775 8.04688L98.9775 0.046875C44.4898 0.0471163 0.318444 44.2182 0.318359 98.706L8.31836 98.7061ZM98.9775 8.04688V16.0469H636.534V8.04688V0.046875H98.9775V8.04688Z'
                  fill='black'
                  mask='url(#path-1-outside-1_73_8)'
                />
              </svg>
              <img
                src={Shape}
                alt='shape'
                className='absolute top-[69%] left-[79%]  lg:w-8 lg:h-8  w-5 h-5'
              />

              <div className='absolute inset-0 flex items-center justify-center px-[8%]'>
                <div
                  className='text-black font-bold text-center leading-tight'
                  style={{ fontSize: "clamp(0.4rem, 2vw, 0.9rem)" }}
                >
                  {hook}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image - Responsive positioning and sizing */}
          {/* <div className='absolute lg:top-[22%] top-[15%] right-[8%] lg:w-[28%] lg:h-[55%] w-[29%] h-[45%]'> */}
          <div className='absolute lg:top-[4%] top-[12%] right-[4%] w-[40%] h-[50%] lg:w-[40%] lg:h-[80%] '>

            <div className='w-full h-full relative overflow-hidden'>
              {/* SVG for clipPath definition - must be visible for clipPath to work */}
              <svg
                className='absolute inset-0 w-full h-full'
                viewBox='0 0 744 1131'
              >
                <defs>
                  <clipPath id='customShape' clipPathUnits='userSpaceOnUse'>
                    <path d='M582.053 12.3018C664.521 12.3018 731.374 79.1552 731.374 161.623V969.023C731.374 1051.49 664.521 1118.34 582.053 1118.34H386.869C304.401 1118.34 237.548 1051.49 237.548 969.023V905.029H161.82C79.3527 905.029 12.4992 838.176 12.499 755.708V161.623C12.499 79.1553 79.3526 12.3019 161.82 12.3018H582.053Z' />
                  </clipPath>
                </defs>

                {/* Image with clipping applied */}
                <image
                  href={imageURL}
                  x='0'
                  y='0'
                  width='744'
                  height='1131'
                  preserveAspectRatio='xMidYMid slice'
                  clipPath='url(#customShape)'
                  crossOrigin='anonymous'
                />

                {/* Border path - on top */}
                <path
                  d='M582.053 12.3018C664.521 12.3018 731.374 79.1552 731.374 161.623V969.023C731.374 1051.49 664.521 1118.34 582.053 1118.34H386.869C304.401 1118.34 237.548 1051.49 237.548 969.023V905.029H161.82C79.3527 905.029 12.4992 838.176 12.499 755.708V161.623C12.499 79.1553 79.3526 12.3019 161.82 12.3018H582.053Z'
                  fill='none'
                  stroke='black'
                  strokeWidth='8'
                />
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
          className={`flex items-center gap-2 px-3 sm:px-4 py-2 text-sm sm:text-base text-white rounded-lg transition-colors ${isDownloading
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
