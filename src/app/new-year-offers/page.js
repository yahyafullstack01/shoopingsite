"use client";

import dynamic from "next/dynamic";
import Script from "next/script";
import Head from "next/head";
import products from "../data/products";
import seoConfig from "../../../next-seo.config";
import generateProductsJsonLd from "../seo/all-products-jsonld";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const NewYearOffersInfo = dynamic(
  () => import("../components/NewYearOffersInfo/NewYearOffersInfo"),
  { ssr: false }
);

export default function NewYearOffersPage() {
  // фільтр НОВОРІЧНИХ товарів
  const newYearProducts = products.filter(
    (p) => p.isNewYearOffer === true || p.isNewYear === true
  );

  const jsonLd = generateProductsJsonLd(newYearProducts);

  // якщо в seoConfig є окремий блок — використовуємо його,
  // якщо ні — тимчасово можна взяти newProducts
  const seo = seoConfig.newYearOffers || seoConfig.newProducts;

  return (
    <div className="transition-colors">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content={seo.robots} />
      </Head>

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