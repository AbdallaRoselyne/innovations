import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from "react-router-dom";
import {
  faLeaf,
  faArrowRight,
  faChevronRight,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
  faImages,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Decorative SVG elements
  const FooterWave = () => (
    <svg
      className="absolute top-0 left-0 w-full h-20 -mt-20"
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path
        d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,80C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        fill="currentColor"
        className="text-gray-900"
      />
    </svg>
  );

  const EcoPattern = () => (
    <svg
      className="absolute bottom-0 right-0 opacity-10 w-48 h-48 md:w-64 md:h-64"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMid meet"
    >
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d="M20,50 Q30,30 50,20 Q70,30 80,50 Q70,70 50,80 Q30,70 20,50 Z"
          fill="currentColor"
          className="text-green-500"
          transform={`rotate(${i * 30} 100 100) translate(70 0)`}
        />
      ))}
    </svg>
  );

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { to: "mission", text: "Our Mission", type: "scroll" },
        { to: "work", text: "Our Work", type: "scroll" },
        { to: "about", text: "About Us", type: "scroll" },
        { to: "contact", text: "Contact", type: "scroll" },
      ],
    },
    {
      title: "Our Innovations",
      links: [
        {
          to: "digital-construction",
          text: "Digital Construction",
          type: "scroll",
        },
        { to: "electric-mobility", text: "Electric Mobility", type: "scroll" },
        { to: "clean-farming", text: "Clean Farming", type: "scroll" },
      ],
    },
    {
      title: "Insights",
      links: [
        { to: "/gallery", text: "Gallery", type: "route", icon: faImages },
        {
          to: "/news",
          text: "News & Insights",
          type: "route",
          icon: faLightbulb,
        },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: faFacebookF,
      color: "hover:bg-blue-600",
      url: "https://www.facebook.com/profile.php?id=100085406322247",
      label: "Facebook",
    },
    {
      icon: faTwitter,
      color: "hover:bg-blue-400",
      url: "https://twitter.com/prodesign_inno",
      label: "Twitter",
    },
    {
      icon: faLinkedinIn,
      color: "hover:bg-blue-700",
      url: "https://www.linkedin.com/company/prodesign-innovation/",
      label: "LinkedIn",
    },
    {
      icon: faInstagram,
      color: "hover:bg-pink-600",
      url: "#",
      label: "Instagram",
    },
  ];

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const renderLink = (link) => {
    if (link.type === "route") {
      return (
        <RouterLink
          to={link.to}
          className="text-gray-400 hover:text-white flex items-center transition-colors"
          aria-label={`Navigate to ${link.text}`}
        >
          {link.icon && (
            <FontAwesomeIcon
              icon={link.icon}
              className="mr-3 text-green-400"
              aria-hidden="true"
            />
          )}
          {link.text}
        </RouterLink>
      );
    } else {
      // If not on homepage, convert scroll links to router links with hash
      if (!isHomePage) {
        return (
          <RouterLink
            to={`/#${link.to}`}
            className="text-gray-400 hover:text-white flex items-center transition-colors"
            aria-label={`Navigate to ${link.text}`}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              className="mr-3 text-green-400 text-xs"
              aria-hidden="true"
            />
            {link.text}
          </RouterLink>
        );
      }
      // On homepage, use regular scroll link
      return (
        <ScrollLink
          to={link.to}
          smooth={true}
          duration={500}
          offset={-80}
          className="text-gray-400 hover:text-white flex items-center transition-colors"
          aria-label={`Scroll to ${link.text}`}
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            className="mr-3 text-green-400 text-xs"
            aria-hidden="true"
          />
          {link.text}
        </ScrollLink>
      );
    }
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
      <FooterWave />
      <EcoPattern />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12">
          {/* Company Info */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-green-500 opacity-20 animate-pulse"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FontAwesomeIcon
                icon={faLeaf}
                className="text-green-400 mr-3 animate-bounce"
                aria-hidden="true"
              />
              <span>Prodesign Innovation</span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering sustainable solutions to combat climate change through
              innovative green technologies and services.
            </p>
            <a
              href="mailto:admin@prodesign.mu"
              className="inline-flex items-center text-green-400 hover:text-white group transition-colors"
              aria-label="Email us at admin@prodesign.mu"
            >
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <span className="group-hover:underline">admin@prodesign.mu</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Generated Link Sections */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-6 relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
              </h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}

          {/* Connect Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              Connect With Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Follow our journey and stay updated with our latest innovations.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white ${social.color} transition-colors`}
                  aria-label={`Visit our ${social.label} page`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <a
                href="tel:+2306604545"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
                aria-label="Call us at +230 660 4545"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-3 text-green-400"
                />
                <span>+230 660 4545</span>
              </a>
              <div className="flex items-start text-gray-400">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 mt-1 text-green-400"
                />
                <span>
                  First Floor, Building No.2, Phoenix Business Park, Mauritius
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-6">
            <svg
              className="w-12 h-12 mx-auto text-green-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                d="M12 2L3 12l9 10 9-10-9-10z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-gray-500 text-sm md:text-base">
            © {new Date().getFullYear()} Prodesign Innovation Ltd. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs md:text-sm mt-2">
            Sustainable innovation for a greener tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
