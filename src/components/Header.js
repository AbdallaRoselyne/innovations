import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between h-auto py-4 px-12">
        {/* Logo (flush left) */}
        <div className="flex-shrink-0">
          <img
            src="/PDI-Logo.png"
            alt="Prodesign Innovation"
            className="h-[120px] object-contain"
          />
        </div>

        {/* Navigation (spaced out on the right) */}
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="mission"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-prodesign-blue px-3 py-2 font-medium cursor-pointer"
            >
              Mission
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-prodesign-blue px-3 py-2 font-medium cursor-pointer"
            >
              Our Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-700 hover:text-prodesign-blue px-3 py-2 font-medium cursor-pointer"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden ml-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-prodesign-blue focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="mission"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-prodesign-blue font-medium"
            >
              Mission
            </Link>
            <Link
              to="work"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-prodesign-blue font-medium"
            >
              Our Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-gray-700 hover:text-prodesign-blue font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
