import Cart from "../components/Cart/Cart.jsx";
import Layout from "../components/Layout";
import { Suspense } from "react";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function CartPage() {
  return (
    <Layout>
      
  <Suspense fallback={<div>Корзина</div>}>
    <Cart />
    </Suspense>
  </Layout>
 
  );
}