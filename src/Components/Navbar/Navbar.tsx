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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleMenuClick = (item: string) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  const getMenuItemClasses = (item: string) => {
    const baseClasses = "flex items-center transition duration-200 relative";
    const activeClasses = "text-[#57CAFF]";
    const inactiveClasses = "text-gray-800 hover:text-gray-600";
    return `${baseClasses} ${activeItem === item ? activeClasses : inactiveClasses}`;
  };

  const getIconClasses = (item: string) => {
    return `mr-1 h-5 w-5 ${activeItem === item ? "text-[#57CAFF]" : ""}`;
  };

  const getMobileIconClasses = (item: string) => {
    return `mr-2 h-5 w-5 ${activeItem === item ? "text-[#57CAFF]" : ""}`;
  };

  return (
    <nav className="relative z-10 mt-5 bg-opacity-90">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left side with DevFest Logo */}
        <div className="flex items-center">
          <a href="/">
            <img src={DFLogo} alt="DevFest" className="h-10 mt-2 lg:mt-0" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          <a
            href="/devfest/speakers"
            className={getMenuItemClasses("speakers")}
            onClick={() => handleMenuClick("speakers")}
          >
            <Volume2 className={getIconClasses("speakers")} />
            <span className="font-medium">Speakers</span>
            {activeItem === "speakers" && (
              <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#57CAFF] rounded-full shadow-[0_0_8px_rgba(87,202,255,0.6)]" />
            )}
          </a>

          <a
            href="/devfest/teams"
            className={getMenuItemClasses("teams")}
            onClick={() => handleMenuClick("teams")}
          >
            <Users className={getIconClasses("teams")} />
            <span className="font-medium">Team</span>
            {activeItem === "teams" && (
              <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#57CAFF] rounded-full shadow-[0_0_8px_rgba(87,202,255,0.6)]" />
            )}
          </a>

          <a
            href="/devfest/faqs"
            className={getMenuItemClasses("faqs")}
            onClick={() => handleMenuClick("faqs")}
          >
            <TbMessage2Question className={getIconClasses("faqs")} />
            <span className="font-medium">FAQs</span>
            {activeItem === "faqs" && (
              <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#57CAFF] rounded-full shadow-[0_0_8px_rgba(87,202,255,0.6)]" />
            )}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <Menu
              className={`absolute h-6 w-6 text-gray-800 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0 rotate-90 scale-0"
                  : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`absolute h-6 w-6 text-gray-800 transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-100 rotate-0 scale-100"
                  : "opacity-0 rotate-90 scale-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 lg:hidden flex flex-col space-y-4 transform transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href="/devfest/speakers"
          className={getMenuItemClasses("speakers")}
          onClick={() => handleMenuClick("speakers")}
        >
          <Volume2 className={getMobileIconClasses("speakers")} />
          <span className="font-medium">Speakers</span>
          {activeItem === "speakers" && (
            <div className="absolute right-2 w-2 h-2 bg-[#57CAFF] rounded-full shadow-[0_0_6px_rgba(87,202,255,0.8)]" />
          )}
        </a>

        <a
          href="/devfest/teams"
          className={getMenuItemClasses("teams")}
          onClick={() => handleMenuClick("teams")}
        >
          <Users className={getMobileIconClasses("teams")} />
          <span className="font-medium">Team</span>
          {activeItem === "teams" && (
            <div className="absolute right-2 w-2 h-2 bg-[#57CAFF] rounded-full shadow-[0_0_6px_rgba(87,202,255,0.8)]" />
          )}
        </a>

        <a
          href="/devfest/faqs"
          className={getMenuItemClasses("faqs")}
          onClick={() => handleMenuClick("faqs")}
        >
          <TbMessage2Question className={getMobileIconClasses("faqs")} />
          <span className="font-medium">FAQs</span>
          {activeItem === "faqs" && (
            <div className="absolute right-2 w-2 h-2 bg-[#57CAFF] rounded-full shadow-[0_0_6px_rgba(87,202,255,0.8)]" />
          )}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
