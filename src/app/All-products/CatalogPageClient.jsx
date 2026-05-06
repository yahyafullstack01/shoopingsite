"use client";

import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const AllProducts = dynamic(() => import("../components/AllProducts/AllProducts"), {
  ssr: false,
});

export default function CatalogPageClient({ catalogPool, prefetchedProduct }) {
  return (
    <div className="transition-colors">
      <Layout>
        <AllProducts catalogPool={catalogPool} prefetchedProduct={prefetchedProduct} />
      </Layout>
    </div>
  );
}
