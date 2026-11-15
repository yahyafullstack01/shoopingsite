"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Layout = dynamic(() => import("../components/Layout"), { ssr: false });
const BlackFridayInfo = dynamic(
  () => import("../components/BlackFridayInfo/BlackFridayInfo"),
  { ssr: false, loading: () => <div className="p-10 text-center">Loading…</div> }
);

export default function BlackFridayPageClient() {
  return (
    <div className="transition-colors">
      <Layout>
        <Suspense fallback={<div className="p-10 text-center">Loading…</div>}>
          <BlackFridayInfo />
        </Suspense>
      </Layout>
    </div>
  );
}
