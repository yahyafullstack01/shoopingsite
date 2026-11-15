"use client";

import Link from "next/link";
import { useLanguage } from "../../Functions/useLanguage";

export default function BlackFridayBar() {
  const { language, translateList } = useLanguage();
  const t = translateList("home", "blackFriday") || {};
  const isUA = language === "UA";

  const message =
    t.bar ||
    (isUA
      ? "Black Friday у Latore — обмежена пропозиція"
      : "Black Friday at Latore — limited edit");
  const shop = t.barCta || (isUA ? "Дивитися" : "Shop");

  return (
    <div className="relative z-[60] bg-[#0a0a0a] text-[#f4f0ea]">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2 text-center text-[11px] uppercase tracking-[0.22em] sm:text-xs">
        <span className="text-[#c4a574]">●</span>
        <p className="truncate text-white/85">{message}</p>
        <Link
          href="/black-friday"
          className="shrink-0 border-b border-[#c4a574]/70 pb-px text-[#c4a574] transition hover:text-white hover:border-white"
        >
          {shop}
        </Link>
      </div>
    </div>
  );
}
