"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import useImageFollow from "../../hooks/useImageFollow";
import Head from "next/head";
import products from "../../data/products";

export default function TopProducts() {
  // Вибираємо лише топ-продукти
  const topProducts = products.filter((product) => product.isTop);

  const [visibleImagesCount, setVisibleImagesCount] = useState(10);

  useEffect(() => {
    const updateVisibleImages = () => {
      setVisibleImagesCount(window.innerWidth <= 460 ? 1 : 10);
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, []);

  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    topProducts.length,
    visibleImagesCount
  );

  const { translateList } = useLanguage();
  const menuItems = translateList("home", "top_products");

  useKeyboardNavigation(handlePrev, handleNext);

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href={topProducts[0]?.image || ""}
          type="image/avif"
        />
      </Head>
      <section
        id="top-products"
        className="bg-[#fcf8f3] dark:bg-gray-800 text-black dark:text-gray-100 section-container py-12"
      >
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
            {menuItems[0]}
          </h2>
          <div className="border-t border-gray-300 dark:border-gray-700"></div>
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <div
            onClick={handlePrev}
            className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
          >
            <FaChevronLeft />
          </div>
          <div
  className="flex overflow-hidden gap-4 px-4 justify-center"
  style={{ height: "300px" }}
>

            {displayedImages.map((imageIndex, idx) => {
  const product = topProducts[imageIndex];

  if (!product) return null; // Запобігаємо помилкам, якщо product відсутній

  return (
    <Link
      key={`${product.id}-${idx}`} // Використовуємо idx для уникнення дублікатів
      href={`/Top-products?product=${product.id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-shrink-0 group"
    >
      <Image
        src={product.image}
       alt={`Топ продукт ${imageIndex + 1}`}

        width={250}
        height={300}
        priority={imageIndex === 0}
        style={{
          objectFit: "cover",
          width: "200px",
          height: "300px",
        }}
        sizes="(max-width: 425px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px"
        quality={85}
        className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
      />
    </Link>
  );
})}

          </div>

          <div
            onClick={handleNext}
            className="text-2xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
          >
            <FaChevronRight />
          </div>
        </div>
      </section>
    </>
  );
}
