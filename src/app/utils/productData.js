// Function to retrieve initial product data
// getInitialProductData for ContactUs converts URL parameters into a convenient product object

import products from "../data/products";

/**
 * Display-only: resolve cart line name/color for the current UI language.
 * Does not change what was saved in the backend cart.
 */
export function getCartItemDisplay(item, language = "EN") {
  const lang = language === "UA" ? "UA" : "EN";
  const fallbackName = item?.name || item?.title || "Product";
  const fallbackColor = item?.color || "";
  const catalog = Array.isArray(products) ? products : [];
  const product = catalog.find(
    (p) => String(p?.id) === String(item?.productId ?? item?.id)
  );
  if (!product) {
    return { name: fallbackName, color: fallbackColor };
  }

  const name =
    product.translations?.[lang]?.name ||
    product.translations?.EN?.name ||
    product.name ||
    fallbackName;

  let color = fallbackColor;
  const colorKey = String(fallbackColor).trim().toLowerCase();
  if (colorKey) {
    let index = -1;
    for (const code of ["EN", "UA", "FR", "RU"]) {
      const list = product.translations?.[code]?.colors;
      if (!Array.isArray(list)) continue;
      index = list.findIndex(
        (c) => String(c).trim().toLowerCase() === colorKey
      );
      if (index >= 0) break;
    }
    if (index < 0 && Array.isArray(product.colors)) {
      index = product.colors.findIndex(
        (c) => String(c).trim().toLowerCase() === colorKey
      );
    }
    const localized = product.translations?.[lang]?.colors?.[index];
    if (localized) color = localized;
  }

  return { name, color };
}

/** Рядок шляху до зображення для next/image та <img> (product.image може бути об'єктом відео). */
export function getProductImageSrc(media) {
  if (!media) return "/placeholder/300x400.jpg";
  let src = null;
  if (typeof media === "string") src = media;
  else if (media.type === "video" && media.poster) src = media.poster;
  else if (media.src) src = media.src;
  if (!src) return "/placeholder/300x400.jpg";
  // Paths with spaces (e.g. "LeatherPants Belt") break next/image unless encoded
  return src.includes(" ") ? encodeURI(src) : src;
}

export const getInitialProductData = (searchParams) => {
  const productImage = searchParams.get("productImage");
  return {
  name: searchParams.get("productName") || "Unknown Product", // Default: "Unknown Product"
  price: searchParams.get("productPrice") || "0", // Default: "0"
  description: searchParams.get("productDescription") || "No description available.", // Default: No description
  image: productImage && !productImage.endsWith(".mp4")
  ? productImage
  : "/hoom/cont.jpg",
  video: searchParams.get("productVideo") || null,

  color: searchParams.get("productColor") || "Not specified", // Default: Not specified
  size: searchParams.get("productSize") || "Not specified", // Default: Not specified
  quantity: searchParams.get("productQuantity") || 1, // Default value: 1
  sku: searchParams.get("productSKU") || "N/A", // Default value: "N/A"

}};

