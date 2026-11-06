import "./globals.css";
import Script from "next/script";
import RootProviders from "./components/RootProviders";
import { siteJsonLd, organizationJsonLd } from "./seo/loyout-jsonld";
import { faqSchema, localBusinessSchema } from "./seo/faq-schema";
import localFont from "next/font/local";

// Local files — avoids flaky Google Fonts fetch during Vercel builds
// (next/font/google: Cannot read properties of null (reading '1'))
const montserrat = localFont({
  src: [
    {
      path: "../../public/fonts/Montserrat-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
});

// Ці title/description/OG тут — ЗА ЗАМОВЧУВАННЯМ для домашньої сторінки.
// Будь-яка інша сторінка, що експортує власний `metadata`, автоматично
// перекриває їх через вбудований механізм Next.js Metadata API —
// на відміну від попереднього варіанту, де <title> був вручну
// прописаний у <head> клієнтського компонента і дублювався з
// метаданими сторінок (браузер/Google завжди бере ПЕРШИЙ <title>,
// тому дочірні сторінки фактично ніколи не показувались).
export const metadata = {
  title: "Жіночий одяг від Latore Atelier | Створено для кожного сезону",
  description:
    "Latore Atelier - український бренд жіночого одягу з власним виробництвом. Костюми, сукні, брюки, верхній одяг. Індивідуальний пошив за вашими параметрами. Шоуруми в Харкові та Івано-Франківську. ☎ +38 (097) 367 82 57",
  keywords:
    "жіночий одяг україна, жіночий одяг київ, жіночий одяг харків, жіночі сукні купити, жіночі костюми, latore atelier, латоре ательє, український бренд одягу, індивідуальний пошиття одягу, власне виробництво одягу, якісний жіночий одяг, базовий гардероб, офісний одяг для жінок, елегантні сукні, вовняні костюми, класичні брюки, жакети жіночі, верхній одяг жіночий, дизайнерський одяг україна, модний жіночий одяг 2026, одяг на замовлення україна",
  authors: [{ name: "Latore Atelier" }],
  alternates: { canonical: "https://www.latore.store/" },
  other: {
    "geo.region": "UA-63",
    "geo.placename": "Kharkiv, Ivano-Frankivsk",
    "geo.position": "49.9935;36.2304",
    "google-site-verification": "yVOmx2g7merY2ILnbUl2yDqMthbJ4UqIBXaddBO0wb8",
  },
  openGraph: {
    title: "Жіночий одяг від Latore Atelier",
    description:
      "Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!",
    url: "https://www.latore.store/",
    type: "website",
    images: [
      {
        url: "https://www.latore.store/logo-social.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/logo/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/logo/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/logo/favicon.ico",
    apple: "/logo/favicon-32x32.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`h-full ${montserrat.className}`}>
      <head>
        {/* Analytics — не блокують рендер */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Script src="https://www.googletagmanager.com/gtag/js?id=G-6ZG9YKXCTQ" strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6ZG9YKXCTQ');
              `}
            </Script>

            {/* Microsoft Clarity — heatmaps + session recordings */}
            <Script id="microsoft-clarity" strategy="afterInteractive">
              {`
                (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "z156bs4xko");
              `}
            </Script>

            {/* FB Pixel — краще lazyOnload на мобільному */}
            <Script id="fb-pixel" strategy="lazyOnload">
              {`
                !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1137131354016660');
                fbq('track', 'PageView');
              `}
            </Script>
            <noscript>
              <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1137131354016660&ev=PageView&noscript=1" />
            </noscript>

            {/* JSON-LD — ледачий */}
            <Script id="organization-jsonld" type="application/ld+json" strategy="lazyOnload"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
            <Script id="website-jsonld" type="application/ld+json" strategy="lazyOnload"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }} />
            <Script id="faq-jsonld" type="application/ld+json" strategy="lazyOnload"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="local-business-kharkiv-jsonld" type="application/ld+json" strategy="lazyOnload"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema[0]) }} />
            <Script id="local-business-ivano-jsonld" type="application/ld+json" strategy="lazyOnload"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema[1]) }} />
          </>
        )}
      </head>

      <body className="h-full transition-colors min-h-screen">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
