"use client";

import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "../app/components/ErrorBoundary/ErrorBoundary";
import { siteJsonLd, organizationJsonLd } from "./seo/loyout-jsonld";
import { Montserrat } from "next/font/google";

// тільки потрібні ваги + кирилиця
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600"],    // Medium, SemiBold
  display: "swap",
  preload: true,
});

export default function RootLayout({ children }) {
  return (
    <html lang="uk" className={`h-full ${montserrat.className}`}>
      <head>
        <title>Жіночий одяг від Latore Atelier | Створено для кожного сезону</title>

        <meta name="description" content="Latore Atelier пропонує стильний та жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!" />
        <meta name="keywords" content="Жіночий одяг, Latore Atelier, сукні жіночі, сучасна мода, стильний одяг, сезонні колекції" />
        <meta name="author" content="Latore Atelier" />

        {/* OG */}
        <meta property="og:title" content="Жіночий одяг від Latore Atelier" />
        <meta property="og:description" content="Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!" />
        <meta property="og:image" content="https://www.latore.store/logo-social.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.latore.store/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon */}
        <link rel="icon" href="/logo/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
        <link rel="shortcut icon" href="/logo/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon-32x32.png" />

        <link rel="canonical" href="https://www.latore.store/" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* видаляємо ручний preload шрифтів — next/font зробить це сам */}
        {/* <link rel="preload" href="/fonts/Montserrat-*.woff2" ... /> */}

        {/* Google verification */}
        <meta name="google-site-verification" content="yVOmx2g7merY2ILnbUl2yDqMthbJ4UqIBXaddBO0wb8" />

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
          </>
        )}
      </head>

      <body className="h-full transition-colors min-h-screen">
        <ThemeProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
