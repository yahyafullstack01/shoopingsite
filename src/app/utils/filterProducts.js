//Логіка фільтрації
export const filterProducts = (products, filters) => {
    const { maxPrice, selectedSize, selectedColor } = filters;
    return products.filter(
      (product) =>
        product.price <= maxPrice &&
        (selectedSize === '' || product.size === selectedSize) &&
        (selectedColor === '' || product.color === selectedColor)
    );
  };
  