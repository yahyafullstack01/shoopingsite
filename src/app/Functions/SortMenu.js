"use client";

import React, { useEffect, useRef } from "react";
import { useLanguage } from "./useLanguage";

export default function SortMenu({
  sortOrder,
  setSortOrder,
  isSortMenuOpen,
  toggleSortMenu,
}) {
  const { translateList } = useLanguage();
  const menuItems = translateList("SortMenu", "header") || [];
  const rootRef = useRef(null);

  const currentLabel =
    sortOrder === "priceAsc"
      ? menuItems[2] || "Price: Low to High"
      : sortOrder === "priceDesc"
        ? menuItems[3] || "Price: High to Low"
        : menuItems[1] || "Recommended";

  useEffect(() => {
    if (!isSortMenuOpen) return;
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        toggleSortMenu();
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [isSortMenuOpen, toggleSortMenu]);

  return (
    <div className="relative inline-block min-w-0 text-left" ref={rootRef}>
      <button
        type="button"
        className="inline-flex w-full items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-300 dark:border-gray-600 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
        onClick={toggleSortMenu}
        aria-expanded={isSortMenuOpen}
      >
        <span className="truncate">
          <span className="text-gray-500 dark:text-gray-400">
            {(menuItems[0] || "Sort") + ": "}
          </span>
          {currentLabel}
        </span>
        <svg
          className="h-4 w-4 shrink-0 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isSortMenuOpen && (
        <div
          className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-600 dark:bg-neutral-900"
          role="menu"
        >
          {[
            { key: "recommended", label: menuItems[1] || "Recommended" },
            { key: "priceAsc", label: menuItems[2] || "Price: Low to High" },
            { key: "priceDesc", label: menuItems[3] || "Price: High to Low" },
          ].map((opt) => (
            <button
              key={opt.key}
              type="button"
              role="menuitem"
              className={`block w-full px-4 py-2.5 text-left text-sm transition hover:bg-gray-50 dark:hover:bg-neutral-800 ${
                sortOrder === opt.key ||
                (opt.key === "recommended" &&
                  (!sortOrder || sortOrder === "recommended"))
                  ? "font-semibold text-neutral-900 dark:text-white"
                  : "text-gray-700 dark:text-gray-200"
              }`}
              onClick={() => {
                setSortOrder(opt.key);
                toggleSortMenu();
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
