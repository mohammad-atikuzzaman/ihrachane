// components/Features.jsx

import { FaUsers, FaShieldAlt, FaLock, FaSearch } from "react-icons/fa";

const features = [
  {
    icon: (
      <FaUsers className="text-3xl sm:text-4xl lg:text-5xl text-white" />
    ),
    title: "Customer First",
  },
  {
    icon: (
      <FaShieldAlt className="text-3xl sm:text-4xl lg:text-5xl text-white" />
    ),
    title: "100% Risk Free",
  },
  {
    icon: (
      <FaLock className="text-3xl sm:text-4xl lg:text-5xl text-white" />
    ),
    title: "Privacy",
  },
  {
    icon: (
      <FaSearch className="text-3xl sm:text-4xl lg:text-5xl text-white" />
    ),
    title: "Due Diligence",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black text-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center 
                       h-32 sm:h-24 md:h-36 lg:h-32 
                       w-full hover:scale-105 transition-transform duration-200"
          >
            <div className="mb-3 ">{feature.icon}</div>
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-center">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
