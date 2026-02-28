const PRIORITY_BY_CATEGORY = {
  all: [],
  costumes: [161, 281, 191, 181, 177],
  dresses: [268, 171, 26, 269, 267],     
  shirts:  [100],
  skirts:  [97, 286, 102, 154 ],
  sweaters:[229, 189, 263, 36],
  pants:   [222, 205, 28, 192, 90],
  jackets: [162, 232, 182],
  tops:    [],
  outerwear: [],
  shorts:  [],
};

const getId = (p) => Number(p?.id ?? p?._id ?? p?.productId);
const norm = (s) => (s || '').toString().trim().toLowerCase();

// Size selection
// This function updates the selected size, setting a value or clearing it if "All" is selected.

export const handleSizeSelect = (size, setSelectedSize) => {
  if (size === "All") {
    setSelectedSize(""); // Скидає фільтр розмірів
  } else {
    setSelectedSize(size); // Встановлює вибраний розмір
  }
};

// Category selection
// This function updates the selected category, setting a value or clearing it if "All" is selected.
export const handleCategorySelect = (category, setSelectedCategory) => {
  setSelectedCategory(category === "All" ? "" : category);
};

// Filtering and sorting products
// This function filters products based on the given parameters (price, size, color, category)
// and sorts them in ascending or descending order of price.
export const filterAndSortProducts = (products, filters, sortOrder) => {
  const { maxPrice, selectedSize, selectedColor, selectedCategory } = filters;

  // 1) Фільтр
  let filtered = products.filter((product) => {
    const price = product.discountPrice ?? product.price;
    const matchesPrice = price <= maxPrice;
    const matchesSize =
      !selectedSize || (Array.isArray(product.sizes) && product.sizes.includes(selectedSize));
    const matchesColor =
      !selectedColor || (Array.isArray(product.colors) && product.colors.includes(selectedColor));
    const matchesCategory =
      !selectedCategory || norm(product.category) === norm(selectedCategory);

    return matchesPrice && matchesSize && matchesColor && matchesCategory;
  });

  // 2) Пріоритет для поточної категорії (якщо заданий)
  // 2) Пріоритет для поточної категорії (якщо заданий)
const cat = norm(selectedCategory);
const priorityIds = PRIORITY_BY_CATEGORY[cat] || [];

if (priorityIds.length > 0) {
  const set = new Set(priorityIds.map(Number));
  const rank = new Map(priorityIds.map((id, i) => [Number(id), i]));

  const priority = [];
  const rest = [];

  for (const p of filtered) (set.has(getId(p)) ? priority : rest).push(p);

  // хелпер порівняння за ціною
  const cmpPrice = (a, b) => {
    const pa = Number(a?.discountPrice ?? a?.price ?? 0);
    const pb = Number(b?.discountPrice ?? b?.price ?? 0);
    if (sortOrder === "priceAsc") return pa - pb;
    if (sortOrder === "priceDesc") return pb - pa;
    return 0;
  };

  if (sortOrder === "priceAsc" || sortOrder === "priceDesc") {
    // якщо користувач сортує за ціною — сортуємо і пріоритетних, і решту
    priority.sort(cmpPrice);
    rest.sort(cmpPrice);
    return [...priority, ...rest]; // пріоритетні залишаються першими, але вже відсортовані за ціною
  } else {
    // recommended: фіксований порядок у пріоритетів, решта — як було
    priority.sort((a, b) => rank.get(getId(a)) - rank.get(getId(b)));
    return [...priority, ...rest];
  }
}

  // 3) Якщо пріоритети не задані — звичайне сортування
return filtered.sort((a, b) => {
  const pa = Number(a?.discountPrice ?? a?.price ?? 0);
  const pb = Number(b?.discountPrice ?? b?.price ?? 0);
  if (sortOrder === "priceAsc") return pa - pb;
  if (sortOrder === "priceDesc") return pb - pa;
  return 0;
});

};


// Product click handler
// This function sets the selected product and scrolls the page to a specified element.
export const handleProductClick = (product, setSelectedProduct, scrollToRef) => {
  setSelectedProduct(product);
  if (scrollToRef?.current) {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  }
};

// "Contact Us" button handler
// This function redirects the user to the contact page with product details.
export const handleContactButtonClick = (
  router,
  product,
  selectedColor,
  selectedSize,
  quantity,
  language
) => {
  const translatedName =
    product.translations?.[language]?.name || product.title; // Translated name
  const translatedDescription =
    product.translations?.[language]?.description || product.description; // Translated description

  const updatedProduct = {
    ...product,
    translatedName,
    finalPrice: product.discountPrice || product.price, // Використовуємо ціну зі знижкою, якщо є
    sku: product.sku || "Unknown SKU",
    color: selectedColor || product.color, // Use the selected color or default
    size: selectedSize || product.size, // Use the selected size or default
    quantity: quantity || 1, // Use the quantity or default value
    image:
      product.image || product.img?.startsWith('/') || product.img?.startsWith('http')
        ? product.image || product.img
        : '/default-image.png', // Set a default image if the URL is invalid
    translatedDescription,
  };

  router.push(
    `/contact?productName=${encodeURIComponent(translatedName)}&productPrice=${encodeURIComponent(
      updatedProduct.finalPrice // Передаємо знижену ціну
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
