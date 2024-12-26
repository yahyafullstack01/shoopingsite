//Логіка фільтрації
export function filterProducts(products, { maxPrice, selectedSize, selectedColor, selectedCategory }) {
  return products.filter((product) => {
    const matchesPrice = product.price <= maxPrice;
    const matchesSize = selectedSize ? product.size === selectedSize : true;
    const matchesColor = selectedColor ? product.color === selectedColor : true;
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;

    return matchesPrice && matchesSize && matchesColor && matchesCategory;
  });
}
{/*export const filterProducts = (products, filters) => {
    const { maxPrice, selectedSize, selectedColor } = filters;
    return products.filter(
      (product) =>
        product.price <= maxPrice &&
        (selectedSize === '' || product.size === selectedSize) &&
        (selectedColor === '' || product.color === selectedColor) &&
        (selectedCategory === '' || product.category === selectedCategory)

    );
  };
  */}
  