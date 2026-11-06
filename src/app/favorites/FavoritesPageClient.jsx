'use client';

import dynamicImport from 'next/dynamic'; // перейменовуємо dynamic → dynamicImport
import Layout from '../components/Layout'; // перевір правильний шлях

const Favorites = dynamicImport(() => import('../components/Favorites/Favorites'), {
  ssr: false,
  loading: () => <div>Завантаження улюблених товарів...</div>,
});

export default function FavoritesPageClient() {
  return (
    <Layout>
      <Favorites />
    </Layout>
  );
}
