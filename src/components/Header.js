import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

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
    { to: "mission", label: "Mission" },
    { to: "work", label: "Our Work" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-white shadow-xl border-b border-gray-100/50"
          : "bg-white shadow-lg"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/20 via-purple-50/10 to-cyan-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      <div className="relative">
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-12 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          {/* Logo with modern hover effects */}
          <div className="flex-shrink-0 group">
            <div className="relative">
              <img
                src="/PDI-Logo.png"
                alt="Prodesign Innovation"
                className={`object-contain transition-all duration-500 filter  ${
                  scrolled ? "h-26 lg:h-[120px]" : "h-20 lg:h-28"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </div>
          </div>

          {/* Desktop Navigation with modern styling */}
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
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full" />

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg rounded-full" />

                {/* Text with subtle animation */}
                <span className="relative z-10 transition-all duration-300 group-hover:scale-105">
                  {item.label}
                </span>

                {/* Underline animation */}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-500" />
              </Link>
            ))}
          </nav>

          {/* Modern mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

        {/* Modern mobile navigation with slide animation */}
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
                  {/* Mobile item background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out rounded-xl" />

                  {/* Mobile glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-sm" />

                  <span className="relative z-10 transition-transform duration-200 group-hover:scale-105">
                    {item.label}
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
