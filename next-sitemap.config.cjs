module.exports = {
  siteUrl: 'https://www.latore.store/', // Ваш основний домен
  generateRobotsTxt: true, // Генерація robots.txt
  sitemapSize: 5000, // Максимальна кількість URL

  // Приватні/службові сторінки без унікальної цінності для пошуку —
  // не повинні потрапляти в sitemap і не повинні індексуватись.
  exclude: [
    '/Cart',
    '/Checkout',
    '/success',
    '/payment-success',
    '/favorites',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/Cart', '/Checkout', '/success', '/payment-success', '/favorites'],
      },
    ],
  },

  // next-sitemap тільки сканує статично згенеровані сторінки з .next.
  // /All-products, /contact і /new-products рендеряться динамічно
  // (force-dynamic або searchParams), тому next-sitemap їх не бачить —
  // додаємо вручну, щоб вони не зникали з sitemap.
  additionalPaths: async () => [
    { loc: '/All-products', changefreq: 'daily', priority: 0.9 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
    { loc: '/new-products', changefreq: 'daily', priority: 0.8 },
  ],
};
