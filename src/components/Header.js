import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faUsers,
  faEnvelope,
  faChevronDown,
  faHome,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHomePage = location.pathname === "/";

  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: faHome,
      scrollTo: "hero",
      submenu: [
        { to: "mission", label: "Our Mission", scroll: true },
        { to: "why-different", label: "Why We're Different", scroll: true },
      ],
    },
    {
      label: "Our Innovations",
      icon: faLightbulb,
      scrollTo: "work",
      submenu: [
        {
          to: "digital-construction",
          label: "Digital Construction",
          scroll: true,
        },
        { to: "electric-mobility", label: "Electric Mobility", scroll: true },
        { to: "clean-farming", label: "Clean Farming", scroll: true },
      ],
    },
    {
      to: "/insights",
      label: "Insights",
      icon: faNewspaper,
      scrollTo: "insights",
      submenu: [
        { to: "/gallery", label: "Gallery", isRouterLink: true },
        { to: "/news", label: "News & Updates", isRouterLink: true },
      ],
    },
    { to: "about", label: "About Us", icon: faUsers, scroll: true },
    { to: "contact", label: "Contact", icon: faEnvelope, scroll: true },
  ];

  const handleMainItemClick = (item, e) => {
    // Only handle click if not clicking the dropdown arrow
    if (!e.target.closest(".dropdown-arrow")) {
      if (isHomePage && item.scrollTo) {
        // On homepage, scroll to section
        document
          .getElementById(item.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      } else if (item.scrollTo) {
        // On other pages, navigate to homepage with hash
        window.location.href = `/#${item.scrollTo}`;
      }
    }
  };

  const toggleSubmenu = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

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
            <RouterLink to="/">
              <img
                src={`${CLOUDINARY_URL}/image/upload/f_auto,q_auto/logo_kfzpbo.png`}
                alt="Prodesign Innovation"
                className={`object-contain transition-all duration-500 ${
                  scrolled ? "h-16 md:h-20" : "h-20 md:h-24"
                }`}
              />
            </RouterLink>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <div
                      onClick={(e) => handleMainItemClick(item, e)}
                      className="flex items-center px-6 py-3 text-gray-700 font-medium cursor-pointer group-hover:text-blue-600"
                    >
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.label}
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="ml-2 dropdown-arrow"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    </div>
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 min-w-[200px] z-40">
                      {item.submenu.map((sub, i) => (
                        <div key={i}>
                          {sub.isRouterLink ? (
                            <RouterLink
                              to={sub.to}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                              {sub.label}
                            </RouterLink>
                          ) : isHomePage ? (
                            <ScrollLink
                              to={sub.to}
                              smooth={true}
                              duration={800}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                              {sub.label}
                            </ScrollLink>
                          ) : (
                            <RouterLink
                              to={`/#${sub.to}`}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition"
                            >
                              {sub.label}
                            </RouterLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : isHomePage ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={800}
                    className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.label}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.to}`}
                    className="px-6 py-3 text-gray-700 font-medium hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.label}
                  </RouterLink>
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
                    <div
                      onClick={(e) => {
                        handleMainItemClick(item, e);
                        toggleSubmenu(index);
                      }}
                      className="w-full flex justify-between items-center px-4 py-3 text-gray-700 font-medium border rounded cursor-pointer"
                    >
                      <span>
                        <FontAwesomeIcon icon={item.icon} className="mr-2" />
                        {item.label}
                      </span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className={`transition-transform ${
                          openSubmenu === index ? "transform rotate-180" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSubmenu(index);
                        }}
                      />
                    </div>
                    {openSubmenu === index && (
                      <div className="pl-6 mt-2 space-y-2">
                        {item.submenu.map((sub, i) => (
                          <div key={i}>
                            {sub.isRouterLink ? (
                              <RouterLink
                                to={sub.to}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                              >
                                {sub.label}
                              </RouterLink>
                            ) : isHomePage ? (
                              <ScrollLink
                                to={sub.to}
                                smooth={true}
                                duration={800}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                              >
                                {sub.label}
                              </ScrollLink>
                            ) : (
                              <RouterLink
                                to={`/#${sub.to}`}
                                onClick={() => {
                                  setIsOpen(false);
                                  setOpenSubmenu(null);
                                }}
                                className="block px-4 py-2 text-gray-600 hover:text-blue-600"
                              >
                                {sub.label}
                              </RouterLink>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : isHomePage ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={800}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 font-medium border rounded hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.label}
                  </ScrollLink>
                ) : (
                  <RouterLink
                    to={`/#${item.to}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-gray-700 font-medium border rounded hover:text-blue-600"
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.label}
                  </RouterLink>
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
