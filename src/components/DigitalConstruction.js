import React from "react";

const DigitalConstruction = () => {
  return (
    <section id="digital-construction" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-prodesign-blue mb-4">
            Digital Construction
          </h2>
          <div className="w-20 h-1 bg-gray-800 mx-auto"></div>
        </div>

        <div className="mb-12">
          <p className="text-gray-600 mb-6">
            Digital construction reduces waste and inefficiency. It is improving
            design and design teams coordination, identifying problems before
            construction, reducing materials and labour waste on site.
          </p>
          <p className="text-gray-600">
            Digital tools like BIM, Virtual reality, augmented reality and
            construction digital twins shall change the way buildings shall be
            designed, constructed, operated and maintained.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Featured Projects
            </h3>

            <div className="space-y-8">
              {[
                {
                  title: "Automated BIM coordination process",
                  description:
                    "We are researching on automating design verification process on BIM. Through coding we are able to automatically check fire code compliance, streamline clash detection.",
                },
                {
                  title: "Integration of VR and AR with BIM",
                  description:
                    "We have been able to integrate BIM with Augmented reality on a small area. BIM models can be superimposed in a room and allow contractors to build complex plant rooms exactly, reducing waste and time.",
                },
                {
                  title: "Interactive user manual",
                  description:
                    "We have produced an interactive user guide for building owners. This guide is easy to use and contains information on how to operate and maintain installation through an interactive web browser.",
                },
                {
                  title: "Construction digital twin",
                  description:
                    "We are working to improve building design, construction and operations through the study of digital twins. This is a project co-funded by the Mauritius Research and Innovations Council.",
                },
                {
                  title: "Construction procurement platform",
                  description:
                    "We are developing an online procurement platform for the construction industry which will provide more opportunities to contractors and suppliers.",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="border-l-4 border-prodesign-blue pl-4"
                >
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <video
              src="/MyVideo_2.mp4"
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalConstruction;
