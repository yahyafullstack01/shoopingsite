"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "../../Functions/useLanguage";
import styles from "./About.module.css";

export default function About() {
  const { language, translateList } = useLanguage();
  const menuItems = translateList("home", "about");
  const infoForm = translateList("home", "infoForm") || {};

  const [isFlipped, setIsFlipped] = useState(false);

  const learnMoreLabel = language === "UA" ? "Дізнатися більше" : "Learn More";
  const closeLabel = infoForm.close || (language === "UA" ? "Закрити" : "Close");

  return (
    <section
      id="about"
      className={`${styles.sectionBg} relative overflow-x-hidden dark:bg-zinc-950 py-12 sm:py-14 lg:py-16 px-4 sm:px-6 transition-colors duration-300`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden dark:block bg-gradient-to-b from-zinc-900 via-zinc-950 to-black"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#C8A27A]/10 blur-3xl hidden dark:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/4 rounded-full bg-white/5 blur-3xl hidden dark:block"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <div className={styles.scene}>
          <div
            className={`${styles.card} ${isFlipped ? styles.cardFlipped : ""}`}
          >
            {/* Front */}
            <div className={`${styles.face} ${styles.faceCard}`}>
              <div
                className={`${styles.photoWrap} relative h-[42%] min-h-[180px] sm:min-h-[220px] shrink-0`}
              >
                <Image
                  src="/hoom/ab.jpg"
                  alt="About Image"
                  fill
                  sizes="(max-width: 768px) 100vw, 920px"
                  className="object-cover"
                  priority={false}
                />
                <div className={`${styles.photoFade} absolute inset-0`} />
              </div>

              <div
                className={`${styles.contentArea} flex flex-1 flex-col justify-between px-5 py-5 sm:px-8 sm:py-6`}
              >
                <div>
                  <h2
                    className={`${styles.title} text-xl sm:text-2xl lg:text-3xl font-normal tracking-wide`}
                  >
                    {menuItems[0]}
                  </h2>
                  <p
                    className={`${styles.bodyText} mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed`}
                  >
                    {menuItems[1]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsFlipped(true)}
                  aria-expanded={isFlipped}
                  className={`${styles.ctaBtn} mt-6 w-full sm:w-auto self-start rounded-full px-6 py-2.5 text-sm sm:text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#C8A27A]/60`}
                >
                  {learnMoreLabel}
                </button>
              </div>
            </div>

            {/* Back */}
            <div className={`${styles.face} ${styles.back} ${styles.faceCard}`}>
              <div
                className={`${styles.backHeader} flex shrink-0 items-start justify-between gap-4 px-5 py-4 sm:px-8 sm:py-5`}
              >
                <h2
                  className={`${styles.title} text-lg sm:text-xl lg:text-2xl font-normal tracking-wide`}
                >
                  {menuItems[0]}
                </h2>
                <button
                  type="button"
                  onClick={() => setIsFlipped(false)}
                  aria-label={closeLabel}
                  className={`${styles.ctaBtn} shrink-0 rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#C8A27A]/60 dark:focus:ring-white/40`}
                >
                  {closeLabel}
                </button>
              </div>

              <div className={`${styles.backScroll} px-5 py-4 sm:px-8 sm:py-6`}>
                <div
                  className={`${styles.bodyText} space-y-4 sm:space-y-5 text-sm sm:text-base lg:text-lg leading-relaxed sm:leading-loose`}
                >
                  <p>{menuItems[1]}</p>
                  <p>{menuItems[2]}</p>
                  <p>{menuItems[3]}</p>
                  <p>{menuItems[4]}</p>
                  <p>{menuItems[5]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
