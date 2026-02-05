
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const categories = [
  { name: 'Сукні', image: '/HomeCatalog/5.avif', path: 'dresses' },
  { name: 'Костюми', image: '/HomeCatalog/6.avif', path: 'costumes' },
  { name: 'Сорочки', image: '/HomeCatalog/7.avif', path: 'Shirts' },
  { name: 'Спідниці', image: '/HomeCatalog/8.avif', path: 'skirts' },
  { name: 'Топи', image: '/HomeCatalog/9.avif', path: 'tops' },
  { name: 'Брюки', image: '/HomeCatalog/10.avif', path: 'pants' },
  { name: 'Жакети', image: '/HomeCatalog/11.avif', path: 'jackets' },
  { name: 'Светри', image: '/HomeCatalog/12.avif', path: 'sweaters' },
  { name: 'Верхній одяг', image: '/HomeCatalog/13.avif', path: 'outerwear' },
  { name: 'Шорти', image: '/HomeCatalog/14.avif', path: 'shorts' },
];

const CategoryCatalog = () => {
  const router = useRouter();

  return (
    <section className="bg-white dark:bg-zinc-900 py-16 px-5">
      <h2 className="text-3xl md:text-4xl font-normal text-center uppercase text-black dark:text-white mb-10">
        Каталог
      </h2>

      {/* Контейнер зі скролом на мобілці/планшеті */}
      <div className="h-[450px] md:h-[900px] lg:h-auto overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-zinc-700">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat) => (
            <article
              key={cat.path}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden shadow-md dark:shadow-lg transition-transform duration-300 hover:scale-[1.03]"
            >
              <Link href={`/All-products?category=${cat.path}`} aria-label={`Перейти до категорії ${cat.name}`}>
                <Image
                  src={cat.image}
                  alt={`${cat.name} – ексклюзивний жіночий одяг`}
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
