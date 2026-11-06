import seoConfig from "../../../next-seo.config";
import ConditionsPageClient from "./ConditionsPageClient";

const seo = seoConfig.conditions;

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

export default function ConditionPage() {
  return <ConditionsPageClient />;
}
