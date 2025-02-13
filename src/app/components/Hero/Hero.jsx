
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import Head from "next/head";

const Hero = () => {
  const { translateList } = useLanguage();
  const menuItems = translateList("home", "hero");

  return (
    <>
      <Head>
        <meta name="description" content="Latore - Український бренд жіночого одягу" />
        <meta name="keywords" content="Latore, жіночий одяг, українська мода, стильний одяг" />
        <meta property="og:title" content="Latore - Український бренд жіночого одягу" />
        <meta property="og:description" content="Ласкаво просимо на наш сайт! Досліджуйте останні тренди моди." />
        <meta property="og:image" content="/hoom/hero2.JPG" />
        <meta property="og:url" content="https://example.com" />
      </Head>

      <section
        className="flex flex-row justify-center items-center gap-2 sm:gap-16 section-container overflow-hidden"
        aria-labelledby="hero-heading"
        role="banner"
      >
        {/* Велике зображення */}
        <div className="relative w-[50vw] sm:w-[400px] lg:w-[500px] max-w-[600px] h-auto flex-shrink-0 overflow-hidden">
          <Image
            src="/hoom/hero2.JPG"
            alt="Latore Collection"
            width={600}
            height={700}
            className="object-cover shadow-lg w-full h-auto"
            priority
          />
        </div>

        {/* Текстовий блок + менше зображення */}
        <div className="flex flex-col items-center md:items-start gap-2  text-center md:text-left w-[40vw] sm:w-auto">
          <div className="relative w-[35vw] sm:w-[300px] lg:w-[350px] max-w-[600px] h-auto overflow-hidden">
            <Image
              src="/hoom/hero.JPG"
              alt="Latore Collection Style"
              width={600}
              height={500}
              className="object-cover shadow-lg w-full h-auto"
              priority
            />
          </div>
          <h2 className="text-xl sm:text-5xl lg:text-7xl font-bold text-gray-700 dark:text-white ml-2 sm:ml-12 sm:mt-8">LATORE</h2>
          <p className="text-xs sm:text-xl lg:text-3xl text-gray-600 dark:text-white ml-2 sm:ml-16 sm:mt-4">
            Український бренд 
            </p>
          <p className="text-xs sm:text-xl lg:text-3xl text-gray-600 dark:text-white ml-2 sm:ml-24 ">
          жіночого одягу
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
