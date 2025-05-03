import BeFirstImage from "../../assets/images/BeFirst/BeFirstImage.svg";
import LinkRotate from "../../assets/images/BeFirst/link.gif";

export const BeFirst = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4 p-6 items-center justify-center
      sm:gap-5 sm:p-8
      md:gap-6 md:p-10
      lg:gap-8 lg:p-12
      xl:gap-[43px] xl:p-16
      bg-[#C3ECF6]">
      <img 
        src={BeFirstImage} 
        alt="Be first to know!" 
        className="w-full max-w-[500px] h-auto rounded-lg object-contain
          sm:max-w-[600px] sm:h-[400px]
          md:max-w-[700px] md:h-[450px]
          lg:w-[62.5%] lg:max-w-none lg:h-auto
          xl:w-[62.5%]
          2xl:w-[794px] 2xl:h-[550px] 2xl:rounded-[15px]
          3xl:w-[900px] 3xl:h-[640px]"
      />
      <div className="flex flex-col gap-4 w-full justify-between
        sm:gap-5
        md:gap-6
        lg:gap-8
        2xl:w-[443px] 2xl:h-[550px] 2xl:gap-[58px]
        3xl:w-[500px] 3xl:h-[640px] 3xl:gap-[65px]">
        <div className="flex flex-col gap-1
          md:gap-2
          lg:gap-3
          2xl:gap-[4px]
          3xl:gap-[6px]">
          <p className="text-base text-left text-[#1E1E1E] font-nunito
            sm:text-lg
            md:text-[20px]
            lg:text-[24px]
            2xl:text-[30px]
            3xl:text-[36px]">
            GDG ACCRA
          </p>
          <h2 className="text-2xl font-bold text-[#1E1E1E] font-inter leading-normal
            sm:text-3xl
            md:text-[32px]
            lg:text-[40px]
            2xl:text-[50px]
            3xl:text-[60px] 3xl:leading-relaxed">
            Be the First to Know!
          </h2>
        </div>
        <p className="text-base text-[#444444] font-inter leading-normal
          sm:text-lg
          md:text-[20px]
          lg:text-[24px]
          2xl:text-[30px]
          3xl:text-[36px]">
          Stay updated on all our activities, events, and webinars. Get the
          inside scoop on everything happening in the GDG Accra community.
        </p>
        <button className="flex items-center justify-center w-full bg-[#4285F4] backdrop-blur-[24.3px] rounded-lg px-4 py-3 gap-2
          sm:px-5 sm:py-4
          md:rounded-xl md:w-[250px]
          lg:w-[280px]
          xl:w-[290px]
          2xl:w-[303px] 2xl:h-[76px] 2xl:px-[20px] 2xl:py-[22px] 2xl:rounded-[15px] 2xl:gap-[10px]
          3xl:w-[350px] 3xl:h-[90px] 3xl:px-[24px] 3xl:py-[26px]">
          <span className="text-base font-bold text-[#FDFDFD] font-inter
            sm:text-lg
            md:text-[18px]
            lg:text-[20px]
            2xl:text-[24px]
            3xl:text-[28px]">
            Let&apos;s Go
          </span>
          <div className="bg-white rounded-full p-[2px] w-[20px] h-[20px]
            sm:p-[3px] sm:w-[24px] sm:h-[24px]
            2xl:w-[32px] 2xl:h-[32px]
            3xl:w-[38px] 3xl:h-[38px]">
            <img
              src={LinkRotate}
              alt="icon"
              className="w-full h-full object-contain"
            />
          </div>
        </button>
      </div>
    </section>
  );
};
