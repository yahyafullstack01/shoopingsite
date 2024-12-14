"use client";

import Image from "next/image";

export default function SpecialOffers() {
  return (
    <section className=" bg-[#f5e7da]  py-12 px-8">
      <div className=" container space-y-4">
        <div className="relative flex justify-end">
          {/* Зображення */}
          <Image
            src="/8.jpg"
            alt="Special Offers Image"
            width={900}
            height={400}
            className="rounded-lg object-cover shadow-2xl shadow-black"
          />

          {/* Блок "Special Offers" */}
          <div className="absolute top-[30%] left-[50px] bg-white p-20 rounded-lg shadow-lg max-w-3xl transform -translate-y-1/3">
            <h2 className="text-5xl font-bold mb-6">Special Offers</h2>
            <p className="text-lg font-medium mb-4 text-gray-700">Limited Time</p>
            <p className="text-md mb-6 text-gray-600 ">
              Don’t miss out on our exclusive deals.
            </p>
            <button className="bg-[#4A3222] text-white py-3 px-8 rounded-full hover:bg-[#6E4C2E] transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
