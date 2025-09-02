"use client";

import React from "react";

const OurServices = () => {
  const services = [
    {
      title: "Drop ship",
      description:
        "Enter Service Paragraph Text fad lorem ipsum dolor sit amet.",
      bg: "https://picsum.photos/200", 
    },
    {
      title: "Logistics",
      description: "We provide fast and reliable logistics solutions.",
      bg: "https://picsum.photos/200",
    },
    {
      title: "Warehousing",
      description: "Secure and scalable warehousing for your business.",
      bg: "https://picsum.photos/200",
    },
  ];

  return (
    <section className=" max-w-7xl mx-auto py-14 px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Our Services</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-md p-6 h-48 flex items-center"
            style={{
              backgroundImage: `url(${service.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-white">
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
