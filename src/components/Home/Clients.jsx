'use client';

import Image from 'next/image';

const clients = [
  '/demo-profile-pic.jpg',
  '/demo-profile-pic.jpg',
  '/demo-profile-pic.jpg',
  '/demo-profile-pic.jpg',
  '/demo-profile-pic.jpg',
  '/demo-profile-pic.jpg',
];

export default function Clients() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#000d26] mb-6">OUR CLIENTS</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {clients.map((src, index) => (
            <div
              key={index}
              className="bg-[#f6f8fc] rounded-lg flex items-center justify-center p-4 w-full h-24"
            >
              <Image
                src={src}
                alt={`Client ${index + 1}`}
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
