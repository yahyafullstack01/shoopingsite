"use client"; // Оголошуємо файл як клієнтський компонент

import dynamic from "next/dynamic";
import Script from "next/script";
import topProductsJsonLd from "../seo/top-products-jsonld";
import products from "../data/products";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const TopProductsInfo = dynamic(() => import("../components/TopProductsInfo/TopProductsInfo"), {
  ssr: false,
  loading: () => <div>Loading top products...</div>,
});

export default function TopProductsPageClient() {
  const topProducts = products.filter((product) => product.isTop);
  const jsonLd = topProductsJsonLd(topProducts);

  return (
    <div className="transition-colors">
      {/* JSON-LD для SEO */}
      <Script
        id="top-products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <TopProductsInfo />
      </Layout>
    </div>
  );
}
