import { readFile } from "fs/promises";
import path from "path";
import { notFound, redirect } from "next/navigation";
import {
  generateProductSchema,
  generateBreadcrumbSchema,
} from "../../seo/product-schema";
import { getProductSlug, getProductIdFromSlug } from "../../utils/productSlug";
import Layout from "../../components/Layout";
import ProductPageClient from "./ProductPageClient";

const PRODUCTS_JSON = path.join(process.cwd(), "src/app/data/products.json");
const SITE_URL = "https://www.latore.store";

async function loadProducts() {
  const raw = await readFile(PRODUCTS_JSON, "utf8");
  return JSON.parse(raw);
}

async function findProductBySlug(slug) {
  const id = getProductIdFromSlug(slug);
  if (!id) return null;
  const products = await loadProducts();
  const product = products.find((p) => String(p.id) === String(id));
  return product ? { product, products } : null;
}

export async function generateStaticParams() {
  const products = await loadProducts();
  return products.map((p) => ({ slug: getProductSlug(p) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const found = await findProductBySlug(slug);
  if (!found) return {};

  const { product } = found;
  const name = product.translations?.EN?.name || product.name;
  const descriptionRaw = product.translations?.EN?.description;
  const description = Array.isArray(descriptionRaw)
    ? descriptionRaw[0]
    : descriptionRaw || `${name} — Latore Atelier`;
  const canonicalSlug = getProductSlug(product);
  const canonicalUrl = `${SITE_URL}/product/${canonicalSlug}`;
  const image = product.image
    ? `${SITE_URL}${typeof product.image === "string" ? product.image : ""}`
    : `${SITE_URL}/logo-social.jpg`;

  return {
    title: `${name} | Latore Atelier`,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${name} | Latore Atelier`,
      description,
      url: canonicalUrl,
      type: "website",
      images: [{ url: image, width: 1200, height: 1500 }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const found = await findProductBySlug(slug);
  if (!found) notFound();

  const { product, products } = found;

  // Keep the id-based lookup forgiving, but canonicalize the URL text —
  // avoids duplicate-content pages if a product name changes later.
  const canonicalSlug = getProductSlug(product);
  if (slug !== canonicalSlug) {
    redirect(`/product/${canonicalSlug}`);
  }

  const productSchema = generateProductSchema(product, "EN");
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_URL },
    { name: "All products", url: `${SITE_URL}/All-products` },
    {
      name: product.translations?.EN?.name || product.name,
      url: `${SITE_URL}/product/${canonicalSlug}`,
    },
  ]);

  const relatedProducts = products
    .filter((p) => p.category === product.category && String(p.id) !== String(product.id))
    .slice(0, 4);

  return (
    <>
      {/* Plain <script> (not next/script) — this must be in the initial
          server HTML for every crawler, not injected after hydration. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Layout>
        <ProductPageClient product={product} relatedProducts={relatedProducts} />
      </Layout>
    </>
  );
}
