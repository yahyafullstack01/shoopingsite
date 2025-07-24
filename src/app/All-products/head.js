import seoConfig from "../../../next-seo.config";
import generateProductsJsonLd from "../../seo/all-products-jsonld";
import products from "../../data/products";

export default function Head() {
  const seo = seoConfig.allProducts;
  const jsonLd = generateProductsJsonLd(products);

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots} />
      <link rel="canonical" href={seo.canonical} />
      <meta property="og:title" content={seo.openGraph.title} />
      <meta property="og:description" content={seo.openGraph.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seo.openGraph.url} />
      <meta property="og:image" content={seo.openGraph.images[0].url} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
