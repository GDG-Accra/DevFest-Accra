import AboutImage from "../../assets/images/About/AboutImage.svg";
import { Heart } from "../../assets/elements/heart";
import { Code } from "../../assets/elements/code";

export const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left side: Title and description */}
        <div className="lg:w-1/2 space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About
              <br />
              DevFest Accra
            </h1>
            <div className="relative">
              <Code className="w-24 h-24 text-pink-400" />
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
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

        {/* Right side: Image */}
        <div className="lg:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden">
            <img
              src={AboutImage}
              alt="DevFest Accra community"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute md:bottom-4 right-4">
            <Heart className="w-16 h-16 text-gray-800" />
          </div>
        </div>
      </div>
    </section>
  );
};