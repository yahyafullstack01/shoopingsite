'use client';

import dynamicImport from 'next/dynamic'; // перейменовуємо dynamic → dynamicImport
import Layout from '../components/Layout'; // перевір правильний шлях

const Favorites = dynamicImport(() => import('../components/Favorites/Favorites'), {
  ssr: false,
  loading: () => <div>Завантаження улюблених товарів...</div>,
});

export const dynamic = "force-dynamic"; // ОК, не конфліктує

export default function FavoritesPage() {
  return (
    <Layout>
      <Favorites />
    </Layout>
  );
}
