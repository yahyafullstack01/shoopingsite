
"use client";

import Image from "next/image";

export default function SpecialOffers() {
  return (
    <section className="bg-[#F8ECE2] py-16 px-8">
      <div className="container mx-auto relative">
        <div className="relative flex justify-end">
          <Image
            src="/path-to-your-image.jpg" // Замініть на шлях до зображення
            alt="Special Offers Image"
            width={800}
            height={600}
            className="rounded-lg object-cover shadow-2xl"
          />
 <div className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white p-16 rounded-lg shadow-lg max-w-2xl">
 
            <h2 className="text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-lg mb-4">Limited Time</p>
            <p className="text-md mb-6">
              Don’t miss out on our exclusive deals.
            </p>
            <button className="bg-[#4A3222] text-white py-2 px-6 rounded hover:bg-gray-800 transition">
              Shop Now
            </button>
          </div>
         
        </div>
      </div>
    </section>
  );
}
