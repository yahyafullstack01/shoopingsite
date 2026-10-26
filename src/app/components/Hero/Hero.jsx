"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLanguage } from "../../Functions/useLanguage";

const AUTOPLAY_IMAGE_MS = 5000;
/** Wait for LCP image before rotating / loading desktop video */
const AUTOPLAY_START_DELAY_MS = 7000;

function useIsMobile(breakpoint = 1024) {
  // null until mounted — avoids loading desktop video on phones during hydration
  const [isMobile, setIsMobile] = useState(/** @type {boolean | null} */ (null));
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
  const fit = isMobile && s.fitMobile ? s.fitMobile : s.fit || "cover";
  const focus = isMobile && s.focusMobile ? s.focusMobile : s.focus || "center";
  const fitClass = fit === "contain" ? "object-contain bg-white" : "object-cover";
  // Named positions or CSS object-position (e.g. "28% 40%") to frame the model
  const focusClass =
    focus === "left"
      ? "object-left"
      : focus === "right"
        ? "object-right"
        : focus === "top"
          ? "object-top"
          : focus === "bottom"
            ? "object-bottom"
            : focus === "center"
              ? "object-center"
              : "";
  const focusStyle =
    focus && !["left", "right", "top", "bottom", "center"].includes(focus)
      ? { objectPosition: focus }
      : undefined;
  return { className: `${fitClass} ${focusClass}`.trim(), style: focusStyle };
}

/** Correct LCP image for mobile vs desktop without waiting for JS */
function LcpPicture({ desktopSrc, mobileSrc, alt, className, style }) {
  return (
    <picture className="absolute inset-0 block h-full w-full">
      <source media="(max-width: 1023px)" srcSet={mobileSrc} type="image/webp" />
      <img
        src={desktopSrc}
        alt={alt || "Banner"}
        className={`absolute inset-0 h-full w-full ${className || ""}`}
        style={style}
        fetchPriority="high"
        decoding="async"
        width={1620}
        height={2160}
      />
    </picture>
  );
}

export default function Hero() {
  const { translateList } = useLanguage();
  const t = translateList("home", "hero");
  const isMobile = useIsMobile();

  const slides = useMemo(
    () => [
      {
        type: "image",
        src: "/hoom/Bannerdesk.webp?v=4",
        mobileSrc: "/hoom/Bannermob.webp?v=6",
        alt: "Latore banner 1",
        ctaText: t[4],
        ctaHref: "/All-products",
        fit: "cover",
        focus: "center",
        fitMobile: "cover",
        focusMobile: "center",
      },
      {
        type: "video",
        // High-quality web encodes at native resolution (no upscale)
        src: "/hoom/optimized/Bannervideodesk.web.mp4",
        mobileSrc: "/hoom/optimized/Bannermobilevideo.web.mp4",
        poster: "/hoom/optimized/BannerVideoPosterDesk.webp",
        mobilePoster: "/hoom/optimized/BannerVideoPosterMob.webp",
        alt: "Latore banner video",
        ctaText: t[4],
        ctaHref: "/All-products",
        fit: "cover",
        focus: "center",
        fitMobile: "cover",
        focusMobile: "center",
      },
      {
        type: "image",
        src: "/hoom/Bannerdesk2.webp?v=4",
        mobileSrc: "/hoom/Bannermob2.webp?v=7",
        alt: "Latore banner 2",
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
  /** Attach video src only after LCP delay (mobile + desktop) */
  const [videoUnlocked, setVideoUnlocked] = useState(false);

  const timerRef = useRef(null);
  const videoRefs = useRef([]);
  const touchStartX = useRef(null);

  const next = () => setIndex((i) => (i + 1) % Math.max(slides.length, 1));
  const prev = () =>
    setIndex((i) => (i - 1 + Math.max(slides.length, 1)) % Math.max(slides.length, 1));

  useEffect(() => {
    if (isMobile === null) return;
    setHydrated(true);
    const t = setTimeout(() => {
      setAutoplayReady(true);
      setVideoUnlocked(true);
    }, AUTOPLAY_START_DELAY_MS);
    return () => clearTimeout(t);
  }, [isMobile]);

  useEffect(() => {
    if (!hydrated || isMobile === null) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    const current = slides[index];
    if (!current) return;

    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      const slide = slides[i];
      if (i === index && slide?.type === "video" && videoUnlocked) {
        v.currentTime = 0;
        const play = () => v.play().catch(() => {});
        if (typeof requestIdleCallback === "function") {
          requestIdleCallback(play, { timeout: 1200 });
        } else {
          setTimeout(play, 300);
        }
      } else {
        v.pause();
      }
    });

    if (current.type === "image" && autoplayReady && !paused) {
      const ms = current.durationMs ?? AUTOPLAY_IMAGE_MS;
      timerRef.current = setTimeout(next, ms);
    }
    return () => timerRef.current && clearTimeout(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- next is stable enough; depend on slide state
  }, [index, paused, slides, hydrated, autoplayReady, videoUnlocked, isMobile]);

  const onVideoEnded = () => next();

  useEffect(() => {
    if (!hydrated) return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, slides.length]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    const start = touchStartX.current;
    if (start == null) return;
    const dx = e.changedTouches[0].clientX - start;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchStartX.current = null;
  };

  const first = slides[0];
  const showSlider = hydrated && isMobile !== null;
  const mobileLike = isMobile === true;

  return (
    <section
      className="relative w-full overflow-hidden aspect-[3/4] max-h-[85svh] md:aspect-[1024/309] md:max-h-none md:min-h-0 md:h-auto"
      aria-label="Hero slider"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="absolute inset-0">
        {showSlider ? (
          slides.map((s, i) => {
            const isActive = i === index;
            const isNeighbor =
              Math.abs(i - index) === 1 || Math.abs(i - index) === slides.length - 1;
            // Only mount active slide + next image neighbor (never preload video neighbors)
            if (!isActive && !(isNeighbor && s.type === "image")) return null;

            const raw =
              s.type === "image" && mobileLike && s.mobileSrc ? s.mobileSrc : s.src;
            const videoPoster =
              s.type === "video"
                ? mobileLike && s.mobilePoster
                  ? s.mobilePoster
                  : s.poster
                : undefined;
            // Load compressed mp4 only after LCP delay (mobile + desktop)
            const videoSrc =
              s.type === "video" && isActive && videoUnlocked
                ? mobileLike && s.mobileSrc
                  ? s.mobileSrc
                  : s.src
                : undefined;
            const imgFit = getImageClass(s, mobileLike);

            return (
              <div
                key={`${s.type}-${s.src || s.poster}-${i}`}
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
                    sizes="100vw"
                    priority={i === 0}
                    fetchPriority={i === 0 ? "high" : "low"}
                    quality={95}
                    // Serve prepared webp as-is — avoid Next recompressing hero art
                    unoptimized
                    className={imgFit.className}
                    style={imgFit.style}
                  />
                ) : !videoUnlocked ? (
                  // Poster until video unlocks — keeps first paint fast
                  <Image
                    src={videoPoster || s.poster}
                    alt={s.alt || "Banner"}
                    fill
                    sizes="100vw"
                    fetchPriority="low"
                    quality={95}
                    unoptimized
                    className={imgFit.className}
                    style={imgFit.style}
                  />
                ) : (
                  <video
                    ref={(el) => (videoRefs.current[i] = el)}
                    src={videoSrc}
                    poster={videoPoster || undefined}
                    className="h-full w-full object-cover"
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
          <LcpPicture
            desktopSrc={first.src}
            mobileSrc={first.mobileSrc}
            alt={first.alt}
            {...getImageClass(first, true)}
          />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

      {(() => {
        const s = slides[index] || first;
        return (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
            {(s.title || s.subtitle) && (
              <>
                {s.title && (
                  <h1 className="text-2xl font-semibold tracking-wide drop-shadow sm:text-4xl lg:text-5xl">
                    {s.title}
                  </h1>
                )}
                {s.subtitle && (
                  <p className="mt-2 text-sm drop-shadow sm:text-lg lg:text-2xl">
                    {s.subtitle}
                  </p>
                )}
              </>
            )}
            {s.ctaText && s.ctaHref && (
              <a
                href={s.ctaHref}
                className="mt-6 inline-block rounded border border-white/60 bg-black/25 px-5 py-2 text-sm font-medium text-white backdrop-blur-[6px] hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/50 sm:text-base"
              >
                {s.ctaText}
              </a>
            )}
          </div>
        );
      })()}

      {showSlider && (
        <>
          <button
            aria-label="Попередній слайд"
            onClick={prev}
            className="absolute left-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white hover:bg-black/55"
          >
            ‹
          </button>
          <button
            aria-label="Наступний слайд"
            onClick={next}
            className="absolute right-3 top-1/2 z-20 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white hover:bg-black/55"
          >
            ›
          </button>

          <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Перейти до слайду ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-2.5 rounded-full border border-white/70 transition ${
                  i === index ? "scale-110 bg-white" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
