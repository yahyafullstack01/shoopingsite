
'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const categories = [
  { name: 'Сукні', image: '/Dress/Bahroma Dress/1.avif', path: 'dresses' },
  { name: 'Костюми', image: '/Costumes/Liana/1.avif', path: 'costumes' },
  { name: 'Сорочки', image: '/Skirts/Short Leather Skirt/1.avif', path: 'Shirts' },
  { name: 'Спідниці', image: '/Shirts/Wrap Cotton Shirt/1.avif', path: 'skirts' },
  { name: 'Топи', image: '/Top/Openshouldergolf/1.avif', path: 'tops' },
  { name: 'Брюки', image: '/Pants/Palazzo Pants/1.avif', path: 'pants' },
  { name: 'Жакети', image: '/Jackets/Leather Jacket/1.avif', path: 'jackets' },
  { name: 'Светри', image: '/Sweaters/Draped Golf/6.avif', path: 'sweaters' },
  { name: 'Верхній одяг', image: '/Outerwear/Leather trench coat/2.avif', path: 'outerwear' },
  { name: 'Шорти', image: '/Shorts/Linen Shorts/1.avif', path: 'shorts' },
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
