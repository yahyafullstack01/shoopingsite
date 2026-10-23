"use client";

import Layout from "../components/Layout";
import AllProducts from "../components/AllProducts/AllProducts";

/**
 * SSR-enabled catalog shell.
 * Previously used dynamic(..., { ssr: false }) which delayed all HTML until JS —
 * that caused blank-first paint, poor LCP, and high CLS on /All-products.
 */
export default function CatalogPageClient({
  catalogPool,
  catalogTotalPages,
  catalogPageItems,
  prefetchedProduct,
}) {
  return (
    <div className="transition-colors">
      <Layout>
        <AllProducts
          catalogPool={catalogPool}
          catalogTotalPages={catalogTotalPages}
          catalogPageItems={catalogPageItems}
          prefetchedProduct={prefetchedProduct}
        />
      </Layout>
    </div>
  );
}
