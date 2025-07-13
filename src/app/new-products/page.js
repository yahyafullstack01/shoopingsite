'use client';

import dynamic from 'next/dynamic';
import Script from 'next/script';
import Head from 'next/head';
import products from '../data/products';
import seoConfig from '../../../next-seo.config';
import generateProductsJsonLd from '../seo/all-products-jsonld';

const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
const NewArrivalsInfo = dynamic(() => import('../components/NewArrivalsInfo/NewArrivalsInfo'), { ssr: false });

export default function NewProductsPage() {
  const newProducts = products.filter((p) => p.isNew === true);
  const jsonLd = generateProductsJsonLd(newProducts);
  const seo = seoConfig.newProducts;

  return (
    <div className="transition-colors">
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <link rel="canonical" href={seo.canonical} />
        <meta name="robots" content={seo.robots} />
      </Head>

      <Script
        id="new-products-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Layout>
         <NewArrivalsInfo products={newProducts} />
       
      </Layout>
    </div>
  );
}
