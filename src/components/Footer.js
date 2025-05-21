import React from 'react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Prodesign Innovation</h3>
            <p className="text-gray-400">
              We bring innovative green products and services to life, fighting climate change through sustainable innovation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="mission" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Mission
                </Link>
              </li>
              <li>
                <Link 
                  to="work" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Work</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="digital-construction" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Digital Construction
                </Link>
              </li>
              <li>
                <Link 
                  to="electric-mobility" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Electric Mobility
                </Link>
              </li>
              <li>
                <Link 
                  to="clean-farming" 
                  smooth={true} 
                  duration={500}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Clean Farming
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM11.293 7.293a1 1 0 00-1.414 1.414L13.586 12l-3.707 3.707a1 1 0 001.414 1.414l4.707-4.707a1 1 0 000-1.414l-4.707-4.707z" />
                    </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zM11.293 7.293a1 1 0 00-1.414 1.414L13.586 12l-3.707 3.707a1 1 0 001.414 1.414l4.707-4.707a1 1 0 000-1.414l-4.707-4.707z" />
                    </svg>
                </a>

            </div>
            </div>
            </div>
            <div className="mt-8 text-center">
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Prodesign Innovation. All rights reserved.
                </p>
            </div>
        </div>
    </footer>

    );
}
export default Footer;
              