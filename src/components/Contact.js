import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  // Decorative SVG elements
  const BlueWave = () => (
    <svg
      className="absolute bottom-0 left-0 w-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#1e40af"
        fillOpacity="0.2"
        d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );

  const ContactBlob = () => (
    <svg
      className="absolute -z-10 opacity-20"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#3B82F6"
        d="M43.9,-65.4C56.3,-56.5,65.4,-43.8,72.9,-29.2C80.3,-14.6,86.1,1.9,83.8,17.6C81.5,33.3,71.1,48.2,57.1,59.7C43.1,71.2,25.6,79.3,7.3,71.2C-11,63.1,-22,38.8,-33.6,22.3C-45.1,5.8,-57.1,-3,-60.5,-15.1C-63.9,-27.2,-58.6,-41.6,-47.5,-51C-36.4,-60.4,-19.5,-64.8,-1.6,-63C16.3,-61.2,32.6,-53.2,43.9,-65.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );

  return (
    <section
      id="contact"
      className="relative py-20 px-4 bg-prodesign-blue text-white overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <ContactBlob />
      </div>
      <BlueWave />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="relative inline-block">
              Contact Us
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="4"
                viewBox="0 0 120 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 2C20 0 40 4 60 2C80 0 100 4 120 2"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Let's create something amazing together. Reach out and start the
            conversation.
          </p>
        </div>

        <div className="relative p-8 bg-blue-900 bg-opacity-30 rounded-2xl backdrop-blur-sm border border-blue-700 shadow-xl">
          <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-blue-600 opacity-30"></div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-blue-400 opacity-30"></div>

          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <svg
              className="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9 9H9.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15 9H15.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            Get in Touch
          </h3>

          <p className="mb-8 text-blue-100">
            Interested in our projects or want to partner with us? Here's how you can reach us.
          </p>

          <div className="space-y-6">
            <div className="flex items-start group">
              <div className="p-3 mr-4 rounded-full bg-blue-800 group-hover:bg-blue-700 transition">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-blue-100">admin@prodesign.mu</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-3 mr-4 rounded-full bg-blue-800 group-hover:bg-blue-700 transition">
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-blue-100">+230 660 4545</p>
              </div>
            </div>

            <div className="flex items-start group">
              <div className="p-3 mr-4 rounded-full bg-blue-800 group-hover:bg-blue-700 transition">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">Address</h4>
                <p className="text-blue-100">
                  First Floor, Building No.2,
                  <br />
                  Industrial Building, Valentina, Phoenix, 73553
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;