import TopProductsInfo from "../components/TopProductsInfo/TopProductsInfo";
import Layout from "../components/Layout";
import Head from "next/head";
import Script from "next/script";
import topProductsJsonLd from "../seo/top-products-jsonld";
import products from "../data/products"; // Загальний масив продуктів
import seoConfig from "../../../next-seo.config";

export default function TopProductspage() {
  // Фільтруємо продукти, позначені як `isTop`
  const topProducts = products.filter((product) => product.isTop);

  const jsonLd = topProductsJsonLd(topProducts); // Генеруємо JSON-LD для топ продуктів

  const seo = seoConfig.topProducts; // SEO-конфігурація

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
        id="top-products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout>
        <TopProductsInfo />
      </Layout>
    </div>
  );
}