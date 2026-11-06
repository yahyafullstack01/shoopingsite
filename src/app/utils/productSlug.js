// Shared slug helpers for individual product pages (/product/[slug]).
// The numeric id is the real lookup key; the text after it is only for
// readability/SEO (keyword in the URL) and is always derived from the
// English name so links never contain Cyrillic/percent-encoded text.

export function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export function getProductSlug(product) {
  const name =
    product?.translations?.EN?.name || product?.name || "product";
  const slugName = slugify(name);
  return slugName ? `${product.id}-${slugName}` : String(product.id);
}

export function getProductHref(product) {
  return `/product/${getProductSlug(product)}`;
}

export function getProductIdFromSlug(slug) {
  const match = String(slug || "").match(/^(\d+)/);
  return match ? match[1] : null;
}
