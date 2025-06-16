import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  DollarSign,
  MapPin,
  Battery,
  Wrench,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

const ElectricMobility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const CLOUDINARY_URL = `https://res.cloudinary.com/${cloudName}`;

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      return () => container.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const features = [
    { icon: <DollarSign className="w-6 h-6" />, text: "Low-cost solutions" },
    {
      icon: <Battery className="w-6 h-6" />,
      text: "High-efficiency platforms",
    },
    { icon: <Wrench className="w-6 h-6" />, text: "Local assembly ready" },
    {
      icon: <MapPin className="w-6 h-6" />,
      text: "Tailored for island markets",
    },
  ];

  const stats = [
    { number: "650+", label: "Best Scooter Design Collection" },
    { number: "100%", label: "Sustainable Transport" },
    { number: "3x", label: "Cost Efficiency" },
  ];

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 50}px, ${
              mousePosition.y * 30
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-l from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x * 30}px, ${
              -mousePosition.y * 40
            }px)`,
            transition: "transform 0.5s ease-out",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce">
        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-pulse">
        <Zap className="w-6 h-6 text-yellow-500" />
      </div>
      <div
        className="absolute bottom-40 left-20 animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200">
                <Zap className="text-blue-600 w-4 h-4" />
                <span className="text-sm font-medium text-blue-700">
                  Experience the Future
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-700 to-indigo-600 bg-clip-text text-transparent leading-tight">
                Electric Mobility
              </h1>

              <p className="text-xl text-slate-600 font-medium leading-relaxed">
                Driving sustainable transport, from last mile to local
                manufacturing
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p className="text-lg">
                The global shift to electric vehicles is accelerating—but most
                solutions are built for wealthy markets, not for small island
                states, dense urban zones, or emerging economies.{" "}
                <span className="font-bold text-slate-800">
                  Prodesign Innovations is solving that gap.
                </span>
              </p>

              <p>
                We're designing and prototyping{" "}
                <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  low-cost, high-efficiency electric transport platforms
                </span>
                —engineered for local assembly, short-range use, and
                affordability. Our focus is on{" "}
                <span className="font-bold">
                  cargo scooters, delivery vehicles, and compact EVs
                </span>{" "}
                tailored to the unique constraints and opportunities of
                Mauritius and similar markets across Africa and the Indian
                Ocean.
              </p>

              <p className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                This is not just an environmental solution—it's a business
                opportunity
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 hover:bg-white/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white">
                    {feature.icon}
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Explore Now
                  <TrendingUp className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Content - Scooter Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Main Scooter Container */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 blur-3xl scale-110 animate-pulse" />

              {/* Scooter Image */}
              <div className="relative bg-gradient-to-br from-white/80 to-blue-50/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-2xl hover:scale-105 transition-all duration-500">
                <img
                  src={`${CLOUDINARY_URL}/image/upload/w_600,h_400,c_fit,q_auto,f_auto/electric_n0g6by.png`}
                  alt="Electric Scooter"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  onError={(e) => {
                    // Fallback to a placeholder if Cloudinary image fails
                    e.target.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f1f5f9'/%3E%3Ctext x='300' y='200' text-anchor='middle' dy='0.3em' font-family='system-ui' font-size='24' fill='%23475569'%3EElectric Scooter%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-blue-100 animate-bounce">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm font-semibold">Eco-Friendly</span>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-purple-100"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2 text-blue-600">
                  <Battery className="w-5 h-5" />
                  <span className="text-sm font-semibold">Long Range</span>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100 hover:bg-white/90 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Testimonial/Quote */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-blue-100 mx-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <p className="text-sm text-slate-700 italic">
                "It's a perfect solution for reducing my carbon footprint while
                exploring the city."
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-xs font-medium text-slate-600">
                  Guy Hawkins
                </span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-yellow-400 rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricMobility;
