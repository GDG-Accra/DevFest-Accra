import AboutImage from "../../assets/images/About/AboutImage.svg";
import { Code } from "../../assets/elements/code";
import { Heart } from "../../assets/elements/heart";

export const AboutSection = () => {
  return (
    <section className="w-full relative flex flex-col gap-4 px-4 lg:px-[60.5px] md:gap-5 lg:gap-6 2xl:w-[1391px] 2xl:gap-[38px] my-52">
      <div className="flex gap-3 md:gap-4 2xl:w-[485.91px] 2xl:gap-[20px] justify-center items-center xl:justify-start">
        <h1 className="text-3xl md:text-[40px] lg:text-[50px] leading-tight md:leading-none font-inter font-bold text-[#1E1E1E] 2xl:text-[50px] text-center xl:text-left">
          About&nbsp;
          <br className="md:mb-2 lg:mb-3" />
          DevFest Accra
        </h1>

        <Code className="w-6" />
      </div>

      <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-6 md:gap-8 2xl:w-[1391px] 2xl:h-[538.5px]">
        <p className="text-lg md:text-[23px] lg:text-[30px] leading-[130%] xl:leading-[110%] font-normal text-[#444444] lg:max-w-[50%]">
          DevFest Accra brings this global experience to Ghana, uniting local
          developers, designers, and industry experts in an environment that
          fosters learning and innovation. It serves as a platform for
          professionals and aspiring technologists to engage with cutting-edge
          tools, gain hands-on experience, and build meaningful connections
          within the tech ecosystem. By promoting collaboration and knowledge
          sharing, DevFest Accra contributes to the expansion and development of
          Ghana's technology community.
        </p>
        <img
          src={AboutImage}
          alt="About Image"
          className="md:max-w-[70%] xl:max-w-[50%] object-contain"
        />
      </div>
      <Heart className="absolute right-0 sm:right-2 md:right-3 lg:right-10 bottom-0" />
    </section>
  );
};
