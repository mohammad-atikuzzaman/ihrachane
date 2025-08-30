import Image from "next/image";
import { FaBoxOpen, FaCheckCircle } from "react-icons/fa";

export default function Service() {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-12 text-center">
          Our <span className="text-orange-600">Sourcing Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Image */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-orange-500 to-orange-400">
            <Image
              src="/asset/1.png"
              alt="Sourcing services"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Service List */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <div className="bg-orange-50 hover:bg-gray-50 transition rounded-2xl shadow-md p-6 flex items-start gap-5">
              <div className="bg-orange-200 p-3 rounded-full">
                <FaBoxOpen className="text-orange-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-1">
                  1. Product Sourcing
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Find the right products for your business from trusted global suppliers.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-orange-50 hover:bg-gray-50 transition rounded-2xl shadow-md p-6 flex items-start gap-5">
              <div className="bg-orange-200 p-3 rounded-full">
                <FaCheckCircle className="text-orange-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-1">
                  2. Supplier Verification
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Verify suppliers before making a deal with our trusted network and checks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
