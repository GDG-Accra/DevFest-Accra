export const Heart = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <svg
        className="w-[80px] h-[60px] md:w-[95px] md:h-[80px] lg:w-[100px] lg:h-[90px] xl:w-[116px] xl:h-[97px] 2xl:w-[232px] 2xl:h-[194px]"
        width="100%"
        height="100%"
        viewBox="0 0 96 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M37.9919 41.4836C28.4264 34.7496 16.2084 35.6233 10.7043 43.4389C5.20015 51.2546 8.48796 63.0488 18.0534 69.7828"
          stroke="#1E1E1E"
          stroke-width="5"
          stroke-linejoin="round"
        />
        <path
          d="M57.9271 13.1891C48.3603 6.44719 36.1423 7.32086 30.6382 15.1365C25.134 22.9522 28.4265 34.7497 37.992 41.4837"
          stroke="#1E1E1E"
          stroke-width="5"
          stroke-linejoin="round"
        />
        <path
          d="M32.9266 75.5478L75.7759 67.9545L68.184 25.1131"
          stroke="#1E1E1E"
          stroke-width="5"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};
