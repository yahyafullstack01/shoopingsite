"use client";

import dynamic from "next/dynamic";
import Script from "next/script";
import products from "../data/products";
import generateProductsJsonLd from "../seo/all-products-jsonld";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const NewYearOffersInfo = dynamic(
  () => import("../components/NewYearOffersInfo/NewYearOffersInfo"),
  { ssr: false }
);

export default function NewYearOffersPageClient() {
  // фільтр НОВОРІЧНИХ товарів
  const newYearProducts = products.filter(
    (p) => p.isNewYearOffer === true || p.isNewYear === true
  );

  const jsonLd = generateProductsJsonLd(newYearProducts);

  return (
    <div className="transition-colors">
      <Script
        id="new-year-offers-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
        <NewYearOffersInfo products={newYearProducts} />
      </Layout>
    </div>
  );
}
