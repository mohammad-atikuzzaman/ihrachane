'use client';

import Image from 'next/image';

export default function Supplier() {
  return (
    <section className="bg-white py-14 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#000d26] mb-8">
          WE ARE MORE THAN A SUPPLIER
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Left Image Box */}
          <div className="bg-[#f6f8fc] rounded-xl flex justify-center items-center h-full">
            <Image
              src={'/supplier.png'}
              alt="Supplier Boxes"
              width={400}
              height={300}
              className="rounded-lg object-contain w-fit"
            />
          </div>

          {/* Right Text Box */}
          <div className="bg-[#f6f8fc] p-6 md:p-8 rounded-xl space-y-5 h-full flex flex-col justify-center">
            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#000d26]">
                Exclusive Pricing and Favorable Terms
              </h4>
              <p className="text-sm md:text-base text-gray-700">
                Your dedicated sourcing specialist will work with you and handle any of your requests, ensuring you collaborate seamlessly with the Ihracphane team.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#000d26]">
                Stable Quality and Priority Delivery
              </h4>
              <p className="text-sm md:text-base text-gray-700">
                By working with the Ihracphane supply chain network, we will help you to achieve cost savings, higher quality products, and faster delivery.
              </p>
            </div>

            <div>
              <h4 className="text-base md:text-lg font-semibold text-[#000d26]">
                Streamlined Procurement Process
              </h4>
              <p className="text-sm md:text-base text-gray-700">
                Ihracphane will bear all your buying risks instead of you. You do not need to worry about your payment security, bad quality, and late delivery when you work with Ihracphane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
