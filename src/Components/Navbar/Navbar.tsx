import React, { useState, useEffect, useRef } from "react";
import { Volume2, Users, Menu, X } from "lucide-react";
import { TbMessage2Question } from "react-icons/tb";
import DFLogo from "../../assets/images/Logos/DFLogo-Accra.svg";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes("/speakers")) {
      setActiveItem("speakers");
    } else if (currentPath.includes("/teams")) {
      setActiveItem("teams");
    } else if (currentPath.includes("/faqs")) {
      setActiveItem("faqs");
    } else {
      setActiveItem("");
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const handleMenuClick = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const getMenuItemClasses = (item: string) => {
    const baseClasses = "flex items-center transition-all duration-200 relative px-3 py-2 rounded-lg";
    const activeClasses = "text-[#57CAFF] bg-[#57CAFF]/5";
    const inactiveClasses = "text-gray-800 hover:text-gray-600 hover:bg-gray-50";
    return `${baseClasses} ${activeItem === item ? activeClasses : inactiveClasses}`;
  };

  const getIconClasses = (item: string) => {
    return `mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 ${activeItem === item ? "text-[#57CAFF]" : ""}`;
  };

  const getMobileIconClasses = (item: string) => {
    return `mr-3 h-5 w-5 flex-shrink-0 ${activeItem === item ? "text-[#57CAFF]" : ""}`;
  };

  return (
    <nav className="relative z-50  mg:mt-20 mt-10">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Left side with DevFest Logo */}
          <div className="flex items-center flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src={DFLogo} 
                alt="DevFest" 
                className="h-8 sm:h-9 lg:h-10 w-auto object-contain transition-transform hover:scale-105" 
              />
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <a
              href="/devfest/speakers"
              className={getMenuItemClasses("speakers")}
              onClick={() => handleMenuClick("speakers")}
            >
              <Volume2 className={getIconClasses("speakers")} />
              <span className="font-medium text-sm xl:text-base whitespace-nowrap">Speakers</span>
              {activeItem === "speakers" && (
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#57CAFF] rounded-full shadow-[0_0_8px_rgba(87,202,255,0.6)]" />
              )}
            </a>

            <a
              href="/devfest/teams"
              className={getMenuItemClasses("teams")}
              onClick={() => handleMenuClick("teams")}
            >
              <Users className={getIconClasses("teams")} />
              <span className="font-medium text-sm xl:text-base whitespace-nowrap">Team</span>
              {activeItem === "teams" && (
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#57CAFF] rounded-full shadow-[0_0_8px_rgba(87,202,255,0.6)]" />
              )}
            </a>

            <a
              href="/devfest/faqs"
              className={getMenuItemClasses("faqs")}
              onClick={() => handleMenuClick("faqs")}
            >
              <TbMessage2Question className={getIconClasses("faqs")} />
              <span className="font-medium text-sm xl:text-base whitespace-nowrap">FAQs</span>
              {activeItem === "faqs" && (
                <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#57CAFF] rounded-full shadow-[0_0_8px_rgba(87,202,255,0.6)]" />
              )}
            </a>
          </div>

          {/* Mobile Menu Button - Visible on mobile and tablet */}
          <button
            ref={buttonRef}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#57CAFF]/20"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`absolute h-5 w-5 sm:h-6 sm:w-6 text-gray-800 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-0 rotate-90 scale-0"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute h-5 w-5 sm:h-6 sm:w-6 text-gray-800 transition-all duration-300 ${
                  isMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 rotate-90 scale-0"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40" 
             onClick={() => setIsMenuOpen(false)} />
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden z-50 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0 max-h-screen"
            : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          <a
            href="/devfest/speakers"
            className={`${getMenuItemClasses("speakers")} w-full justify-between`}
            onClick={() => handleMenuClick("speakers")}
          >
            <div className="flex items-center">
              <Volume2 className={getMobileIconClasses("speakers")} />
              <span className="font-medium text-base">Speakers</span>
            </div>
            {activeItem === "speakers" && (
              <div className="w-2 h-2 bg-[#57CAFF] rounded-full shadow-[0_0_6px_rgba(87,202,255,0.8)] flex-shrink-0" />
            )}
          </a>

          <a
            href="/devfest/teams"
            className={`${getMenuItemClasses("teams")} w-full justify-between`}
            onClick={() => handleMenuClick("teams")}
          >
            <div className="flex items-center">
              <Users className={getMobileIconClasses("teams")} />
              <span className="font-medium text-base">Team</span>
            </div>
            {activeItem === "teams" && (
              <div className="w-2 h-2 bg-[#57CAFF] rounded-full shadow-[0_0_6px_rgba(87,202,255,0.8)] flex-shrink-0" />
            )}
          </a>

          <a
            href="/devfest/faqs"
            className={`${getMenuItemClasses("faqs")} w-full justify-between`}
            onClick={() => handleMenuClick("faqs")}
          >
            <div className="flex items-center">
              <TbMessage2Question className={getMobileIconClasses("faqs")} />
              <span className="font-medium text-base">FAQs</span>
            </div>
            {activeItem === "faqs" && (
              <div className="w-2 h-2 bg-[#57CAFF] rounded-full shadow-[0_0_6px_rgba(87,202,255,0.8)] flex-shrink-0" />
            )}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;