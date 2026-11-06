"use client"; // Оголошуємо Client Component

import dynamic from "next/dynamic";
import Script from "next/script";
import generateConditionsJsonLd from "../seo/conditions-jsonld";

// Динамічний імпорт компонентів
const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const Conditions = dynamic(() => import("../components/Conditions/Conditions"), {
  ssr: false,
  loading: () => <div>Loading conditions...</div>,
});

export default function ConditionsPageClient() {
  const jsonLd = generateConditionsJsonLd(); // Генерація JSON-LD

  return (
    <div className="transition-colors">
      {/* JSON-LD для SEO */}
      <Script
        id="condition-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Динамічний рендеринг компонентів */}
      <Layout>
        <Conditions />
      </Layout>
    </div>
  );
}
