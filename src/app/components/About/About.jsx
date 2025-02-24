import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function About() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "about");

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 sm:px-12" id="about">
      <div className="max-w-8xl mx-auto relative">
       
        {/* Макет для планшетів та десктопів */}
   
<div className="relative hidden sm:grid grid-cols-1 md:grid-cols-2 items-center md:gap-8 xl:gap-2">
          {/* Зображення */}
          <div className="flex justify-start relative group xl:ml-36 overflow-hidden">
  <Image
    src="/hoom/about2.JPEG"
    alt="About Image"
    width={500}
    height={600}
    className="rounded-lg object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />


          {/*  
          
          <div className="flex justify-center relative">
            <Image
              src="/hoom/about2.JPEG"
              alt="About Image"
              width={500}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-0 left-48 lg:left-64 w-[150%] bg-white dark:bg-black p-6 shadow-lg">
              <p className="text-gray-800 dark:text-gray-300 text-base lg:text-2xl font-medium">
                Ми - втілення базових моделей та авторського, дизайнерського підходу до всіх виробів.
              </p>
              <p className="text-gray-800 dark:text-gray-300 text-base lg:text-2xl font-medium mt-2">
                Наш одяг - це поєднання класики та комфорту, жіночності та гармонії. Завдяки власному виробництву ми гарантуємо високу якість кожного виробу.
              </p>
            </div>*/}
          </div>

          {/* Текстовий блок справа */}
  
<div className="mt-16   bg-white dark:bg-black mb-48 w-full">
            <h2 className=" text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">{menuItems[0]}</h2>
            <p className="mt-8 text-gray-800 dark:text-gray-300 text-lg lg:text-2xl font-medium">
            {menuItems[1]}
             
            </p>
            <p className="mt-4 text-gray-800 dark:text-gray-300 text-base lg:text-2xl font-medium">
            {menuItems[2]}
              </p>
              <p className="mt-4 text-gray-800 dark:text-gray-300 text-base lg:text-2xl font-medium">
              {menuItems[3]}
              </p>
          </div>
        </div>

        {/* Макет для мобільних (окремо від grid) */}
        <div className="relative sm:hidden flex justify-center">
          <div className="relative w-full">
            {/* Зображення */}
            <div className="relative group w-full h-[450px] sm:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/hoom/about2.JPEG"
                alt="About Image"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg  object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
  />
               
             
            </div>

            {/* Текстовий блок на всю ширину */}
            <div
              className={`absolute bottom-[5%] left-0 w-full 
                bg-white/90 dark:bg-gray-800 p-6 text-center transition-all duration-500`}
            >
              <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">ПРО НАС:</h2>
              <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-base lg:text-xl font-medium">
                LATORE - український бренд жіночого одягу з власним виробництвом, з досвідом понад 10 років, 
                з двома шоурумами в Івано-Франківську та Харкові.
              </p>
              <p className="text-gray-800 dark:text-gray-300 text-xs sm:text-sm md:text-base lg:text-xl font-medium mt-2">
                Ми - втілення базових моделей та авторського, дизайнерського підходу до всіх виробів.
                Наш одяг - це поєднання класики та комфорту, жіночності та гармонії.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
