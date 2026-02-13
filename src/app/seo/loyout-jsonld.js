export const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Latore Atelier",
    url: "https://www.latore.store",
    description:
        "Latore Atelier пропонує стильний та ексклюзивний жіночий одяг для кожного сезону.",
    image: "https://www.latore.store/logo-social.jpg",
    potentialAction: {
        "@type": "SearchAction",
        target: "https://www.latore.store/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
    },
};

export const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Latore Atelier",
    url: "https://www.latore.store/",
    logo: "https://www.latore.store/favicon.ico?v1",
    description: "Український бренд жіночого одягу з власним виробництвом. Понад 10 років досвіду. Індивідуальний пошив.",
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+380973678257",
        contactType: "customer service",
        email: "latoroatelier01@gmail.com",
        availableLanguage: ["Ukrainian", "English"]
    },
    address: [
        {
            "@type": "PostalAddress",
            streetAddress: "вул. Полтавський шлях, 144А, ТЦ Обруч",
            addressLocality: "Харків",
            addressCountry: "UA"
        },
        {
            "@type": "PostalAddress",
            streetAddress: "вул. Семена Височана, 18, ТЦ Київський",
            addressLocality: "Івано-Франківськ",
            addressCountry: "UA"
        }
    ],
    sameAs: [
        "https://www.facebook.com/share/18h6VtZV6k/?mibextid=wwXIfr",
        "https://www.instagram.com/latore.atelier?igsh=Y3RvbWZhZW12Zmxj",
    ],
};
