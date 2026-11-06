import { Suspense } from 'react';
import PaymentSuccessPage from '../components/PaymentSuccessPage/PaymentSuccessPage.jsx';

export const metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-4">Завантаження...</div>}>
      <PaymentSuccessPage />
    </Suspense>
  );
}
