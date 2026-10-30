"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";

const inputClass =
  "min-w-0 flex-1 appearance-none border-0 bg-transparent text-base outline-none ring-0 shadow-none focus:border-0 focus:outline-none focus:ring-0 sm:text-sm";

export default function HeaderSearch({ isDarkMode }) {
  const router = useRouter();
  const { translateList } = useLanguage();
  const searchT = translateList("home", "search");
  const t =
    searchT && typeof searchT === "object"
      ? searchT
      : {
          placeholder: "Search by name...",
          aria: "Search products",
          clear: "Clear",
        };

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
  };

  const submit = (e) => {
    e?.preventDefault?.();
    const q = query.trim();
    setOpen(false);
    if (!q) {
      router.push("/All-products", { scroll: true });
      return;
    }
    router.push(`/All-products?q=${encodeURIComponent(q)}&page=1`, {
      scroll: true,
    });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={t.aria}
        className="p-2 rounded-full border border-gray-300 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-gray-600 transition duration-300"
      >
        <FaSearch className="text-gray-900 dark:text-gray-300 text-sm sm:text-base" />
      </button>

      {open ? (
        <>
          <button
            type="button"
            aria-label={t.clear}
            className="fixed inset-0 z-[65] bg-black/30"
            onClick={close}
          />
          <div
            className={`fixed left-0 right-0 top-0 z-[70] border-b px-3 py-2.5 shadow-md ${
              isDarkMode
                ? "border-gray-700 bg-black"
                : "border-gray-200 bg-white"
            }`}
          >
            <form
              onSubmit={submit}
              className="mx-auto flex max-w-3xl items-center gap-2"
            >
              <FaSearch
                className={`shrink-0 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
                aria-hidden
              />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.placeholder}
                aria-label={t.aria}
                autoComplete="off"
                className={`${inputClass} ${
                  isDarkMode
                    ? "text-white placeholder:text-gray-400"
                    : "text-black placeholder:text-gray-500"
                }`}
              />
              <button
                type="submit"
                aria-label={t.aria}
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                  isDarkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-neutral-900 text-white hover:bg-neutral-700"
                }`}
              >
                <FaSearch className="text-sm" />
              </button>
              <button
                type="button"
                aria-label={t.clear}
                onClick={close}
                className="shrink-0 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <FaTimes className="text-sm" />
              </button>
            </form>
          </div>
        </>
      ) : null}
    </>
  );
}
