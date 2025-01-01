// Функция для получения начальных данных продукта
//getInitialProductData для ContactUs перетворює параметри URL у зручний об'єкт продукту
export const getInitialProductData = (searchParams) => ({
  name: searchParams.get("productName") || "Unknown Product",
  price: searchParams.get("productPrice") || "0",
  description: searchParams.get("productDescription") || "No description available.",
  image: searchParams.get("productImage") || "/default-image.png", // Стандартне зображення
  color: searchParams.get("productColor") || "Not specified",
  size: searchParams.get("productSize") || "Not specified",
  quantity: searchParams.get("productQuantity") || 1, // Значення за замовчуванням: 1
  sku: searchParams.get("productSKU") || "N/A", // Значення за замовчуванням
});
