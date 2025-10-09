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
  const handleClick = () => router.push('/new-products');
  const renderedCount = Math.min(visibleCount, newProducts.length);

  return (
    <section
      className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300 font-sans"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* дані ItemList */}
      <meta itemProp="name" content="Наші новинки" />
      <meta itemProp="numberOfItems" content={String(renderedCount)} />
      <meta itemProp="itemListOrder" content="https://schema.org/ItemListOrderAscending" />

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-black dark:text-white">
          Наші новинки
        </h2>
        <button
          onClick={handleClick}
          className="text-sm sm:text-base font-medium text-black dark:text-white hover:underline"
        >
          Дивитися всі →
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {newProducts.slice(0, renderedCount).map((product, index) => {
          const name = product.translations?.ua?.name || product.name || 'Новинка';
          const url = `/product/${product.id}`; // за потреби підстав свій реальний шлях

          return (
            <div
              key={product.id}
              className="relative w-full aspect-[2/3] min-h-0 rounded-xl overflow-hidden shadow-md dark:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
              onClick={handleClick}
              itemScope
              itemProp="itemListElement"
              itemType="https://schema.org/ListItem"
            >
              {/* позиція елемента у списку */}
              <meta itemProp="position" content={String(index + 1)} />

              {/* сам об’єкт списку — Product (мінімальний набір полів) */}
              <div itemProp="item" itemScope itemType="https://schema.org/Product" className="relative w-full h-full">
                <meta itemProp="name" content={name} />
                <link itemProp="url" href={url} />

                <div className="relative w-full h-full">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-cover"
                    itemProp="image"
                    priority={index === 0}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default NewArrivals;
{/*'use client';

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

  const handleClick = () => {
    router.push('/new-products');
  };

  return (
    <section className="bg-white dark:bg-zinc-900 py-14 px-5 transition-colors duration-300 font-sans">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal  text-black dark:text-white">
          Наші новинки
        </h2>
        <button
          onClick={handleClick}
          className="text-sm sm:text-base font-medium text-black dark:text-white hover:underline"
        >
          Дивитися всі →
        </button>
      </div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
   
        {newProducts.slice(0, visibleCount).map((product, index) => (
          <div
            key={product.id}
            className="relative w-full aspect-[2/3] min-h-0 rounded-xl overflow-hidden shadow-md dark:shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
            onClick={handleClick}
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/Product"
          >
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                alt={product.translations?.ua?.name || 'Новинка'}
                fill
                className="object-cover"
                itemProp="image"
                priority={index === 0}
              />
            </div>
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
*/}