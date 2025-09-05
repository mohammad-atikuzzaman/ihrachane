import React from "react";

const ServiceCard = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful and intuitive interfaces designed with user experience principles to maximize engagement and satisfaction.",
    },
  ];

  return (
    <div className="bg-gradient-to-br container mx-auto from-orange-400 via-orange-500 to-orange-600 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-white rounded-full opacity-10 delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-200 rounded-full opacity-15 delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6 bg-white/20 p-2 rounded-full">
            <div className="h-1 w-12 bg-white rounded-full mr-2 animate-pulse"></div>
            <div className="h-1 w-4 bg-white rounded-full mr-2 animate-pulse delay-300"></div>
            <div className="h-1 w-8 bg-white rounded-full animate-pulse delay-700"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 drop-shadow-lg">
            Our{" "}
            <span className="text-orange-100 bg-clip-text bg-gradient-to-r from-white to-orange-200">
              Services
            </span>
          </h1>

          <p className="text-lg md:text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed drop-shadow">
            Professional solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-orange-100 hover:border-orange-200 transform hover:-translate-y-3"
            >
              {/* Animated elements */}
              <div className="absolute top-0 right-0 w-40 h-40 -mr-20 -mt-20 bg-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-110"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 -ml-16 -mb-16 bg-orange-400 rounded-full opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-110"></div>

              <div className="relative p-8 md:p-10">
                {/* Icon/Number Container */}
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-500 shadow-lg">
                  <div className="text-3xl font-bold text-white drop-shadow">
                    {index + 1}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors duration-500">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors duration-300 text-lg">
                  Learn more
                  <svg
                    className="w-5 h-5 ml-2 transform group-hover:translate-x-3 transition-transform duration-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 md:p-12 shadow-2xl border border-orange-200/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Ready to get started?
            </h2>
            <p className="text-orange-100 text-xl mb-8 max-w-2xl mx-auto drop-shadow">
              Let us help you transform your business with our professional
              services
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-lg hover:bg-orange-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                Contact us
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all duration-300 transform hover:-translate-y-1 text-lg">
                View all services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
