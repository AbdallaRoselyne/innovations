import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faBolt,
  faCube,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "mission", label: "Mission", icon: faLeaf },
    { to: "work", label: "Our Work", icon: faCube },
    { to: "contact", label: "Contact", icon: faBolt },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white/95 shadow-xl backdrop-blur-sm"
          : "bg-white/90 shadow-md backdrop-blur-sm"
      }`}
    >
      {/* SVG Background Pattern */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5">
        <pattern
          id="pattern-circles"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="20" cy="20" r="1" fill="#3b82f6" />
        </pattern>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#pattern-circles)"
        />
      </svg>

      <div className="relative">
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-12 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="flex-shrink-0 group">
            <div className="relative">
              <img
                src={`${CLOUDINARY_URL}/image/upload/f_auto,q_auto/PD-Innovation_jx3asb.svg`}
                alt="Prodesign Innovation"
                className={`object-contain transition-all duration-500 ${
                  scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={800}
                className="relative group px-6 py-3 text-gray-700 font-medium cursor-pointer overflow-hidden transition-all duration-300 hover:text-white rounded-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-600 to-cyan-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-full" />
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105 flex items-center">
                  <FontAwesomeIcon icon={item.icon} className="mr-2" />
                  {item.label}
                </span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-100 to-blue-500 group-hover:w-full group-hover:left-0 transition-all duration-500" />
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="283"
                  strokeDashoffset="283"
                  className="transition-all duration-500 group-hover:stroke-dashoffset-0"
                />
              </svg>
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1" : "mb-1"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "opacity-0" : "mb-1"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100/50">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={800}
                  onClick={() => setIsOpen(false)}
                  className={`block relative group px-4 py-3 text-gray-700 font-medium rounded-xl transition-all duration-500 hover:text-white overflow-hidden transform ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />
                  <span className="relative z-10 transition-transform duration-200 group-hover:scale-105 flex items-center">
                    <FontAwesomeIcon icon={item.icon} className="mr-3" />
                    {item.label}
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
