
import ContactUs from "../components/Contact_US/Contact_us";
import Script from "next/script";
import seoConfig from "../../../next-seo.config";
import contactJsonLd from "../seo/contact-jsonld";
import Layout from "../components/Layout";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

const seo = seoConfig.contact;

export const metadata = {
  title: seo.title,
  description: seo.description,
  alternates: { canonical: seo.canonical },
  robots: seo.robots,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    type: seo.openGraph.type || "website",
    url: seo.openGraph.url,
    images: seo.openGraph.images,
  },
};

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}