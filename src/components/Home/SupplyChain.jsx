"use client";

import { useState } from "react";
import Image from "next/image";
// Make sure this file exists

const tabs = [
  {
    label: "Streamlined Supply Line",
    title: "A Streamlined Supply Line",
    description:
      "Whatever products you need, we develop source and deliver them to you, and help you achieve your sourcing goals: Cost saving, higher quality, and faster delivery.",
  },
  {
    label: "Worry-Free Solution",
    title: "Worry-Free Solution",
    description:
      "We manage the entire supply process with full transparency and communication, ensuring peace of mind and timely delivery every step of the way.",
  },
  {
    label: "Power Behind Your Business Growth",
    title: "Business Growth Support",
    description:
      "By optimizing logistics and providing dependable service, we help you focus on scaling your business while we handle sourcing and delivery.",
  },
];

export default function SupplyChain() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#000d26] mb-8">
          SUPPLY CHAIN OPTIMIZATION
        </h2>

     
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                activeTab === index
                  ? "bg-[#000d26] text-white"
                  : "bg-transparent text-[#000d26] hover:bg-gray-200"
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content + Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Tab Content Box */}
          <div className="bg-[#f6f8fc] p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-lg md:text-xl font-semibold mb-2 text-[#000d26]">
              {tabs[activeTab].title}
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              {tabs[activeTab].description}
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center bg-[#f6f8fc] rounded-md">
            <Image
              src={"/supply-chain-banner.png"}
              alt="Cargo Containers"
              width={500}
              height={400}
              className="rounded-xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
