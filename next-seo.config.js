const seoConfig = { 
  contact: {
    title: "Контакти | Магазин жіночого одягу",
    description: "Контактна сторінка для запитів та зв'язку.",
    openGraph: {
      url: "https://latore.shop/contact",
      title: "Контакти | Магазин жіночого одягу",
      description: "Отримайте контактну інформацію для вашого запиту.",
      type: "website",
      images: [
        { 
          url: "https://latore.shop/logo-social.jpg", // Додаємо повний шлях до зображення
          width: 1200, // Рекомендовані розміри
          height: 628,
          alt: "Contact Page Image" // Альтернативний текст
        }
      ]
    },
    canonical: "https://latore.shop/contact",
    robots: "index, follow"
  },

  offers: {
    title: "Спеціальні пропозиції | Магазин жіночого одягу",
    description: "Спеціальні пропозиції та акції для покупців.",
    openGraph: {
      url: "https://latore.shop/special-offers",
      title: "Спеціальні пропозиції | Магазин жіночого одягу",
      description: "Дізнайтеся про наші акції та спеціальні знижки.",
      images: [
        { 
          url: "https://latore.shop/special-offers-preview.jpg",
          width: 1200,
          height: 628,
          alt: "Offers Page Image"
        }
      ]
    },
    canonical: "https://latore.shop/special-offers",
    robots: "index, follow"
  },

  topProducts: {
    title: "Топ продукти | Магазин жіночого одягу",
    description: "Дивіться наші найкращі товари та популярні колекції.",
    openGraph: {
      url: "https://latore.shop/top-products",
      title: "Топ продукти | Магазин жіночого одягу",
      description: "Наші найкращі товари для стильних образів.",
      images: [
        { 
          url: "https://latore.shop/top-products-preview.jpg",
          width: 1200,
          height: 628,
          alt: "Top Products Page Image"
        }
      ]
    },
    canonical: "https://latore.shop/top-products",
    robots: "index, follow"
  },

  conditions: {
    title: "Умови користування | Магазин жіночого одягу",
    description: "Перегляньте наші умови користування та політику конфіденційності.",
    openGraph: {
      url: "https://latore.shop/conditions",
      title: "Умови користування | Магазин жіночого одягу",
      description: "Важлива інформація щодо умов користування сервісом.",
      images: [
        { 
          url: "https://latore.shop/conditions-preview.jpg",
          width: 1200,
          height: 628,
          alt: "Conditions Page Image"
        }
      ]
    },
    canonical: "https://latore.shop/conditions",
    robots: "index, follow"
  },

  allProducts: {
    title: "Всі товари | Магазин жіночого одягу",
    description: "Перегляньте всі доступні товари нашого магазину.",
    openGraph: {
      url: "https://latore.shop/all-products",
      title: "Всі товари | Магазин жіночого одягу",
      description: "Дізнайтеся більше про наші колекції жіночого одягу.",
      images: [
        { 
          url: "https://latore.shop/all-products-preview.jpg",
          width: 1200,
          height: 628,
          alt: "All Products Page Image"
        }
      ]
    },
    canonical: "https://latore.shop/all-products",
    robots: "index, follow"
  },
   newProducts: {
    title: 'Новинки | Shoopingsite',
    description: 'Останні новинки нашого магазину',
    openGraph: {
      title: 'Новинки | Shoopingsite',
      description: 'Дивись найновіші товари першими',
      url: 'https://www.latore.shop/new-products',
      type: 'website',
      images: [
        {
          url: 'https://www.latore.shop/logo-social.jpg',
        },
      ],
    },
    canonical: 'https://www.latore.shop/new-products',
    robots: 'index, follow',
  }

};

export default seoConfig;
