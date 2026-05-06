import { readFile } from "fs/promises";
import path from "path";
import { redirect } from "next/navigation";
import CatalogPageClient from "./CatalogPageClient";

const PRODUCTS_JSON = path.join(process.cwd(), "src/app/data/products.json");
const PAGE_SIZE = 12;

function slimTranslations(translations) {
  if (!translations || typeof translations !== "object") return undefined;
  const out = {};
  for (const [lang, v] of Object.entries(translations)) {
    if (v && typeof v === "object") {
      out[lang] = {
        name: v.name,
        category: v.category,
        colors: v.colors,
      };
    }
  }
  return Object.keys(out).length ? out : undefined;
}

function mapRowForCatalog(p) {
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
  };
}

function searchParamsToURLSearchParams(sp) {
  const q = new URLSearchParams();
  if (!sp || typeof sp !== "object") return q;
  for (const [key, value] of Object.entries(sp)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) q.append(key, String(v));
    } else {
      q.set(key, String(value));
    }
  }
  return q;
}

export default async function Products({ searchParams }) {
  const sp = await searchParams;
  const raw = JSON.parse(await readFile(PRODUCTS_JSON, "utf8"));
  const mapped = raw.map(mapRowForCatalog);

  const categoryParam = (sp?.category ?? "").toString().toLowerCase();
  const pool =
    !categoryParam || categoryParam === "all"
      ? mapped
      : mapped.filter((p) => p.category.toLowerCase() === categoryParam);

  const pageRaw = parseInt(String(sp?.page ?? "1"), 10);
  const pageNum = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
  const totalPages = Math.max(1, Math.ceil(pool.length / PAGE_SIZE));
  const safePage = Math.min(pageNum, totalPages);

  if (pageNum !== safePage) {
    const q = searchParamsToURLSearchParams(sp);
    q.set("page", String(safePage));
    redirect(`/All-products?${q.toString()}`);
  }

  const productParam = sp?.product;
  const prefetchedProduct =
    productParam != null && productParam !== ""
      ? raw.find((p) => String(p.id) === String(productParam)) ?? null
      : null;

  return (
    <CatalogPageClient catalogPool={pool} prefetchedProduct={prefetchedProduct} />
  );
}
