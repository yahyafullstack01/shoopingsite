"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactPageContent() {
  const searchParams = useSearchParams();
  const user = searchParams.get("user") || "Guest";

  return <div>Welcome, {user}!</div>;
}

export const dynamic = "force-dynamic"; // Забезпечує динамічне рендеринг без SSR

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ContactPageContent />
    </Suspense>
  );
}
