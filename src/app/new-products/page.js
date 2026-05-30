import { readFile } from "fs/promises";
import path from "path";
import seoConfig from "../../../next-seo.config";
import { PRIORITY_NEW, prioritizeByIds } from "../utils/priorities";
import { getProductImageSrc } from "../utils/productData";
import NewProductsPageClient from "./NewProductsPageClient";

const PRODUCTS_JSON = path.join(process.cwd(), "src/app/data/products.json");

function slimTranslations(translations) {
  if (!translations || typeof translations !== "object") return undefined;
  const out = {};
  for (const [lang, v] of Object.entries(translations)) {
    if (v && typeof v === "object") {
      out[lang] = {
        name: v.name,
        category: v.category,
        colors: v.colors,
        description: v.description,
      };
    }
  }
  return Object.keys(out).length ? out : undefined;
}

function mapRowForNewArrivals(p) {
  const en = p?.translations?.EN;
  const colorsFromEn = Array.isArray(en?.colors) ? en.colors : [];
  return {
    id: p.id,
    price: p.price,
    image: p.image,
    name: en?.name ?? p.name ?? "",
    category: en?.category ?? p.category ?? "",
    discountPrice: p.discountPrice,
    sizes: Array.isArray(p.sizes) ? p.sizes : [],
    colors: Array.isArray(p.colors) ? p.colors : colorsFromEn,
    images:
      Array.isArray(p.images) && p.images.length > 0
        ? p.images
        : p.image
          ? [p.image]
          : [],
    translations: slimTranslations(p.translations),
    isNew: true,
  };
}

function generateNewProductsJsonLd(products) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => {
      const imgSrc = getProductImageSrc(product.image);
      const name =
        product.translations?.EN?.name || product.name || "Unnamed Product";
      return {
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.latore.store/new-products?product=${product.id}`,
        name,
        image: {
          "@type": "ImageObject",
          url: imgSrc.startsWith("http")
            ? imgSrc
            : `https://www.latore.store${imgSrc}`,
        },
      };
    }),
  };
}

const seo = seoConfig.newProducts;

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: seo.robots,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    type: seo.openGraph.type,
    images: seo.openGraph.images,
  },
};

export default async function NewProductsPage({ searchParams }) {
  const sp = await searchParams;
  const raw = JSON.parse(await readFile(PRODUCTS_JSON, "utf8"));

  const newProductsRaw = raw.filter((p) => p.isNew === true);
  const mapped = newProductsRaw.map(mapRowForNewArrivals);
  const newProducts = prioritizeByIds(mapped, PRIORITY_NEW);

  const productParam = sp?.product;
  const prefetchedProduct =
    productParam != null && productParam !== ""
      ? raw.find((p) => String(p.id) === String(productParam)) ?? null
      : null;

  const jsonLd = generateNewProductsJsonLd(newProducts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewProductsPageClient
        newProducts={newProducts}
        prefetchedProduct={prefetchedProduct}
      />
    </>
  );
}
