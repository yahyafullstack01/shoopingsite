
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '../../Functions/useLanguage';

const CategoryCatalog = () => {
  const router = useRouter();
  const { language, translateList } = useLanguage();
  const catalogData = {
    heading: translateList("home", "categoryCatalog")?.heading || "Catalogue",
    categories: translateList("home", "categoryCatalog")?.categories || []
  };

  const categories = [
    { name: catalogData.categories[0] || 'Dresses', image: '/HomeCatalog/5.avif', path: 'dresses' },
    { name: catalogData.categories[1] || 'Costumes', image: '/HomeCatalog/6.avif', path: 'costumes' },
    { name: catalogData.categories[2] || 'Shirts', image: '/HomeCatalog/7.avif', path: 'Shirts' },
    { name: catalogData.categories[3] || 'Skirts', image: '/HomeCatalog/8.avif', path: 'skirts' },
    { name: catalogData.categories[4] || 'Tops', image: '/HomeCatalog/9.avif', path: 'tops' },
    { name: catalogData.categories[5] || 'Pants', image: '/HomeCatalog/10.avif', path: 'pants' },
    { name: catalogData.categories[6] || 'Jackets', image: '/HomeCatalog/11.avif', path: 'jackets' },
    { name: catalogData.categories[7] || 'Sweaters', image: '/HomeCatalog/12.avif', path: 'sweaters' },
    { name: catalogData.categories[8] || 'Outerwear', image: '/HomeCatalog/13.avif', path: 'outerwear' },
    { name: catalogData.categories[9] || 'Shorts', image: '/HomeCatalog/14.avif', path: 'shorts' },
  ];

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-5">
      <h2 className="text-3xl md:text-4xl font-normal text-center uppercase text-black dark:text-white mb-10">
        {catalogData.heading}
      </h2>

      {/* Контейнер зі скролом на мобілці/планшеті */}
      <div className="h-[450px] md:h-[900px] lg:h-auto overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-zinc-700">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.path}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md dark:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              <Link href={`/All-products?category=${cat.path}`} aria-label={`${language === 'EN' ? 'Go to category' : 'Перейти до категорії'} ${cat.name}`}>
                <Image
                  src={cat.image}
                  alt={`${cat.name} – ${language === 'EN' ? 'exclusive women\'s clothing' : 'ексклюзивний жіночий одяг'}`}
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
                <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/70 text-sm font-normal px-3 py-1 rounded-md text-black dark:text-white">
                  {cat.name}
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCatalog;
