import AboutImage from "../../assets/images/About/AboutImage.svg";
import { Code } from "../../assets/elements/code";
import { Heart } from "../../assets/elements/heart";

export const AboutSection = () => {
  return (
    <section
      className="w-full relative flex flex-col gap-4 px-4 mx-auto
        md:gap-5 
        lg:px-[60.5px] lg:gap-6 
        xl:items-center
        2xl:w-[1391px] 2xl:gap-[38px] 
        3xl:w-[1512px]
        my-52"
    >
      <div
        className="flex items-center w-full gap-3 justify-start
          md:gap-4 
          xl:gap-8"
      >
        <h1
          className="text-3xl font-inter font-bold text-[#1E1E1E] leading-tight
            md:text-[40px] md:leading-none
            lg:text-[50px]
            2xl:text-[50px]
            lg:text-left"
        >
          About&nbsp;
          <br className="md:mb-2 lg:mb-3" />
          DevFest Accra
        </h1>

        <Code className="w-6" />
      </div>

      <div
        className="flex flex-col items-center justify-between w-full gap-6 
          md:gap-8
          xl:flex-row"
      >
        <p
          className="text-base leading-normal font-normal text-[#444444] lg:max-w-[50%]
            sm:text-lg
            md:text-[20px]
            lg:text-[24px]
            2xl:text-[30px]
            3xl:text-[36px]"
        >
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
      <Heart
        className="absolute right-0 bottom-0
          sm:right-2 
          md:right-3 
          lg:right-10
          2xl:-right-3"
      />
    </section>
  );
};
