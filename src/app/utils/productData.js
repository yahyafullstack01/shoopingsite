// Function to retrieve initial product data
// getInitialProductData for ContactUs converts URL parameters into a convenient product object

/** Рядок шляху до зображення для next/image та <img> (product.image може бути об'єктом відео). */
export function getProductImageSrc(media) {
  if (!media) return "/placeholder/300x400.jpg";
  if (typeof media === "string") return media;
  if (media.type === "video" && media.poster) return media.poster;
  if (media.src) return media.src;
  return "/placeholder/300x400.jpg";
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

