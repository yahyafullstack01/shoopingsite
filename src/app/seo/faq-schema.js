/**
 * FAQ Schema for SEO
 * Add this to pages with frequently asked questions
 */
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Як замовити індивідуальний пошив одягу?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Для індивідуального пошиву оберіть товар на сайті та зв'яжіться з нами через кнопку 'Зв'язатися з нами' або за телефоном +38 (097) 367 82 57. Ми знімемо ваші параметри та відшиємо одяг ідеально за вашою фігурою. Власне виробництво дозволяє нам гарантувати високу якість та точну посадку."
      }
    },
    {
      "@type": "Question",
      "name": "Які розміри ви шиєте?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ми шиємо розміри від XS до XL. Завдяки індивідуальному пошиву, ми можемо створити одяг за будь-якими параметрами - кожна річ ідеально сидить по фігурі."
      }
    },
    {
      "@type": "Question",
      "name": "Де розташовані ваші шоуруми?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "У нас два шоуруми: 1) Харків, вул. Полтавський шлях, 144А, ТЦ Обруч; 2) Івано-Франківськ, вул. Семена Височана, 18, ТЦ Київський. Ви можете відвідати будь-який шоурум для примірки та консультації."
      }
    },
    {
      "@type": "Question",
      "name": "Яка доставка по Україні?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ми здійснюємо доставку по всій Україні через Нову Пошту та інші служби доставки. Час доставки - 1-3 дні по Україні. Вартість доставки залежить від регіону."
      }
    },
    {
      "@type": "Question",
      "name": "З яких тканин ви шиєте одяг?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ми використовуємо якісні натуральні тканини: вовну (75% вміст), шовк, льон, бавовну, віскозу, а також преміум-синтетичні матеріали. Кожна тканина обирається з урахуванням сезону та призначення одягу."
      }
    },
    {
      "@type": "Question",
      "name": "Скільки триває виготовлення одягу на замовлення?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Стандартні моделі з наявності відправляємо протягом 1-2 днів. Індивідуальний пошив займає 7-14 днів залежно від складності моделі. Ми завжди повідомляємо точні терміни при оформленні замовлення."
      }
    },
    {
      "@type": "Question",
      "name": "Чи можна повернути або обміняти товар?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Так, ви можете повернути або обміняти товар протягом 14 днів з моменту отримання, якщо він не підійшов. Товар має бути в ідеальному стані з бірками. Індивідуально пошиті речі поверненню не підлягають."
      }
    },
    {
      "@type": "Question",
      "name": "Як доглядати за вовняним одягом?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Вовняний одяг рекомендуємо прати вручну або в машинці на режимі 'вовна' при температурі до 30°C. Використовуйте спеціальні засоби для вовни. Сушити у горизонтальному положенні. Детальні рекомендації з догляду вказані на бірці кожного виробу."
      }
    }
  ]
};

/**
 * Local Business Schema with multiple locations
 */
export const localBusinessSchema = [
  {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Latore Atelier - Харків",
    "image": "https://www.latore.store/logo-social.jpg",
    "description": "Український бренд жіночого одягу з власним виробництвом. Шоурум у Харкові.",
    "@id": "https://www.latore.store/#kharkiv",
    "url": "https://www.latore.store",
    "telephone": "+380973678257",
    "email": "latoroatelier01@gmail.com",
    "priceRange": "₴₴",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Полтавський шлях, 144А, ТЦ Обруч",
      "addressLocality": "Харків",
      "addressRegion": "Харківська область",
      "postalCode": "61000",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.9935,
      "longitude": 36.2304
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/18h6VtZV6k/?mibextid=wwXIfr",
      "https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": "Latore Atelier - Івано-Франківськ",
    "image": "https://www.latore.store/logo-social.jpg",
    "description": "Український бренд жіночого одягу з власним виробництвом. Шоурум в Івано-Франківську.",
    "@id": "https://www.latore.store/#ivano-frankivsk",
    "url": "https://www.latore.store",
    "telephone": "+380973678257",
    "email": "latoroatelier01@gmail.com",
    "priceRange": "₴₴",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Семена Височана, 18, ТЦ Київський",
      "addressLocality": "Івано-Франківськ",
      "addressRegion": "Івано-Франківська область",
      "postalCode": "76000",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.9226,
      "longitude": 24.7111
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/18h6VtZV6k/?mibextid=wwXIfr",
      "https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj"
    ]
  }
];
