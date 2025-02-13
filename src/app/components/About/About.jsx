import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";

export default function About() {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "about");

  return (
    <section className="bg-white dark:bg-gray-900 py-12 px-6 sm:px-12" id="about">
      <div className="max-w-7xl mx-auto border border-gray-300 p-6 sm:p-12 relative">
        {/* Чорна рамка */}
        <div className="absolute inset-0 border-4 border-black"></div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Зображення */}
          <div className="flex justify-center relative">
            <Image
              src="/hoom/about2.JPEG"
              alt="About Image"
              width={500}
              height={600}
              className="rounded-lg shadow-lg object-cover"
            />
            {/* Текстовий блок, що виходить на край фото */}
            <div className="absolute bottom-0 left-64 w-[150%]  bg-white p-6  shadow-lg">
              <p className="text-gray-800 dark:text-gray-300 text-base lg:text-2xl font-medium">
                Ми - втілення базових моделей та авторського, дизайнерського підходу до всіх виробів.
              </p>
              <p className="text-gray-800 dark:text-gray-300 text-base lg:text-2xl font-medium mt-2">
                Наш одяг - це поєднання класики та комфорту, жіночності та гармонії. Завдяки власному виробництву ми гарантуємо високу якість кожного виробу.
              </p>
            </div>
          </div>

          {/* Текстовий блок справа */}
          <div className="text-left p-6 bg-white mb-48 w-full">
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">ПРО НАС:</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg lg:text-2xl font-medium">
              LATORE - український бренд жіночого одягу з власним виробництвом, з досвідом понад 10 років, з двома шоурумами в Івано-Франківську та Харкові.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
