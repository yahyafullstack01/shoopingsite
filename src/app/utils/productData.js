// Функция для получения начальных данных продукта
export const getInitialProductData = (searchParams) => ({
    name: searchParams.get("productName"),
    price: searchParams.get("productPrice"),
    description: searchParams.get("productDescription"),
    image: searchParams.get("productImage") || "/4.jpg",
    color: searchParams.get("productColor"),
    size: searchParams.get("productSize"),
    quantity: searchParams.get("productQuantity"),
    sku: searchParams.get("productSKU"),
  });