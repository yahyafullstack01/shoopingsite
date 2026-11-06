import FavoritesPageClient from './FavoritesPageClient';

export const dynamic = "force-dynamic"; // ОК, не конфліктує

export const metadata = {
  robots: { index: false, follow: false },
};

export default function FavoritesPage() {
  return <FavoritesPageClient />;
}
