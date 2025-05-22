import React from 'react';
import { Link } from 'react-scroll';

const WorkSection = () => {
  return (
    <section id="work" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prodesign-blue mb-4">
            Our Work
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Construction",
              description: "Reducing waste and inefficiency in construction through digital tools.",
              link: "digital-construction"
            },
            {
              title: "Electrical Vehicles",
              description: "Developing clean mobility solutions for a sustainable future.",
              link: "electric-mobility"
            },
            {
              title: "Clean Farming",
              description: "Innovative agricultural technologies for food security.",
              link: "clean-farming"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <Link 
                to={item.link} 
                smooth={true} 
                duration={500}
                className="text-prodesign-blue font-medium hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;