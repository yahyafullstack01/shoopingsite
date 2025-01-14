"use client"; // Клієнтський компонент, щоб працювати з хуком `useSearchParams`
import Layout from "../components/Layout";
import ContactUs from "../components/Contact_US/Contact_us";
import { Suspense } from "react";

export default function ContactPage() {
  return (
    <div className="transition-colors">
      <Layout>
        <Suspense fallback={<div>Loading contact form...</div>}>
          <ContactUs />
        </Suspense>
      </Layout>
    </div>
  );
}
