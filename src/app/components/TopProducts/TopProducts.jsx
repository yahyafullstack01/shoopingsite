'use client';

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";
import useKeyboardNavigation from "../../hooks/useKeyboardNavigation";
import useImageFollow from "../../hooks/useImageFollow";
import Head from "next/head";
import products from "../../data/products";
import { PRIORITY_TOP, prioritizeByIds } from "../../utils/priorities";

// стабільний геттер id
const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

// унікалізація за id
const dedupeById = (list) => {
  const seen = new Set();
  return list.filter((p) => {
    const id = getId(p);
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
};

export default function TopProducts() {
  // 1) Сира вибірка топів + дедуплікація
  const topRaw = useMemo(() => {
    const onlyTop = products.filter((p) => p.isTop);
    return dedupeById(onlyTop);
  }, []);

  // 2) Пріоритетні ID -> на початок (решта — як було)
  const topProducts = useMemo(
    () => prioritizeByIds(topRaw, PRIORITY_TOP),
    [topRaw]
  );

  const [visibleImagesCount, setVisibleImagesCount] = useState(10);

  useEffect(() => {
    const updateVisibleImages = () => {
      const base = window.innerWidth <= 460 ? 1 : 10;
      // не більше наявних елементів
      setVisibleImagesCount(Math.min(base, topProducts.length));
    };
    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);
    return () => window.removeEventListener("resize", updateVisibleImages);
  }, [topProducts.length]);

  // 3) Слайдер працює з відсортованим масивом
  const { displayedImages, handleNext, handlePrev } = useImageFollow(
    topProducts.length,
    Math.min(visibleImagesCount, topProducts.length)
  );

  const { translateList } = useLanguage();
  const menuItems = translateList("home", "top_products");

  useKeyboardNavigation(handlePrev, handleNext);

  if (topProducts.length === 0) return null;

  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href={
            topProducts[0]?.image
              ? encodeURI(topProducts[0].image) // кодує пробіли у %20
              : "/Jackets/Leather-Jacket/4.avif"
          }
          type="image/avif"
        />
      </Head>

      <section
        id="top-products"
        className="bg-[#fcf8f3] dark:bg-gray-700 text-black dark:text-gray-100 section-container py-12"
      >
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mb-6 text-center">
            {menuItems[0]}
          </h2>
          <div className="border-t border-gray-300 dark:border-gray-700" />
        </div>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="text-black dark:text-gray-300 text-2xl sm:text-3xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 dark:hover:text-gray-400 transition-all duration-300"
          >
            <FaChevronLeft />
          </button>

          <div
            className="flex overflow-hidden gap-4 px-4 justify-center"
            style={{ height: "400px" }}
          >
            {displayedImages.map((imageIndex) => {
              const product = topProducts[imageIndex];
              if (!product) return null;

              const pid = getId(product);
              const src = product.image || "/Shirts/Corset Shirt/6.avif";
              const isLocal =
                typeof src === "string" &&
                (src.startsWith("/") || src.startsWith("./") || src.startsWith("../"));

              return (
                <Link
                  key={`top-${pid}-${imageIndex}`} // ✅ унікальний ключ
                  href={`/Top-products?product=${pid}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                >
                  <Image
                    src={src}
                    alt={`Топ продукт ${pid}`}
                    width={300}
                    height={400}
                    priority={imageIndex === 0}
                    style={{ objectFit: "cover", width: "300px", height: "400px" }}
                    sizes="(max-width: 425px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 20vw, 300px"
                    quality={85}
                    className="rounded-lg object-cover shadow-lg transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:opacity-90"
                    unoptimized={isLocal}
                    loader={isLocal ? ({ src }) => src : undefined}
                  />
                </Link>
              );
            })}
          </div>

          <button
            onClick={handleNext}
            aria-label="Next"
            className="text-2xl cursor-pointer mx-2 sm:mx-4 hover:text-gray-500 transition-all duration-300"
          >
            <FaChevronRight />
          </button>
        </div>
      </section>
    </>
  );
}
