// Выбор размера
// Эта функция обновляет выбранный размер, устанавливая значение или очищая его, если выбран "All".
export const handleSizeSelect = (size, setSelectedSize) => {
  setSelectedSize(size === "All" ? "" : size);
};

// Выбор категории
// Эта функция обновляет выбранную категорию, устанавливая значение или очищая его, если выбрана "All".
export const handleCategorySelect = (category, setSelectedCategory) => {
  setSelectedCategory(category === "All" ? "" : category);
};

// Фильтрация и сортировка продуктов
// Функция фильтрует продукты по заданным параметрам (цена, размер, цвет, категория) 
// и сортирует их в порядке возрастания или убывания цены.
export const filterAndSortProducts = (products, filters, sortOrder) => {
  const { maxPrice, selectedSize, selectedColor, selectedCategory } = filters;

  return products
    .filter((product) => {
      const matchesPrice = product.price <= maxPrice;
      const matchesSize = !selectedSize || product.size === selectedSize;
      const matchesColor = !selectedColor || product.color === selectedColor;
      const matchesCategory =
        !selectedCategory || product.category === selectedCategory;

      return matchesPrice && matchesSize && matchesColor && matchesCategory;
    })
    .sort((a, b) => {
      if (sortOrder === "priceAsc") return a.price - b.price;
      if (sortOrder === "priceDesc") return b.price - a.price;
      return 0;
    });
};

// Плавная прокрутка к элементу
// Функция прокручивает страницу до указанного элемента плавно.
export const scrollToElement = (ref) => {
  if (ref.current) {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
};

// Переход на страницу контакта
// Эта функция перенаправляет пользователя на страницу контакта с переданными данными продукта.
export const redirectToContact = (router, product) => {
  router.push(
    `/contact?productName=${product.title}&productPrice=${product.price}&productDescription=${product.name}&productImage=${product.image}&productColor=${product.color}&productSize=${product.size}`
  );
};

// Обработчик клика на продукт
// Функция устанавливает выбранный продукт и прокручивает страницу до указанного элемента.
export const handleProductClick = (product, setSelectedProduct, scrollToRef) => {
  setSelectedProduct(product);
  if (scrollToRef?.current) {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

// Обработчик кнопки "Contact Us"
// Эта функция перенаправляет пользователя на страницу контакта с информацией о продукте.
export const handleContactButtonClick = (
  router,
  product,
  selectedColor,
  selectedSize,
  quantity,
  language // Додаємо параметр для мови
) => {
  const translatedName =
    product.translations?.[language]?.name || product.title; // Перекладене ім'я
  const translatedDescription =
    product.translations?.[language]?.description || product.description; // Перекладений опис

  const updatedProduct = {
    ...product,
    color: selectedColor || product.color, // Використовуємо вибраний колір або дефолтний
    size: selectedSize || product.size, // Використовуємо вибраний розмір або дефолтний
    quantity: quantity || 1, // Використовуємо кількість або значення за замовчуванням
    image:
      product.image || product.img?.startsWith('/') || product.img?.startsWith('http')
        ? product.image || product.img
        : '/default-image.png', // Встановлюємо стандартне зображення, якщо URL неправильний
  };

  router.push(
    `/contact?productName=${encodeURIComponent(translatedName)}&productPrice=${encodeURIComponent(
      updatedProduct.price
    )}&productDescription=${encodeURIComponent(
      translatedDescription
    )}&productImage=${encodeURIComponent(
      updatedProduct.image
    )}&productColor=${encodeURIComponent(updatedProduct.color)}&productSize=${encodeURIComponent(
      updatedProduct.size
    )}&productQuantity=${encodeURIComponent(updatedProduct.quantity)}&productSKU=${encodeURIComponent(
      updatedProduct.sku
    )}`
  );
};

{/*export const handleContactButtonClick = (router, product, selectedColor, selectedSize, quantity) => {
  const updatedProduct = {
    ...product,
    color: selectedColor || product.color, // Використовуємо вибраний колір або дефолтний
    size: selectedSize || product.size,   // Використовуємо вибраний розмір або дефолтний
    quantity: quantity || 1,             // Використовуємо кількість або значення за замовчуванням
    image: product.image || product.img?.startsWith('/') || product.img?.startsWith('http') 
      ? product.image || product.img 
      : '/default-image.png', // Встановлюємо стандартне зображення, якщо URL неправильний
  };

  router.push(
    `/contact?productName=${encodeURIComponent(updatedProduct.title)}&productPrice=${encodeURIComponent(updatedProduct.price)}&productDescription=${encodeURIComponent(updatedProduct.name)}&productImage=${encodeURIComponent(updatedProduct.image)}&productColor=${encodeURIComponent(updatedProduct.color)}&productSize=${encodeURIComponent(updatedProduct.size)}&productQuantity=${encodeURIComponent(updatedProduct.quantity)}`
  );
};
*/}
// Обработчик для плавной прокрутки
// Функция прокручивает страницу до секции описания продукта.
export const scrollToDescription = (descriptionRef) => {
  if (descriptionRef.current) {
    descriptionRef.current.scrollIntoView({ behavior: "smooth" });
  }
};
