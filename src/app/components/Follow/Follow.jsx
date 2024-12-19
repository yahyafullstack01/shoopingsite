"use client";
import Image from "next/image";
import Link from "next/link";

import useImageFollow from "../../hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FollowUs() {
  const images = [
    { src: "/1.jpg", link: "https://instagram.com/yourprofile1" },
    { src: "/2.jpg", link: "https://instagram.com/yourprofile2" },
    { src: "/3.jpg", link: "https://instagram.com/yourprofile3" },
    { src: "/4.jpg", link: "https://instagram.com/yourprofile4" },
    { src: "/5.jpg", link: "https://instagram.com/yourprofile5" },
    { src: "/6.jpg", link: "https://instagram.com/yourprofile6" },
    { src: "/7.jpg", link: "https://instagram.com/yourprofile7" },
    { src: "/8.jpg", link: "https://instagram.com/yourprofile8" },
    { src: "/9.jpg", link: "https://instagram.com/yourprofile9" },
    { src: "/10.jpg", link: "https://instagram.com/yourprofile10" },
  ];

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    5
  );

  return (
    <section id="follow-us" className="bg-black text-white section-container py-12">
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          Follow Us
        </h2>
        <div className="border-t border-gray-700"></div>
      </div>

      <div className="flex items-center justify-center space-x-4 mt-8">
      
        <div
          onClick={handlePrev}
          className="text-white text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
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
          className="text-white text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
        >
          <FaChevronRight />
        </div>
      </div>
    </section>
  );
}
