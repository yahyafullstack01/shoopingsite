"use client";
import Image from "next/image";
import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage"; // Import the custom hook


export default function TopProducts() {
  const images = [
    { src: "/1.jpg", link: "/top-products/1" },
    { src: "/2.jpg", link: "/top-products/2" },
    { src: "/3.jpg", link: "/top-products/3" },
    { src: "/4.jpg", link: "/top-products/4" },
    { src: "/5.jpg", link: "/top-products/5" },
    { src: "/6.jpg", link: "/top-products/6" },
    { src: "/7.jpg", link: "/top-products/7" },
    { src: "/8.jpg", link: "/top-products/8" },
    { src: "/9.jpg", link: "/top-products/9" },
    { src: "/10.jpg", link: "/top-products/10" },
  ];

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    5 
  );
    const {  translateList } = useLanguage(); // Use the hook
    const List = translateList("home", "hero");


  return (
    <section
      id="top-products"
      className="bg-[#fcf8f3] dark:bg-[#2e1f14] text-black dark:text-gray-100 section-container py-12"
    >
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Top Products</h2>
       
        <div className="border-t border-gray-300 dark:border-gray-700"></div>
        </div>
      <div className="flex items-center justify-center space-x-4 mt-8">
        <div
          onClick={handlePrev}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronLeft />
        </div>
        <div className="flex overflow-hidden gap-4 sm:gap-6 md:gap-8">
  {displayedImages.map((imageIndex) => (
    <Link
      key={imageIndex}
      href={images[imageIndex].link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 group"
    >
      <Image
        src={images[imageIndex].src}
        alt={`Image ${imageIndex + 1}`}
        width={150} 
        height={150}
        quality={100} 
        className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90
          sm:w-[150px] sm:h-[150px]
          md:w-[200px] md:h-[300px]
          lg:w-[250px] lg:h-[350px]
          xl:w-[300px] xl:h-[350px]"
      />
    </Link>
  ))}
</div>
        <div
          onClick={handleNext}
          className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
