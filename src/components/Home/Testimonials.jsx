"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getData } from "@/utils/axiosPublic";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const { data } = await getData("/api/testimonials");
      setTestimonials(data);
    }
    fetchData();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-medium tracking-wider text-sm uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            What Our <span className="font-medium">Clients Say</span>
          </h2>
          <div className="w-16 h-0.5 bg-orange-400 mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial._id} 
              className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote icon */}
              <div className="text-orange-400 text-3xl mb-6">"</div>
              
              {/* Testimonial text */}
              <p className="text-gray-600 mb-8 leading-relaxed italic">
                {testimonial.clientFeedback}
              </p>
              
              {/* Client info */}
              <div className="flex items-center">
                <div className="relative mr-4">
                  {/* Client Image - Fixed as rounded avatar */}
                  <div className="w-14 h-14 relative overflow-hidden rounded-full">
                    <Image
                      src={testimonial.clientImage}
                      alt={testimonial.clientName}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-900 truncate">{testimonial.clientName}</p>
                  <p className="text-gray-500 text-sm truncate">{testimonial.clientDesignation}</p>
                  <div className="flex items-center mt-1">
                    {/* Company Logo - Maintains original aspect ratio */}
                    <div className="w-4 h-4 mr-2 relative flex-shrink-0">
                      <Image
                        src={testimonial.companyLogo}
                        alt={testimonial.companyName}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-xs text-gray-400 truncate">{testimonial.companyName}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section - Redesigned */}
        <div className="mb-6">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-orange-800 text-sm font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">98%</div>
                <div className="text-orange-800 text-sm font-medium">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">15+</div>
                <div className="text-orange-800 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-orange-800 text-sm font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;