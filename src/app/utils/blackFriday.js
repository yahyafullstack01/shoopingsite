/**
 * Black Friday uses the same flag as Special Offers:
 * only products with isSpecialOffer === true.
 */
export function isBlackFridayProduct(product) {
  if (!product) return false;
  return product.isSpecialOffer === true;
}
