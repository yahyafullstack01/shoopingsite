"use client";

import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function SpecialOffers() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "special_offers");

  return (
    <section className="dark:bg-[#2e1f14] bg-[#f5e7da] section-container">
      <div className="space-y-4">
        <div className="relative ml-auto max-w-4xl pr-0 md:pr-[12px] flex justify-center md:justify-end">
          <div className="max-w-[800px] w-[80%] h-[300px] sm:h-[500px] md:h-[550px] lg:h-[900px] relative rounded-lg shadow-xl shadow-gray-800 dark:shadow-gray-600">
            <Image
              src="/8.jpg"
              alt="Special Offers Image"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw" // Додаємо оптимальні розміри для різних екранів
              className="rounded-lg"
              priority // Пріоритет для швидшого завантаження зображення
            />
          </div>

          <div
            className={`absolute bottom-[5%] sm:bottom-[10%] md:bottom-[15%] lg:bottom-[10%] xl:bottom-[15%]
            left-[40%] lg:left-[20%] xl-left-1/2 transform -translate-x-1/2 
            dark:bg-[rgba(58,42,32,0.8)] bg-white/45
            p-4 sm:p-6 md:p-10 lg:p-16 xl:p-20 rounded-lg shadow-lg 
            w-[80%] sm:w-[75%] md:w-[75%] lg:w-[75%] xl:w-[90%] max-w-4xl text-center md:text-left`}
          >
            <h2
              className={`text-base sm:text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold mb-4
                dark:text-[#f5e8d6] text-black
              `}
            >
              {menuItems[0] || "Special Offers"}
            </h2>
            <p
              className={`text-xs sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-medium mb-4 
                dark:text-gray-300 text-black`}
            >
              {menuItems[1] || "Check out our latest offers!"}
            </p>
            <p
              className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-6 sm:mb-7 md:mb-8 lg:mb-10 leading-relaxed 
                dark:text-gray-400 text-black`}
            >
              {menuItems[2] || "Don't miss out on these exclusive deals."}
            </p>
            <button
              className={`py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 xl:py-5 xl:px-10 2xl:py-6 2xl:px-12 rounded-full 
              text-xs sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl transition-all duration-300 
                dark:bg-[#f5e8d6] dark:text-[#2e1f14] dark:hover:bg-[#d1b79e]
                  bg-gray-900 text-white hover:bg-gray-700`}
            >
              {menuItems[3] || "View More"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
