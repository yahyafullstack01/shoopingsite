"use client";

import Image from "next/image";
import { getProductImageSrc } from "../../utils/productData";
import { useRouter } from "next/navigation";
import { useEffect, useState, useMemo } from "react";
import products from "../../data/products";
import { PRIORITY_NEW, prioritizeByIds } from "../../utils/priorities";
import { useLanguage } from "../../Functions/useLanguage";

const NewArrivals = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const { language, translateList } = useLanguage();
  const newArrivalsData = translateList("home", "newArrivals") || {};

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setVisibleCount(width < 768 ? 4 : width < 1024 ? 6 : 10);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 1) Беремо лише новинки
  const onlyNew = useMemo(
    () => products.filter((p) => p.isNew === true),
    []
  );

  // 2) Застосовуємо пріоритети для новинок
  const newProducts = useMemo(
    () => prioritizeByIds(onlyNew, PRIORITY_NEW),
    [onlyNew]
  );

  const handleViewAll = () => router.push("/new-products");

  // 🔹 перехід по айді на сторінку new-products
  const handleCardClick = (id) => {
    router.push(`/new-products?product=${id}`, { scroll: false });
  };

  const renderedCount = Math.min(visibleCount, newProducts.length);

  return (
    <section
      className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300 font-sans"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content={newArrivalsData.heading || "Our New Arrivals"} />
      <meta itemProp="numberOfItems" content={String(renderedCount)} />
      <meta
        itemProp="itemListOrder"
        content="https://schema.org/ItemListOrderAscending"
      />

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white">
          {newArrivalsData.heading || "Our New Arrivals"}
        </h2>
        <button
          onClick={handleViewAll}
          className="text-sm sm:text-base font-medium text-black dark:text-white hover:underline"
        >
          {newArrivalsData.viewAll || "View All →"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {newProducts.slice(0, renderedCount).map((product, index) => {
          const name =
            product.translations?.[language]?.name || product.name || newArrivalsData.productFallback || "New Arrival";
          const url = `/new-products?product=${product.id}`;

          return (
            <div
              key={product.id}
              className="relative w-full aspect-[2/3] min-h-0 rounded-xl overflow-hidden shadow-md dark:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              onClick={() => handleCardClick(product.id)}
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              <meta itemProp="position" content={String(index + 1)} />

              <div
                itemProp="item"
                itemScope
                itemType="https://schema.org/Product"
                className="relative w-full h-full"
              >
                <meta itemProp="name" content={name} />
                <link itemProp="url" href={url} />

                <div className="relative w-full h-full">
                  <Image
                    src={getProductImageSrc(product.image)}
                    alt={name}
                    fill
                    className="object-cover"
                    itemProp="image"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivals;
