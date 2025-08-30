"use client";
import React from "react";
import Image from "next/image";

const OurCustomers = () => {
  const testimonials = [
    {
      logo: "/asset/coca.png", 
      text: "Kumtel customers always have high expectations. We always collaborate with the best to best meet these expectations. We are very pleased with our partnership with ParkPalet.",
      name: "Burak Ozdemir",
      role: "Kumtel",
      avatar: "/asset/profile-pic.jpg", 
    },
    {
      logo: "/asset/coca.png",
      text: "We want our customers to have a seamless purchasing experience, from purchase decision to product delivery. That's why we partner with ParkPalet for our warehousing and fulfillment processes in the US.",
      name: "Julien Martin",
      role: "Celesty Beauty Care",
      avatar: "/asset/profile-pic.jpg",
    },
    {
      logo: "/asset/coca.png",
      text: "We’re delighted to be working with ParkPalet. We recently began working with ParkPalet for MUGO’s domestic warehousing operations. Thanks to their seamless processes, competitive pricing, and fast delivery, we’ve significantly increased customer satisfaction.",
      name: "Atahan Yilmaz",
      role: "Mugo",
      avatar: "/asset/profile-pic.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-14 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
        Hear from our customers
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="mb-6">
              <Image
                src={item.logo}
                alt={item.role}
                width={120}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              {item.text}
            </p>
            <div className="flex items-center gap-3">
              <Image
                src={item.avatar}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurCustomers;
