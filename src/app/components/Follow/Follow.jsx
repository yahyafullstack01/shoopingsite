"use client";
import Image from "next/image";
import useImageFollow from "@/app/hooks/useImageFollow";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function FollowUs() {
  const images = [
    { src: "/image1.jpg", link: "https://instagram.com/yourprofile1" },
    { src: "/image2.jpg", link: "https://instagram.com/yourprofile2" },
    { src: "/image3.jpg", link: "https://instagram.com/yourprofile3" },
    { src: "/image4.jpg", link: "https://instagram.com/yourprofile4" },
    { src: "/image5.jpg", link: "https://instagram.com/yourprofile5" },
    { src: "/image6.jpg", link: "https://instagram.com/yourprofile6" },
    { src: "/image7.jpg", link: "https://instagram.com/yourprofile7" },
    { src: "/image8.jpg", link: "https://instagram.com/yourprofile8" },
    { src: "/image9.jpg", link: "https://instagram.com/yourprofile9" },
    { src: "/image10.jpg", link: "https://instagram.com/yourprofile10" },
  ];
  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    images.length,
    5 
  );
 
  return (
    <section id="follow-us" className="bg-black text-white py-16 px-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold mb-10">Follow Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-300 "> </div>
      </div>
     
      <div className="space-y-{value} flex items-center">
        <div
          onClick={handlePrev}
          className="text-white text-3xl cursor-pointer mx-4 hover:text-gray-500"
        >
          <FaChevronLeft />
        </div>
        
        {/* Фото */}
        <div className="flex space-x-4 overflow-hidden gap-8 mt-8">
  {displayedImages.map((imageIndex) => (
    <a
      key={imageIndex}
      href={images[imageIndex].link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0"
    >
      <Image
        src={images[imageIndex].src}
        alt={`Image ${imageIndex + 1}`}
        width={200}
        height={200}
        className="rounded-lg object-cover"
      />
    </a>
  ))}
</div>
        <div
          onClick={handleNext}
          className="text-white text-3xl cursor-pointer mx-4 hover:text-gray-500"
        >
          <FaChevronRight />
        </div>
      
      </div>
      
    </section>
  );
}  