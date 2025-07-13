'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import products from '../../data/products'; 

const NewArrivals = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setVisibleCount(width < 768 ? 4 : width < 1024 ? 6 : 10);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const newProducts = products.filter((p) => p.isNew === true);

  const handleClick = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-black dark:text-white">
          Наші <span className="italic">новинки</span>
        </h2>
        <button
  onClick={() => router.push('/new-products')}
  className="text-sm sm:text-base font-medium text-black dark:text-white hover:underline"
>
  Дивитися всі →
</button>

      </div>

      <div
        className={`grid gap-5 ${
          isMobile
            ? 'grid-cols-2 max-h-[430px] overflow-y-auto pr-1'
            : 'grid-cols-3 md:grid-cols-4 lg:grid-cols-5'
        }`}
      >
        {newProducts.slice(0, visibleCount).map((product, index) => (
            <div
  key={product.id}
  className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md dark:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
  onClick={() => handleClick(product.id)}
  itemScope
  itemProp="itemListElement"
  itemType="https://schema.org/Product"
>
  <Image
    src={product.image}
    alt={product.translations?.ua?.name || 'Новинка'}
    fill
    className="object-cover"
    itemProp="image"
    priority={index === 0}
  />
  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
    НОВИНКА
  </div>
</div>

        ))}
      </div>
    </section>
  );
};

export default NewArrivals;