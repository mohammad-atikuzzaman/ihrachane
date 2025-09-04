"use client";
import { getData } from "@/utils/axiosPublic";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const { data } = await getData("/api/clients");
      setClients(data);
    }
    fetchData()
  }, []);

  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#000d26] mb-6">
          OUR CLIENTS
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {clients.map(({ _id, img, name }) => (
            <div
              key={_id}
              className="bg-[#f6f8fc] rounded-lg flex items-center justify-center p-4 w-full h-24"
            >
              <Image
                src={img}
                alt={`Client ${name}`}
                width={80}
                height={40}
                className="object-contain rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
