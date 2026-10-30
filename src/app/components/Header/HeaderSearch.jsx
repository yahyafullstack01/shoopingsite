"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FaSearch, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useLanguage } from "../../Functions/useLanguage";
import products from "../../data/products";
import { productMatchesQuery } from "../../utils/products";
import { getProductImageSrc } from "../../utils/productData";

const inputClass =
  "min-w-0 flex-1 appearance-none border-0 bg-transparent text-base outline-none ring-0 shadow-none focus:border-0 focus:outline-none focus:ring-0 sm:text-sm";

const MAX_SUGGESTIONS = 8;
const MIN_CHARS = 2;

function categorySlug(product) {
  const raw = (
    product?.translations?.EN?.category ||
    product?.category ||
    "all"
  )
    .toString()
    .trim()
    .toLowerCase();
  return raw || "all";
}

function highlightMatch(text, query) {
  const q = query.trim();
  if (!q || !text) return text;
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q.toLowerCase());
  if (idx < 0) return text;
  return (
    <>
      {text.slice(0, idx)}
      <span className="font-semibold">{text.slice(idx, idx + q.length)}</span>
      {text.slice(idx + q.length)}
    </>
  );
}

export default function HeaderSearch({ isDarkMode }) {
  const router = useRouter();
  const { language, translateList } = useLanguage();
  const searchT = translateList("home", "search");
  const t =
    searchT && typeof searchT === "object"
      ? searchT
      : {
          placeholder: "Search by name...",
          aria: "Search products",
          clear: "Clear",
          noResults: "No products found",
          seeAll: "See all results",
        };

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [debounced, setDebounced] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(query.trim()), 150);
    return () => clearTimeout(id);
  }, [query]);

  useEffect(() => {
    setActiveIndex(-1);
  }, [debounced]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const suggestions = useMemo(() => {
    if (debounced.length < MIN_CHARS) return [];
    const list = Array.isArray(products) ? products : [];
    return list
      .filter((p) => productMatchesQuery(p, debounced))
      .slice(0, MAX_SUGGESTIONS);
  }, [debounced]);

  const showPanel = debounced.length >= MIN_CHARS;

  const close = () => {
    setOpen(false);
    setQuery("");
    setDebounced("");
    setActiveIndex(-1);
  };

  const goToProduct = (product) => {
    const id = product?.id;
    if (id == null) return;
    const cat = categorySlug(product);
    close();
    router.push(
      `/All-products?category=${encodeURIComponent(cat)}&product=${id}`,
      { scroll: true }
    );
  };

  const submit = (e) => {
    e?.preventDefault?.();
    if (activeIndex >= 0 && suggestions[activeIndex]) {
      goToProduct(suggestions[activeIndex]);
      return;
    }
    const q = query.trim();
    close();
    if (!q) {
      router.push("/All-products", { scroll: true });
      return;
    }
    router.push(`/All-products?q=${encodeURIComponent(q)}&page=1`, {
      scroll: true,
    });
  };

  const onKeyDown = (e) => {
    if (!showPanel || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i <= 0 ? suggestions.length - 1 : i - 1));
    }
  };

  const langKey = language === "UA" ? "UA" : "EN";

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
            className={`fixed left-0 right-0 top-0 z-[70] border-b shadow-md ${
              isDarkMode
                ? "border-gray-700 bg-black"
                : "border-gray-200 bg-white"
            }`}
          >
            <form
              onSubmit={submit}
              className="mx-auto flex max-w-3xl items-center gap-2 px-3 py-2.5"
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
                onKeyDown={onKeyDown}
                placeholder={t.placeholder}
                aria-label={t.aria}
                aria-autocomplete="list"
                aria-controls="header-search-suggestions"
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

            {showPanel ? (
              <div
                id="header-search-suggestions"
                role="listbox"
                className={`mx-auto max-h-[min(70vh,28rem)] max-w-3xl overflow-y-auto border-t ${
                  isDarkMode
                    ? "border-gray-700 bg-black"
                    : "border-gray-100 bg-white"
                }`}
              >
                {suggestions.length === 0 ? (
                  <p
                    className={`px-4 py-3 text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {t.noResults || "No products found"}
                  </p>
                ) : (
                  <ul>
                    {suggestions.map((product, index) => {
                      const name =
                        product.translations?.[langKey]?.name ||
                        product.translations?.EN?.name ||
                        product.name ||
                        "Product";
                      const category =
                        product.translations?.[langKey]?.category ||
                        product.translations?.EN?.category ||
                        product.category ||
                        "";
                      const active = index === activeIndex;
                      return (
                        <li key={product.id} role="option" aria-selected={active}>
                          <button
                            type="button"
                            onMouseEnter={() => setActiveIndex(index)}
                            onClick={() => goToProduct(product)}
                            className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition ${
                              active
                                ? isDarkMode
                                  ? "bg-neutral-800"
                                  : "bg-gray-100"
                                : isDarkMode
                                  ? "hover:bg-neutral-900"
                                  : "hover:bg-gray-50"
                            }`}
                          >
                            <span className="relative h-12 w-10 shrink-0 overflow-hidden rounded bg-gray-200 dark:bg-neutral-800">
                              <Image
                                src={getProductImageSrc(product.image)}
                                alt=""
                                fill
                                sizes="40px"
                                className="object-cover"
                                unoptimized
                              />
                            </span>
                            <span className="min-w-0 flex-1">
                              <span
                                className={`block truncate text-sm ${
                                  isDarkMode ? "text-white" : "text-black"
                                }`}
                              >
                                {highlightMatch(name, debounced)}
                              </span>
                              {category ? (
                                <span
                                  className={`block truncate text-xs ${
                                    isDarkMode
                                      ? "text-gray-400"
                                      : "text-gray-500"
                                  }`}
                                >
                                  {category}
                                </span>
                              ) : null}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                )}

                {query.trim() ? (
                  <button
                    type="button"
                    onClick={submit}
                    className={`flex w-full items-center gap-2 border-t px-4 py-3 text-left text-sm font-medium ${
                      isDarkMode
                        ? "border-gray-700 text-white hover:bg-neutral-900"
                        : "border-gray-100 text-neutral-900 hover:bg-gray-50"
                    }`}
                  >
                    <FaSearch className="text-xs opacity-70" />
                    {t.seeAll || "See all results"} — “{query.trim()}”
                  </button>
                ) : null}
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </>
  );
}
