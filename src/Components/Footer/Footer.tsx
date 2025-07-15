import { assets } from "../../assets/assets";
import { Twitter, Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] text-gray-700 py-8 md:py-12 px-4 w-full mt-10">
      <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
        <h2 className="max-w-xl mx-auto text-xl text-gray-700 mb-2 md:mb-4 font-sans ">
          About DevFest Accra
        </h2>

        <p className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed px-2">
          DevFest Accra brings this global experience to Ghana, uniting local
          developers, designers, and industry experts in an environment that
          fosters learning and innovation. It serves as a platform for
          professionals and aspiring technologists to engage with cutting-edge
          tools, gain hands-on experience, and build meaningful connections
          within the tech ecosystem. By promoting collaboration and knowledge
          sharing, DevFest Accra contributes to the expansion and development of
          Ghana's technology community.
        </p>
      </div>

      {/* Footer Navigation - Responsive grid structure */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 md:gap-8 mb-8 md:mb-12 px-2">
        {/* Column 1 */}
        <div className="flex flex-col space-y-3 md:space-y-4">
          <a
            href="/devfest/speakers"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            Speakers
          </a>
          <a
            href="/devfest/faqs"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            FAQs
          </a>
          <a
            href="/devfest/dp-generator"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            DP Generator
          </a>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-3 md:space-y-4">
          <a
            href="#"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            Venue Information
          </a>

          <a
            href="https://policies.google.com/privacy"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            Privacy Policy
          </a>
          <a
            href="https://linktr.ee/gdgaccra"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            Join the Community
          </a>
        </div>

        {/* Column 3 - Full width on mobile, normal on desktop */}
        <div className="flex flex-col space-y-3 md:space-y-4 col-span-2 sm:col-span-2 md:col-span-1 mt-4 md:mt-0">
          <a
            href="https://linktr.ee/gdgaccra"
            className="hover:text-gray-500 transition text-sm md:text-base"
          >
            Contact Us
          </a>
          <div>
            <p className="mb-2 md:mb-3 text-sm md:text-base">Follow Us:</p>
            <div className="flex flex-wrap gap-3 md:gap-2">
              <a
                href="https://x.com/gdgaccra"
                className="bg-[#FFE7A5] p-2 rounded-full hover:bg-gray-500 transition flex items-center justify-center"
              >
                <Twitter size={16} className="md:w-5 md:h-5 text-gray-700" />
              </a>
              <a
                href="https://www.instagram.com/gdgaccra?igsh=MWhmY21nbmJhZzRocw=="
                className="bg-[#CCF6C5] p-2 rounded-full hover:bg-gray-500 transition flex items-center justify-center"
              >
                <Instagram size={16} className="md:w-5 md:h-5 text-gray-700" />
              </a>
              <a
                href="https://www.facebook.com/gdgaccra/"
                className="bg-[#C3ECF6] p-2 rounded-full hover:bg-gray-500 transition flex items-center justify-center"
              >
                <Facebook size={16} className="md:w-5 md:h-5  text-gray-700" />
              </a>
              <a
                href="https://m.youtube.com/@gdgaccra"
                className="bg-[#F8D8D8] p-2 rounded-full hover:bg-gray-500 transition flex items-center justify-center"
              >
                <Youtube size={16} className="md:w-5 md:h-5  text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/company/gdgaccra/"
                className="bg-[#ff7daf] p-2 rounded-full hover:bg-gray-500 transition flex items-center justify-center"
              >
                <Linkedin size={16} className="md:w-5 md:h-5  text-gray-700" />
              </a>
            </div>
          </div>

          {/* <a
            href='#'
            className='hover:text-gray-500 transition text-sm md:text-base'
          >
            Community Guidelines
          </a> */}
        </div>
      </div>

      {/* Bottom Section - Logo and Text */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center pt-6 border-t border-gray-300">
        <div className="flex flex-col md:flex-row items-center md:items-center justify-center">
          <div className="mr-3 mb-2 md:mb-0">
            <img
              src={assets.logos.dfShapeLogo}
              alt=""
              className="w-20 h-20 lg:w-40 lg:h-40"
            />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold">
            DevFest Accra 2025
          </h2>
          <img
            src={assets.logos.shape}
            alt=""
            className="lg:hidden md:hidden block "
          />
        </div>
      </div>
      <img
        src={assets.logos.slash}
        alt=""
        className="hidden lg:block md:block "
      />
    </footer>
  );
};

export default Footer;
