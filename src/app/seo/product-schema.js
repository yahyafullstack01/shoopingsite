/**
 * Generate Product Schema (JSON-LD) for individual product pages
 * Helps Google understand product details for rich snippets
 */
export function generateProductSchema(product, language = 'UA') {
  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedDescription = Array.isArray(product.translations?.[language]?.description) 
    ? product.translations[language].description.join(' ') 
    : product.translations?.[language]?.description || product.description || '';
  
  const translatedCategory = product.translations?.[language]?.category || product.category;
  
  // Get first image
  const getFirstImage = () => {
    if (product.image) {
      if (typeof product.image === 'string') {
        return `https://www.latore.store${product.image}`;
      }
      if (product.image.type === 'video' && product.image.poster) {
        return `https://www.latore.store${product.image.poster}`;
      }
    }
    if (product.images && product.images.length > 0) {
      const firstImg = product.images[0];
      if (typeof firstImg === 'string') {
        return `https://www.latore.store${firstImg}`;
      }
      if (firstImg.poster) {
        return `https://www.latore.store${firstImg.poster}`;
      }
    }
    return 'https://www.latore.store/logo-social.jpg';
  };

  // Get all product images
  const getAllImages = () => {
    const images = [];
    
    if (product.image && typeof product.image === 'string') {
      images.push(`https://www.latore.store${product.image}`);
    }
    
    if (product.images && Array.isArray(product.images)) {
      product.images.forEach(img => {
        if (typeof img === 'string') {
          images.push(`https://www.latore.store${img}`);
        } else if (img.poster) {
          images.push(`https://www.latore.store${img.poster}`);
        }
      });
    }
    
    return images.length > 0 ? images : ['https://www.latore.store/logo-social.jpg'];
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": translatedName,
    "description": translatedDescription,
    "image": getAllImages(),
    "sku": product.sku || `LATORE-${product.id}`,
    "category": translatedCategory,
    "brand": {
      "@type": "Brand",
      "name": "Latore Atelier"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://www.latore.store/All-products?category=${product.category.toLowerCase()}&product=${product.id}`,
      "priceCurrency": "UAH",
      "price": product.discountPrice || product.price,
      "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Latore Atelier"
      }
    }
  };

  // Add aggregate rating if available (you can add this later when you have reviews)
  // schema.aggregateRating = {
  //   "@type": "AggregateRating",
  //   "ratingValue": "4.8",
  //   "reviewCount": "125"
  // };

  return schema;
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generate ItemList schema for product listings (category pages)
 */
export function generateProductListSchema(products, categoryName, categoryUrl) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": categoryName,
    "url": categoryUrl,
    "numberOfItems": products.length,
    "itemListElement": products.slice(0, 20).map((product, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://www.latore.store/All-products?category=${product.category.toLowerCase()}&product=${product.id}`
    }))
  };
}
