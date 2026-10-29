"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import Head from "next/head";
import products from "../../data/products";
import { PRIORITY_TOP, prioritizeByIds } from "../../utils/priorities";
import { getProductImageSrc } from "../../utils/productData";

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);

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
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(10);
  const { language, translateList } = useLanguage();
  const menuItems = translateList("home", "top_products") || [];

  const topRaw = useMemo(() => {
    const onlyTop = products.filter((p) => p.isTop);
    return dedupeById(onlyTop);
  }, []);

  const topProducts = useMemo(
    () => prioritizeByIds(topRaw, PRIORITY_TOP),
    [topRaw]
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setVisibleCount(width < 768 ? 4 : width < 1024 ? 6 : 10);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (topProducts.length === 0) return null;

  const renderedCount = Math.min(visibleCount, topProducts.length);
  const firstImage = topProducts[0]?.image
    ? encodeURI(topProducts[0].image)
    : null;

  return (
    <>
      {firstImage ? (
        <Head>
          <link rel="preload" as="image" href={firstImage} type="image/avif" />
        </Head>
      ) : null}

      <section
        id="top-products"
        className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300 font-sans"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="name" content={menuItems[0] || "Top Products"} />
        <meta itemProp="numberOfItems" content={String(renderedCount)} />
        <meta
          itemProp="itemListOrder"
          content="https://schema.org/ItemListOrderAscending"
        />

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white">
            {menuItems[0]}
          </h2>
          <button
            type="button"
            onClick={() => router.push("/Top-products")}
            className="text-sm sm:text-base font-medium text-black dark:text-white hover:underline"
          >
            {menuItems[1] || "View All →"}
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {topProducts.slice(0, renderedCount).map((product, index) => {
            const name =
              product.translations?.[language]?.name ||
              product.name ||
              product.title ||
              "Product";
            const url = `/Top-products?product=${getId(product)}`;

            return (
              <div
                key={getId(product)}
                className="relative w-full aspect-[2/3] min-h-0 rounded-xl overflow-hidden shadow-md dark:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
                onClick={() => router.push(url, { scroll: false })}
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
    </>
  );
}
