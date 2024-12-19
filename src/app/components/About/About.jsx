import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#e6d1c1] dark:bg-[#2e1f14] section-container py-8 sm:py-12 relative">
      <h2 className="p-8 text-2xl sm:text-3xl md:text-4xl text-[#4A3222] dark:text-[#f5e8d6] font-bold mb-6 sm:mb-10 text-left">
        About
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative">
        <div className="space-y-4">
          <div className="relative mb-6 sm:mb-8 group px-4 lg:px-8">
            <Image
              src="/2.jpg"
              alt="Main Image"
              width={250}
              height={350}
              className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-105 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
            />
          </div>

          <div className="relative mt-4 flex justify-center lg:justify-end group">
            <Image
              src="/3.jpg"
              alt="Secondary Image"
              width={120}
              height={160}
              className="rounded-lg object-cover shadow-2xl shadow-gray-800 dark:shadow-gray-400 transition-transform duration-300 ease-in-out group-hover:scale-105 w-full max-w-[100px] sm:max-w-[120px] md:max-w-[150px] lg:max-w-[180px]"
            />
          </div>
        </div>
        <div className="text-center md:text-left -mt-16 sm:-mt-24 md:mt-0 flex flex-col items-center md:items-start hidden lg:flex">
          <p className="text-base sm:text-lg md:text-xl text-[#4A3222] dark:text-[#f5e8d6] mb-6 sm:mb-8 leading-relaxed">
            <strong className="text-lg sm:text-xl md:text-2xl font-extrabold">Our Story</strong> <br />
            Latore Atelier is your go-to online destination for premium fashion.
            We offer a curated selection of high-quality clothing and
            accessories, designed to elevate your wardrobe. Our mission is to
            provide customers with sophisticated and stylish pieces that
            reflect their unique personality and taste.
          </p>
          <button className="bg-[#4A3222] text-white py-2 px-4 sm:px-6 rounded-full hover:bg-[#6E4C2E] dark:bg-[#f5e8d6] dark:text-[#4A3222] dark:hover:bg-[#d1b79e] transition-all duration-300 ease-in-out">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 bg-[#00000080] flex flex-col items-center justify-center p-4 sm:p-8 md:flex lg:hidden w-full max-w-none">
        <p className="text-white text-lg sm:text-xl px-4 text-center mb-4">
          Latore Atelier is your go-to online destination for premium fashion. We offer a curated selection of high-quality clothing and accessories, designed to elevate your wardrobe.
        </p>
        <button className="bg-[#4A3222] text-white py-2 px-4 rounded-full hover:bg-[#6E4C2E] dark:bg-[#f5e8d6] dark:text-[#4A3222] dark:hover:bg-[#d1b79e] transition-all duration-300 ease-in-out">
          Learn More
        </button>
      </div>
    </section>
  );
}
