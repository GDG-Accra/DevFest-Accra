import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Users, Menu, X } from 'lucide-react';
import { TbMessage2Question } from 'react-icons/tb';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
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

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="relative z-10 flex items-center justify-between px-10 py-3 md:mt-10 bg-opacity-90 ">
      {/* Left side with DevFest Logo and Year  shadow-sm*/}
      <div className="flex items-center">
        <div className="flex items-center">
          {/* DevFest logo as an image */}
          <img src="/path-to-your-devfest-logo.png" alt="DevFest" className="h-8" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <a href="#speakers" className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200">
          <Volume2 className="mr-1 h-5 w-5" />
          <span className="font-medium">Speakers</span>
        </a>
        
        <a href="#team" className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200">
          <Users className="mr-1 h-5 w-5" />
          <span className="font-medium">Team</span>
        </a>
        
        <a href="#faqs" className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200">
          <TbMessage2Question className="mr-1 h-5 w-5" />
          <span className="font-medium">FAQs</span>
        </a>
      </div>

      {/* Mobile Menu Button with Animation */}
      <button 
        ref={buttonRef}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors duration-200" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6 flex items-center justify-center">
          <Menu className={`absolute h-6 w-6 text-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
          <X className={`absolute h-6 w-6 text-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} />
        </div>
      </button>

      {/* Mobile Menu with Animation */}
      <div 
        ref={menuRef}
        className={`absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 md:hidden flex flex-col space-y-4 transform transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <a 
          href="#speakers" 
          className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200"
          onClick={toggleMenu}
        >
          <Volume2 className="mr-2 h-5 w-5" />
          <span className="font-medium">Speakers</span>
        </a>
        
        <a 
          href="#team" 
          className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200"
          onClick={toggleMenu}
        >
          <Users className="mr-2 h-5 w-5" />
          <span className="font-medium">Team</span>
        </a>
        
        <a 
          href="#faqs" 
          className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200"
          onClick={toggleMenu}
        >
          <TbMessage2Question className="mr-2 h-5 w-5" />
          <span className="font-medium">FAQs</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;