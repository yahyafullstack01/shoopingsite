"use client"; // Оголошуємо файл як Client Component

import dynamic from "next/dynamic";
import Script from "next/script";
import offersJsonLd from "../seo/offers-jsonld";
import products from "../data/products"; // Загальний масив продуктів

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const OffersInfo = dynamic(() => import("../components/OffersInfo/OffersInfo"), {
  ssr: false,
  loading: () => <div>Loading offers...</div>, // Резервний стан
});

export default function OffersPageClient() {
  const offers = products; // Використовуємо загальний масив продуктів
  const jsonLd = offersJsonLd(offers); // Генеруємо JSON-LD тільки для спеціальних пропозицій

  return (
    <div className="transition-colors">
      {/* JSON-LD для SEO */}
      <Script
        id="offers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <OffersInfo />
      </Layout>
    </div>
  );
}
