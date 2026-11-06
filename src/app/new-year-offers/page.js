import seoConfig from "../../../next-seo.config";
import NewYearOffersPageClient from "./NewYearOffersPageClient";

// якщо в seoConfig є окремий блок — використовуємо його,
// якщо ні — тимчасово беремо newProducts
const seo = seoConfig.newYearOffers || seoConfig.newProducts;

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: seo.robots,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    type: seo.openGraph.type || "website",
    images: seo.openGraph.images,
  },
};

export default function NewYearOffersPage() {
  return <NewYearOffersPageClient />;
}
