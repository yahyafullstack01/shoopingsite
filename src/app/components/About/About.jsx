import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function About() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "about");

  return (
    <section className="bg-white dark:bg-gray-900 py-4 sm:py-12  sm:px-12 mt-4" id="about">
      <div className="max-w-8xl mx-auto relative">
       
        {/* Макет для планшетів та десктопів */}
   
<div className="relative hidden sm:grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 xl:gap-48">
          {/* Зображення */}
          <div className="flex justify-start relative group  xl:ml-36 overflow-hidden xl:w-[600px]">
  <Image
    src="/hoom/ab.jpg"
    alt="About Image"
    width={500}
    height={600}
    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
          </div>

<div className="mt-16  bg-white dark:bg-gray-900 mb-48 w-full">
            <h2 className=" text-2xl sm:text-4xl font-normal text-gray dark:text-white mb-4">{menuItems[0]}</h2>
            <p className="mt-8  dark:text-gray-300 text-lg lg:text-2xl">
            {menuItems[1]}
             
            </p>
            <p className="mt-4 text-gray dark:text-gray-300 text-base lg:text-2xl">
            {menuItems[2]}
              </p>
              <p className="mt-4 text-gray dark:text-gray-300 text-base lg:text-2xl">
              {menuItems[3]}
              </p>
              <p className="mt-4 text-gray dark:text-gray-300 text-base lg:text-2xl">
              {menuItems[4]}
              </p>
              <p className="mt-4 text-gray dark:text-gray-300 text-base lg:text-2xl">
              {menuItems[5]}
              </p>              
          </div>
        </div>

        {/* Макет для мобільних (окремо від grid) */}
        <div className="relative sm:hidden w-screen">
  <div className="relative w-full">
    {/* Зображення */}
    <div className="relative w-full h-[450px] sm:h-[600px] overflow-hidden">
      <Image
        src="/hoom/ab.jpg"
        alt="About Image"
        fill
        style={{ objectFit: "cover" }}
        className="object-cover transition-transform duration-300 ease-in-out"
      />
    </div>

    {/* Текстовий блок */}
    <div
      className="absolute bottom-4 left-0 w-full 
      bg-white/90 dark:bg-gray-900/80 p-4 text-center
      max-h-[60%] overflow-y-auto rounded-xl shadow-md z-20"
    >
      <h2 className="text-xl font-normal text-gray dark:text-white mb-2">{menuItems[0]}</h2>
      <p className="text-gray dark:text-white text-xs sm:text-sm mt-2">{menuItems[1]}</p>
      <p className="text-gray dark:text-white text-xs sm:text-sm mt-2">{menuItems[2]}</p>
      <p className="text-gray dark:text-white text-xs sm:text-sm mt-2">{menuItems[3]}</p>
      <p className="text-gray dark:text-white text-xs sm:text-sm mt-2">{menuItems[4]}</p>
      <p className="text-gray dark:text-white text-xs sm:text-sm mt-2">{menuItems[5]}</p>
    </div>
  </div>
</div>
</div>
    </section>
  );
}
