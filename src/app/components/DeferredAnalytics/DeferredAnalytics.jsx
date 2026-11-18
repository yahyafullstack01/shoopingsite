"use client";

import { useEffect } from "react";

const INTERACTION_EVENTS = ["pointerdown", "keydown", "touchstart", "scroll", "mousemove"];
const FALLBACK_DELAY_MS = 5000;

function injectGoogleAnalytics() {
  const s1 = document.createElement("script");
  s1.src = "https://www.googletagmanager.com/gtag/js?id=G-6ZG9YKXCTQ";
  s1.async = true;
  document.head.appendChild(s1);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-6ZG9YKXCTQ");
}

function injectClarity() {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "z156bs4xko");
}

function injectFacebookPixel() {
  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", "1137131354016660");
  window.fbq("track", "PageView");
}

export default function DeferredAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      INTERACTION_EVENTS.forEach((evt) => window.removeEventListener(evt, load));
      clearTimeout(fallbackTimer);
      injectGoogleAnalytics();
      injectClarity();
      injectFacebookPixel();
    };

    INTERACTION_EVENTS.forEach((evt) => window.addEventListener(evt, load, { once: true, passive: true }));
    const fallbackTimer = setTimeout(load, FALLBACK_DELAY_MS);

    return () => {
      INTERACTION_EVENTS.forEach((evt) => window.removeEventListener(evt, load));
      clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
}
