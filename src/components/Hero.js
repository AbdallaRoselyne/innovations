import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/shutterstock.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          We bring innovative green products and services to life
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Fighting climate change with our innovative products. Innovation is
          our way of life.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="bg-white text-prodesign-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Explore Our Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-prodesign-blue transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
