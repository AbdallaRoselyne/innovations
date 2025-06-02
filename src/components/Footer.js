import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faArrowRight,
  faChevronRight,
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // Decorative SVG elements
  const FooterWave = () => (
    <svg
      className="absolute top-0 left-0 w-full h-20 -mt-20"
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,96L48,90.7C96,85,192,75,288,69.3C384,64,480,64,576,80C672,96,768,128,864,128C960,128,1056,96,1152,96C1248,96,1344,128,1392,144L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        fill="#1a365d"
        fillOpacity="1"
      />
    </svg>
  );

  const EcoPattern = () => (
    <svg
      className="absolute bottom-0 right-0 opacity-10 w-64 h-64"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      {[...Array(12)].map((_, i) => (
        <path
          key={i}
          d="M20,50 Q30,30 50,20 Q70,30 80,50 Q70,70 50,80 Q30,70 20,50 Z"
          fill="#48bb78"
          transform={`rotate(${i * 30} 100 100) translate(70 0)`}
        />
      ))}
    </svg>
  );

  return (
    <footer className="relative bg-gray-900 text-white pt-20 pb-12 px-4 overflow-hidden">
      {/* Decorative elements */}
      <FooterWave />
      <EcoPattern />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-green-500 opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <FontAwesomeIcon icon={faLeaf} className="text-green-400 mr-2" />
              Prodesign Innovation
            </h3>
            <p className="text-gray-400 mb-4">
              We bring innovative green products and services to life, fighting
              climate change through sustainable innovation.
            </p>
            <div className="flex items-center text-green-400 group cursor-pointer">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              <span className="group-hover:underline">admin@prodesign.mu</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="ml-2 text-xs opacity-0 group-hover:opacity-100 transition"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              {["mission", "work", "contact"].map((link) => (
                <li key={link} className="group">
                  <Link
                    to={link}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white flex items-center transition"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="mr-2 text-green-400 text-xs opacity-0 group-hover:opacity-100 transition"
                    />
                    {link.charAt(0).toUpperCase() +
                      link.slice(1).replace("-", " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Work */}
          <div>
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Our Work
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <ul className="space-y-3">
              {[
                "digital-construction",
                "electric-mobility",
                "clean-farming",
              ].map((work) => (
                <li key={work} className="group">
                  <Link
                    to={work}
                    smooth={true}
                    duration={500}
                    className="text-gray-400 hover:text-white flex items-center transition"
                  >
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="mr-2 text-green-400 text-xs opacity-0 group-hover:opacity-100 transition"
                    />
                    {work
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4 relative inline-block">
              Connect
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
            </h3>
            <p className="text-gray-400 mb-4">
              Follow us on social media for updates and news.
            </p>
            <div className="flex space-x-4 mb-6">
              {[
                {
                  icon: faFacebookF,
                  color: "text-blue-400",
                  url: "https://www.facebook.com/profile.php?id=100085406322247", 
                },
                {
                  icon: faTwitter,
                  color: "text-blue-300",
                  url: "https://twitter.com/prodesign_inno", 
                },
                {
                  icon: faLinkedinIn,
                  color: "text-blue-500",
                  url: "https://www.linkedin.com/company/prodesign-innovation/",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center ${social.color} hover:bg-green-500 hover:text-white transition`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>

            <div className="space-y-2">
              <div className="flex items-center text-gray-400 hover:text-white transition">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-2 text-green-400"
                />
                <span>+230 660 4545</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-2 text-green-400"
                />
                <span>First Floor, Building No.2, Phoenix</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-4">
            <svg
              className="w-12 h-12 mx-auto text-green-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 2L3 12l9 10 9-10-9-10z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22l9-10M12 2L3 12"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-gray-500">
            © {new Date().getFullYear()} Prodesign Innovation. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-sm mt-1">
            Committed to sustainable innovation for a greener future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
