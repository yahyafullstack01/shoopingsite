"use client";

import Image from "next/image";
import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../Functions/useLanguage";

const AUTOPLAY_IMAGE_MS = 5000;        // тривалість кадру
const AUTOPLAY_START_DELAY_MS = 6000;  // пауза перед стартом автоплею (фіксує LCP)

function useIsMobile(breakpoint = 1024) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width:${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, [breakpoint]);
  return isMobile;
}

function getImageClass(s, isMobile) {
  const fit   = isMobile && s.fitMobile   ? s.fitMobile   : s.fit   || "cover";
  const focus = isMobile && s.focusMobile ? s.focusMobile : s.focus || "center";
  const fitClass = fit === "contain" ? "object-contain bg-white" : "object-cover";
  const focusClass =
    focus === "left"   ? "object-left"   :
    focus === "right"  ? "object-right"  :
    focus === "top"    ? "object-top"    :
    focus === "bottom" ? "object-bottom" :
    "object-center";
  return `${fitClass} ${focusClass}`;
}

export default function Hero() {
  const { translateList } = useLanguage();
  const t = translateList("home", "hero");
  const isMobile = useIsMobile();

  // ---- СЛАЙДИ ----
  const slides = useMemo(
    () => [
      // {
      //   type: "image",
      //   src: "/hoom/newyear1.png",                 
      //   mobileSrc: "/hoom/newyearmobile1.png",    
      //   alt: "Latore banner 1",
      //   // title: t[0],
      //   // subtitle: t[3],
      //   ctaText: t[4],
      //   // ctaHref: "/All-products",
      //   ctaHref: "/new-year-offers",
      //   fit: "cover",
      //   focus: "left",
      //   fitMobile: "cover",
      //   focusMobile: "top",
      // },

{
  type: "image",
  src: "/hoom/1(5).png",
  mobileSrc: "/hoom/1(4).png",
  alt: "Latore banner 1",

  ctaText: t[4],
  ctaHref: "/All-products",

  fit: "cover",
  focus: "center",
  fitMobile: "cover",
  focusMobile: "center",
},



      // {
      //   type: "video", 
      //   src: "/hoom/IMG_3190.mp4",
      //   // poster: "/hoom/banerosen.jpg",       // webp/jpg 100–200KB
      //   poster: "/hoom/newyear1.png",
      //   title: "LATORE ATELIER",
      //   subtitle: "2025",
      //   ctaText: t[5],
      //   // ctaHref: "/All-products",
      //   ctaHref: "/new-year-offers",
      // },



      {
  type: "video",
  src: "/hoom/1.mp4",
  mobileSrc: "/hoom/2.mp4",
  poster: "/hoom/1.webp",
  alt: "Latore banner 2",

  ctaText: t[4],
  ctaHref: "/All-products",

  fit: "cover",
  focus: "center",

  fitMobile: "cover",
  focusMobile: "center",
},

      //   {
      //   type: "image",
      //   src: "/hoom/newyear2.png",                 
      //   mobileSrc: "/hoom/newyearmobile2.png",    
      //   alt: "Latore banner 2",
      //   // title: t[0],
      //   // subtitle: t[3],
      //   ctaText: t[4],
      //   // ctaHref: "/All-products",
      //   ctaHref: "/new-year-offers",
      //   fit: "cover",
      //   focus: "left",
      //   fitMobile: "cover",
      //   focusMobile: "top",
      // },

      // {
      //   type: "image",
      //   src: "/hoom/newyear3.png",
      //   mobileSrc: "/hoom/newyearmobile3.png",
      //   alt: "Latore banner 2",
      //   // title: t[0],
      //   // subtitle: t[3],
      //   ctaText: t[4],
      //   // ctaHref: "/special-offers",
      //   ctaHref: "/new-year-offers",
      //   fit: "cover",
      //   focus: "center",
      // },

      {
  type: "image",
  src: "/hoom/3(1).png",
  mobileSrc: "/hoom/3(2).png",
  alt: "Latore banner 3",

  ctaText: t[4],
  ctaHref: "/All-products",

  fit: "cover",
  focus: "center",
  fitMobile: "cover",
  focusMobile: "center",
},

      
    ],
    [t]
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [autoplayReady, setAutoplayReady] = useState(false);

  const timerRef = useRef(null);
  const videoRefs = useRef([]);
  const touchStartX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Увімкнути клієнтську логіку + дати паузу, щоб LCP зафіксувався
  useEffect(() => {
    setHydrated(true);
    const t = setTimeout(() => setAutoplayReady(true), AUTOPLAY_START_DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  // Автоплей / керування відео
  useEffect(() => {
    if (!hydrated) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    const current = slides[index];
    if (!current) return;

    // відео: грає тільки активний слайд
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index && slides[i].type === "video") {
        v.currentTime = 0;
        setTimeout(() => v.play().catch(() => {}), 0);
      } else {
        v.pause();
      }
    });

    // фото: не крутимо перші 6с
    if (current.type === "image" && autoplayReady && !paused) {
      const ms = current.durationMs ?? AUTOPLAY_IMAGE_MS;
      timerRef.current = setTimeout(next, ms);
    }
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [index, paused, slides, hydrated, autoplayReady]);

  const onVideoEnded = () => next();

  // Клавіатура
  useEffect(() => {
    if (!hydrated) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hydrated]);

  // Свайп
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchStartX.current = null;
  };

  return (
    <>
      {/* якщо ти на app router — краще винести в metadata сторінки */}
      <Head>
        <meta name="description" content="Latore — український бренд жіночого одягу. Нові колекції, базові речі, швидка доставка." />
        <meta property="og:title" content="LATORE ATELIER" />
        <meta property="og:description" content="Жіночий одяг Latore — перегляньте нову колекцію." />
        <meta property="og:image" content="/HomeCatalog/4.jpg" />
        <meta property="og:type" content="website" />
      </Head>

      <section
        className="relative overflow-hidden min-h-[70svh]  md:min-h-[420px] max-h-[1150px] w-[100vw] -mx-[calc(50%-50vw)]"
        aria-label="Hero slider"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="absolute inset-0">
          {hydrated ? (
            // після гідрації рендеримо активний і сусідів (менше запитів)
            slides.map((s, i) => {
              const isActive = i === index;
              const isNeighbor =
                Math.abs(i - index) === 1 || Math.abs(i - index) === slides.length - 1;
              if (!isActive && !isNeighbor) return null;

              const raw = s.type === "image" && isMobile && s.mobileSrc ? s.mobileSrc : s.src;
              const videoSrc =
                s.type === "video" && isActive ? s.src : undefined;

              return (
                <div
                  key={i}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={!isActive}
                >
                  {s.type === "image" ? (
                    <Image
                      src={raw}
                      alt={s.alt || "Banner"}
                      fill
                      sizes="(max-width: 640px) 100vw,
                             (max-width: 1024px) 100vw,
                             (max-width: 1536px) 100vw,
                             1536px"
                      priority={i === 0}
                      fetchPriority={i === 0 ? "high" : undefined}
                      quality={70}
                      className={getImageClass(s, isMobile)}
                    />
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={videoSrc}
                      poster={s.poster || undefined}
                      className="w-full h-full object-cover"
                      muted
                      playsInline
                      preload="none"
                      onEnded={onVideoEnded}
                    />
                  )}
                </div>
              );
            })
          ) : (
            // SSR: тільки перший кадр — мінімум байтів, стабільний LCP
            <Image
              src={slides[0].src}
              alt={slides[0].alt || "Banner"}
              fill
              sizes="(max-width: 1536px) 100vw, 1536px"
              priority
              fetchPriority="high"
              quality={70}
              className={getImageClass(slides[0], isMobile)}
            />
          )}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        {/* контент поверх */}
        {(() => {
          const s = slides[index];
          return (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
              {(s.title || s.subtitle) && (
                <>
                  {s.title && (
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-wide drop-shadow">
                      {s.title}
                    </h1>
                  )}
                  {s.subtitle && (
                    <p className="mt-2 text-sm sm:text-lg lg:text-2xl drop-shadow">
                      {s.subtitle}
                    </p>
                  )}
                </>
              )}
              {s.ctaText && s.ctaHref && (
                <a
                  href={s.ctaHref}
                  className="mt-6 inline-block rounded bg-white px-5 py-2 text-sm sm:text-base font-medium text-gray-900 hover:bg-white/90 focus:outline-none focus:ring"
                 // className="mt-6 inline-block rounded bg-white px-5 py-2 text-sm sm:text-base font-medium text-gray-900 hover:bg-white/90 focus:outline-none focus:ring"
                >
                  {s.ctaText}
                </a>
              )}
            </div>
          );
        })()}

        {/* керування — лише після гідрації */}
        {hydrated && (
          <>
            <button
              aria-label="Попередній слайд"
              onClick={prev}
                  //  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-10 w-10 rounded-full bg-black/35 text-white hover:bg-black/55"
                   className="absolute left-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-10 w-10 rounded-full bg-black/35 text-white hover:bg-black/55"
         >
              ‹
            </button>
            <button
              aria-label="Наступний слайд"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 grid place-items-center h-10 w-10 rounded-full bg-black/35 text-white hover:bg-black/55"
            >
              ›
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Перейти до слайду ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                    i === index ? "bg-white scale-110" : "bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </>
  );
}
