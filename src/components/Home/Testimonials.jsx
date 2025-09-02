"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getData } from "@/utils/axiosPublic";

const Testimonials = () => {

  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await getData("/api/testimonials");
      console.log(data);
      setTestimonials(data);
    }
    fetchData();
  }, []);
  return (
    <section className="max-w-7xl mx-auto py-14 px-4 bg-white">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-10">
        Hear from our customers
      </h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(
          ({
            clientName,
            clientImage,
            clientFeedback,
            companyLogo,
            companyName,
            clientDesignation,
            _id,
          }) => (
            <div
              key={_id}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="mb-6">
                <Image
                  src={companyLogo}
                  alt={companyName}
                  width={120}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {clientFeedback}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={clientImage}
                  alt={clientName}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900">{clientName}</p>
                  <p className="text-gray-600 text-sm">{clientDesignation}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Testimonials;
