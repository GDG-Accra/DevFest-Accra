import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white shadow-md fixed top-0 left-0 right-0 z-50'>
      <div className='container mx-auto px-4 py-3'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link to='/' className='flex items-center'>
            <img
              src={assets.logos.dfLogoAccra}
              alt='DevFest Accra Logo'
              className='h-8 w-auto'
            />
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link to='/' className='text-gray-700 hover:text-blue-600 transition-colors'>
              Home
            </Link>
            <Link to='/about' className='text-gray-700 hover:text-blue-600 transition-colors'>
              About
            </Link>
            <Link to='/speakers' className='text-gray-700 hover:text-blue-600 transition-colors'>
              Speakers
            </Link>
            <Link to='/schedule' className='text-gray-700 hover:text-blue-600 transition-colors'>
              Schedule
            </Link>
            <Link to='/sponsors' className='text-gray-700 hover:text-blue-600 transition-colors'>
              Sponsors
            </Link>
            <Link to='/contact' className='text-gray-700 hover:text-blue-600 transition-colors'>
              Contact
            </Link>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors'>
              Register Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 pb-4 border-t border-gray-200'>
            <div className='flex flex-col space-y-3 pt-4'>
              <Link
                to='/'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to='/about'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to='/speakers'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Speakers
              </Link>
              <Link
                to='/schedule'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule
              </Link>
              <Link
                to='/sponsors'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Sponsors
              </Link>
              <Link
                to='/contact'
                className='text-gray-700 hover:text-blue-600 transition-colors py-2'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4 w-full'>
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
