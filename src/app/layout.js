"use client";

import { ThemeProvider } from "./contexts/ThemeContext";
import "./globals.css";
import Script from "next/script";
import { siteJsonLd, organizationJsonLd } from "./seo/loyout-jsonld"; // Імпорт SEO-даних
import ErrorBoundary from "../app/components/ErrorBoundary/ErrorBoundary";
export default function RootLayout({ children }) {
    return (
        <html lang="uk" className="h-full">
            <head>
              <title>Жіночий одяг від Latore Atelier | Створено для кожного сезону</title>

<meta name="description" content="Latore Atelier пропонує стильний та жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!" />
<meta name="keywords" content="Жіночий одяг, Latore Atelier, сукні жіночі, сучасна мода, стильний одяг, сезонні колекції" />
<meta name="author" content="Latore Atelier" />

{/* Open Graph для соцмереж*/}
<meta property="og:title" content="Жіночий жіночий одяг від Latore Atelier" />
<meta property="og:description" content="Latore Atelier пропонує стильний та ексклюзивний жіночий одяг, розроблений для того, щоб ви почувалися унікально у будь-якому сезоні. Відкрийте наші колекції сьогодні!" />
<meta property="og:image" content="https://www.latore.shop/logo-social.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:url" content="https://www.latore.shop/" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />

{/*Favicon*/}
<link rel="icon" href="/logo/favicon-32x32.png" type="image/png" sizes="32x32" />
<link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
<link rel="shortcut icon" href="/logo/favicon.ico" type="image/x-icon" />
<link rel="apple-touch-icon" sizes="180x180" href="/logo/favicon-32x32.png" />

{/*} SEO */}
<link rel="canonical" href="https://www.latore.store/" />

{/*Fonts preload*/}
<link rel="preload" href="/fonts/Montserrat-Thin.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
<link rel="preload" href="/fonts/Montserrat-ThinItalic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* <meta name="google-site-verification" content="cYBcnqSIlXlPJZSokMAgKhJCS8MM2XfwV6-nd4o-Jag" /> */}
               {/* <meta name="google-site-verification" content="Lx8iDUB67zjk42dkkJQsEpoqSlKiSlc1peMe9-jmIqY" />*/}
               <meta name="google-site-verification" content="g_0gD_liwrkkTj-WviMVpLi56EWXTq9nEfPl-uJU72s" />
       {/* Google Analytics */}
       {
  process.env.NODE_ENV === "production" && (
    <>
    <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-6ZG9YKXCTQ"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-6ZG9YKXCTQ');
  `}
</Script>

       {/* 🔥 Google Ads Conversion Tag */}
       <Script id="google-ads" strategy="afterInteractive">
        {`
          gtag('config', 'AW-17054383975');
        `}
      </Script>
       {/* 🔵 Facebook Meta Pixel */}
    <Script id="facebook-pixel" strategy="afterInteractive">
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
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
    {/* NoScript fallback */}
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=1137131354016660&ev=PageView&noscript=1"
      />
    </noscript>
  
    </>
  )
} 
                {/* JSON-LD через next/script */}
                <Script
                    id="organization-jsonld"
                    type="application/ld+json"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(organizationJsonLd),
                    }}
                />
                <Script
                    id="website-jsonld"
                    type="application/ld+json"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(siteJsonLd),
                    }}
                />
            </head>
            <body className="h-full transition-colors min-h-screen">
              <ThemeProvider>
                <ErrorBoundary>
                  {children}
                </ErrorBoundary>
              </ThemeProvider>
            </body>
        </html>
    );
}