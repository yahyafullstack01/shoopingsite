import seoConfig from "../../../next-seo.config";
import OffersPageClient from "./OffersPageClient";

const seo = seoConfig.offers;

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: seo.robots,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    images: seo.openGraph.images,
  },
};

export default function Offerspage() {
  return <OffersPageClient />;
}
