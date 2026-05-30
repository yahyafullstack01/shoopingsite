"use client";

import { Suspense } from "react";
import Layout from "../components/Layout";
import NewArrivalsInfo from "../components/NewArrivalsInfo/NewArrivalsInfo";

export default function NewProductsPageClient({
  newProducts,
  prefetchedProduct = null,
}) {
  return (
    <div className="transition-colors">
      <Layout>
        <Suspense
          fallback={
            <div className="py-14 text-center text-gray-600 dark:text-gray-300">
              Loading...
            </div>
          }
        >
          <NewArrivalsInfo
            products={newProducts}
            prefetchedProduct={prefetchedProduct}
          />
        </Suspense>
      </Layout>
    </div>
  );
}
