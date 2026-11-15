"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";

/** Sale ends end of Cyber Monday week (Kyiv) — adjust when the campaign ends */
const SALE_ENDS_AT = new Date("2026-11-30T23:59:59+02:00").getTime();

function useCountdown(targetMs) {
  // null until mount — avoids SSR/client Date.now() hydration mismatch
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  return useMemo(() => {
    if (now == null) {
      return { ready: false, ended: false, days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    const diff = Math.max(0, targetMs - now);
    const totalSec = Math.floor(diff / 1000);
    return {
      ready: true,
      ended: diff <= 0,
      days: Math.floor(totalSec / 86400),
      hours: Math.floor((totalSec % 86400) / 3600),
      minutes: Math.floor((totalSec % 3600) / 60),
      seconds: totalSec % 60,
    };
  }, [now, targetMs]);
}

function pad(n) {
  return String(n).padStart(2, "0");
}

export default function BlackFriday() {
  const router = useRouter();
  const { language, translateList } = useLanguage();
  const t = translateList("home", "blackFriday") || {};
  const isUA = language === "UA";
  const countdown = useCountdown(SALE_ENDS_AT);

  const brand = t.brand || "LATORE";
  const title = t.title || "BLACK FRIDAY";
  const subtitle =
    t.subtitle ||
    (isUA
      ? "Знижки до -25% на обрані позиції із вовни, шкіри та трикотажу"
      : "Discounts up to -25% on selected wool, leather, and knitwear pieces.");
  const cta = t.cta || (isUA ? "До колекції" : "Shop the edit");
  const endsLabel = t.endsIn || (isUA ? "До кінця акції" : "Ends in");
  const endedLabel = t.ended || (isUA ? "Акція завершена" : "Sale ended");
  const units = t.units || {
    days: isUA ? "дні" : "days",
    hours: isUA ? "год" : "hrs",
    minutes: isUA ? "хв" : "min",
    seconds: isUA ? "сек" : "sec",
  };

  const goShop = () => router.push("/black-friday");

  return (
    <section
      aria-labelledby="black-friday-heading"
      className="bf-section relative isolate overflow-hidden text-[#f4f0ea]"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hoom/special-offers.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] scale-105 bf-kenburns"
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="bf-grain absolute inset-0 opacity-[0.35]" aria-hidden />
        <div className="bf-shine absolute -left-1/4 top-0 h-full w-1/2 opacity-40" aria-hidden />
      </div>

      <div className="mx-auto flex min-h-[78vh] w-full max-w-6xl flex-col justify-end px-5 pb-14 pt-24 sm:min-h-[70vh] sm:px-8 sm:pb-16 md:justify-center md:pb-20">
        <p className="bf-fade-up mb-3 text-[11px] font-semibold uppercase tracking-[0.45em] text-[#c4a574] sm:text-xs">
          {brand}
        </p>

        <h2
          id="black-friday-heading"
          className="bf-fade-up bf-delay-1 max-w-[14ch] text-[clamp(2.75rem,12vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.03em] text-white"
        >
          {title}
        </h2>

        <div className="bf-fade-up bf-delay-2 mt-5 h-px w-16 bg-[#c4a574] sm:w-24" />

        <p className="bf-fade-up bf-delay-2 mt-5 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
          {subtitle}
        </p>

        {/* Countdown — secondary to brand + title (client-only values after mount) */}
        <div className="bf-fade-up bf-delay-3 mt-8">
          <p className="mb-3 text-[10px] uppercase tracking-[0.35em] text-white/50">
            {countdown.ready && countdown.ended ? endedLabel : endsLabel}
          </p>
          {!(countdown.ready && countdown.ended) ? (
            <div
              className="flex flex-wrap gap-2 sm:gap-3"
              role="timer"
              aria-live="polite"
              suppressHydrationWarning
            >
              {[
                { value: countdown.ready ? countdown.days : 0, label: units.days },
                { value: countdown.ready ? countdown.hours : 0, label: units.hours },
                { value: countdown.ready ? countdown.minutes : 0, label: units.minutes },
                { value: countdown.ready ? countdown.seconds : 0, label: units.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="min-w-[4.25rem] border border-white/15 bg-black/35 px-3 py-2 text-center backdrop-blur-sm sm:min-w-[5rem] sm:px-4 sm:py-3"
                >
                  <div
                    className="font-mono text-xl font-semibold tabular-nums text-white sm:text-2xl"
                    suppressHydrationWarning
                  >
                    {pad(unit.value)}
                  </div>
                  <div className="mt-0.5 text-[9px] uppercase tracking-[0.2em] text-white/45">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className="bf-fade-up bf-delay-4 mt-9 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={goShop}
            className="group relative overflow-hidden bg-[#c4a574] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-[#111] transition hover:bg-[#d4b888]"
          >
            <span className="relative z-10">{cta}</span>
            <span
              className="absolute inset-0 -translate-x-full bg-white/25 transition duration-500 group-hover:translate-x-0"
              aria-hidden
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        .bf-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
          background-size: 180px 180px;
          mix-blend-mode: overlay;
          pointer-events: none;
        }
        .bf-shine {
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(196, 165, 116, 0.12) 50%,
            transparent 60%
          );
          animation: bf-sweep 9s ease-in-out infinite;
          pointer-events: none;
        }
        .bf-kenburns {
          animation: bf-ken 22s ease-in-out infinite alternate;
        }
        .bf-fade-up {
          opacity: 0;
          transform: translateY(18px);
          animation: bf-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .bf-delay-1 {
          animation-delay: 0.12s;
        }
        .bf-delay-2 {
          animation-delay: 0.24s;
        }
        .bf-delay-3 {
          animation-delay: 0.36s;
        }
        .bf-delay-4 {
          animation-delay: 0.48s;
        }
        @keyframes bf-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bf-ken {
          from {
            transform: scale(1.05) translate3d(0, 0, 0);
          }
          to {
            transform: scale(1.12) translate3d(-1.5%, -1%, 0);
          }
        }
        @keyframes bf-sweep {
          0%,
          100% {
            transform: translateX(-10%);
            opacity: 0.25;
          }
          50% {
            transform: translateX(40%);
            opacity: 0.55;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .bf-kenburns,
          .bf-shine,
          .bf-fade-up {
            animation: none !important;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
