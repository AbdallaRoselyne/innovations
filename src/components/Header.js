import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faLightbulb,
  faUsers,
  faEnvelope,
  faImage,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { to: "mission", label: "Mission", icon: faSeedling },
    {
      label: "Our Innovations",
      icon: faLightbulb,
      submenu: [
        { to: "digital-construction", label: "Digital Construction" },
        { to: "electric-mobility", label: "Electric Mobility" },
        { to: "clean-farming", label: "Clean Farming" },
      ],
    },
    { to: "about", label: "About Us", icon: faUsers },
    { to: "gallery", label: "Gallery", icon: faImage },
    { to: "contact", label: "Contact", icon: faEnvelope },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled ? "bg-white shadow" : "bg-white"
      }`}
    >
      <div className="relative">
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-12 ${
            scrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="flex-shrink-0">
            <img
              src={`${CLOUDINARY_URL}/image/upload/f_auto,q_auto/logo_kfzpbo.png`}
              alt="Prodesign Innovation"
              className={`object-contain transition-all duration-500 ${
                scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
              }`}
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <div className="flex items-center px-6 py-3 text-gray-700 font-medium cursor-pointer group-hover:text-blue-600">
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.label}
                      <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
                    </div>
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 min-w-[200px] z-40">
                      {item.submenu.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.to}
                          smooth={true}
                          duration={800}
                          className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center border rounded-full"
            >
              <span className="text-xl">{isOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out overflow-hidden bg-white ${
            isOpen ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <div>
                    <button
                      className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium border rounded"
                      onClick={() => setOpenSubmenu((prev) => !prev)}
                    >
                      <span>
                        <FontAwesomeIcon icon={item.icon} className="mr-2" />
                        {item.label}
                      </span>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                    {openSubmenu && (
                      <div className="pl-6 mt-2 space-y-2">
                        {item.submenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.to}
                            smooth={true}
                            duration={800}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 font-medium border rounded hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
