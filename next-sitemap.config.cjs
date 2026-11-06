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
  // /product/[slug] сторінки статичні (generateStaticParams) і зазвичай
  // виявляються автоматично, але додаємо їх теж явно — надійніше, ніж
  // покладатись на автосканування для 200+ сторінок.
  additionalPaths: async () => {
    const path = require('path');
    const fs = require('fs');

    function slugify(text) {
      return String(text || '')
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-+|-+$)/g, '');
    }

    const productsPath = path.join(process.cwd(), 'src/app/data/products.json');
    const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

    const productPaths = products.map((p) => {
      const name = p?.translations?.EN?.name || p?.name || 'product';
      const slugName = slugify(name);
      const slug = slugName ? `${p.id}-${slugName}` : String(p.id);
      return { loc: `/product/${slug}`, changefreq: 'weekly', priority: 0.8 };
    });

    return [
      { loc: '/All-products', changefreq: 'daily', priority: 0.9 },
      { loc: '/contact', changefreq: 'monthly', priority: 0.6 },
      { loc: '/new-products', changefreq: 'daily', priority: 0.8 },
      ...productPaths,
    ];
  },
};
