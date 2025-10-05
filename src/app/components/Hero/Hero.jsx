"use client";

import Image from "next/image";
import Head from "next/head";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../Functions/useLanguage";
import Link from "next/link";

const AUTOPLAY_IMAGE_MS = 5000;

/** Хук: true, якщо ширина < 1024px (lg) */
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

/** Підібрати класи для <Image> за fit/focus + mobile */
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
  const t = translateList("home", "hero"); // [заголовок, рядок2, рядок3, ...]
  const isMobile = useIsMobile();

  // --- СЛАЙДИ ---
  const slides = useMemo(
    () => [
    {
  type: "image",
  src: "/hoom/baner2desk.avif",
  mobileSrc: "/hoom/baner2mob.avif",
 
  alt: "Latore banner 1",
  title: t[0],
  subtitle: t[3],
  ctaText: t[4],
  ctaHref: "/All-products", 
  fit: "cover",
  focus: "left",
fitMobile: "cover",
  focusMobile: "top",
},

      
      // 2) Відео-слайд
      {
        type: "video",
        src: "/hoom/bannervidosen.mp4",
        poster: "/hoom/banerosen.avif", 
        title: "LATORE ATELIER",
        subtitle: "2025",
        ctaText: t[5],
        ctaHref: "/All-products", 
        
      },
      // 3) Фото-слайд
      {
        type: "image",
       src: "/hoom/baner1desk.avif",
  mobileSrc: "/hoom/baner1mob.avif",
        alt: "Latore banner 2",
        title: t[0],
        subtitle: t[3],
        ctaText: t[4],
        ctaHref: "/All-products", 
        fit: "cover",
        focus: "center",
      },
    ],
    [t]
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const videoRefs = useRef([]);
  const touchStartX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // автоплей (фото — по таймеру, відео — після завершення)
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const current = slides[index];
    if (!current) return;

    // керування відтворенням відео
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === index) {
        v.currentTime = 0;
        setTimeout(() => v.play().catch(() => {}), 0);
      } else {
        v.pause();
      }
    });

    if (current.type === "image" && !paused) {
      const ms = current.durationMs ?? AUTOPLAY_IMAGE_MS;
      timerRef.current = setTimeout(next, ms);
    }
    return () => timerRef.current && clearTimeout(timerRef.current);
  }, [index, paused, slides]);

  const onVideoEnded = () => next();

  // клавіатура
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // свайп
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
      <Head>
        <meta name="description" content="Latore - Український бренд жіночого одягу" />
        <meta property="og:image" content="/HomeCatalog/4.avif" />
      </Head>

      {/* FULL-BLEED секція: edge-to-edge на всю ширину */}
      <section
  className="relative overflow-hidden 
             h-[80vh] min-h-[460px] max-h-[1050px]
             w-[100vw] -mx-[calc(50%-50vw)]"
  aria-label="Hero slider"
  //onMouseEnter={() => setPaused(true)}
  //onMouseLeave={() => setPaused(false)}
  onTouchStart={onTouchStart}
  onTouchEnd={onTouchEnd}
>

        {/* Слайди (fade) */}
        <div className="absolute inset-0">
          {slides.map((s, i) => {
            const src = s.type === "image" && isMobile && s.mobileSrc ? s.mobileSrc : s.src;
            return (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== index}
              >
                {s.type === "image" ? (
                  <Image
                    src={src}
                    alt={s.alt || "Banner"}
                    fill
                    priority={i === 0}
                    sizes="100vw"
                     quality={90}
                    className={getImageClass(s, isMobile)}
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={s.src}
                    poster={s.poster || undefined}
                    className="w-full h-full  object-cover"
                    muted
                    playsInline
                    preload="metadata"
                    onEnded={onVideoEnded}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* мʼяке затемнення для контрасту тексту */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

        {/* Текст + CTA (підставляється з активного слайду) */}
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
                >
                  {s.ctaText}
                </a>
              )}
            </div>
          );
        })()}

        {/* Стрілки */}
        <button
          aria-label="Попередній слайд"
          onClick={prev}
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

        {/* Крапки */}
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
      </section>
    </>
  );
}
