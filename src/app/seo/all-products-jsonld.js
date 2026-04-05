import { getProductImageSrc } from "../utils/productData";

const generateProductsJsonLd = (products) => {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product, index) => {
      const imgSrc = getProductImageSrc(product.image);
      return {
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.latore.store/All-products?category=${String(product.category || "").toLowerCase()}&product=${product.id}`,
      name: product.translations?.EN?.name || "Unnamed Product", // Назва продукту
      image: {
        "@type": "ImageObject",
        url: imgSrc.startsWith("http") ? imgSrc : `https://www.latore.store${imgSrc}`,
        width: 1200, // Рекомендована ширина
        height: 628, // Рекомендована висота
        caption: product.translations?.EN?.name || "Unnamed Product", // Альтернативний текст
      },
      description: product.translations?.EN?.description || "No description available", // Опис продукту
    
    };
    }),
  };
};

export default generateProductsJsonLd;