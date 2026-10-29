"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useLanguage } from "./useLanguage";
import { FiFilter, FiX } from "react-icons/fi";

const ORIGINAL_CATEGORIES = [
  "All",
  "New",
  "Top-products",
  "Costumes",
  "Dresses",
  "Shirts",
  "Skirts",
  "Sweaters",
  "Pants",
  "Jackets",
  "Tops",
  "Outerwear",
  "Shorts",
];

const ORIGINAL_SIZES = ["All", "S", "M", "L", "XL"];

const selectClass =
  "w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-900 outline-none transition focus:border-neutral-400 focus:ring-1 focus:ring-neutral-300 dark:border-gray-600 dark:bg-neutral-900 dark:text-white";

function SizeChips({ sizes, sizeMap, selectedSize, onSelect }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {sizes.map((label) => {
        const value = sizeMap[label] ?? label;
        const isAll = value === "All";
        const active = isAll
          ? !selectedSize || selectedSize === "All" || selectedSize === ""
          : selectedSize === value;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onSelect(isAll ? "" : value)}
            className={`min-w-[2.5rem] rounded-full px-3 py-1.5 text-xs font-medium transition ${
              active
                ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-neutral-800 dark:text-gray-200 dark:hover:bg-neutral-700"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

function PriceSlider({ priceMin, priceMax, maxPrice, onChange, label }) {
  const value = Math.min(Math.max(Number(maxPrice) || priceMin, priceMin), priceMax);
  return (
    <div className="w-full min-w-[9rem]">
      <div className="mb-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <span>{label}</span>
        <span className="font-medium text-gray-800 dark:text-gray-200">
          {priceMin} – {value} UAH
        </span>
      </div>
      <input
        type="range"
        min={priceMin}
        max={priceMax}
        step="10"
        value={value}
        onChange={onChange}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-neutral-900 dark:bg-neutral-700 dark:accent-white"
        aria-label={label}
      />
    </div>
  );
}

export default function FilterSidebar({
  maxPrice,
  setMaxPrice,
  priceLimit,
  selectedSize,
  handleSizeSelect,
  selectedCategory,
  handleCategorySelect,
  children,
}) {
  const { translateList, language } = useLanguage();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const PRICE_MIN = 100;
  const PRICE_MAX = Math.max(PRICE_MIN, Number(priceLimit) || 10000);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (!isFilterOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  const menuItems = Array.isArray(translateList("Filtersidebar", "header"))
    ? translateList("Filtersidebar", "header")
    : [];
  const clearLabel = menuItems[10] || "Reset";

  const translatedCategories = useMemo(() => {
    const list = translateList("Filtersidebar", "Categories");
    return Array.isArray(list) && list.length ? list : ORIGINAL_CATEGORIES;
  }, [translateList, language]);

  const translatedSizes = useMemo(() => {
    const list = translateList("Filtersidebar", "SizeCatalogue");
    return Array.isArray(list) && list.length ? list : ORIGINAL_SIZES;
  }, [translateList, language]);

  const categoryMap = useMemo(
    () =>
      Object.fromEntries(
        translatedCategories.map((label, i) => [
          label,
          ORIGINAL_CATEGORIES[i] || label,
        ])
      ),
    [translatedCategories]
  );

  const categoryReverseMap = useMemo(
    () =>
      Object.fromEntries(
        ORIGINAL_CATEGORIES.map((key, i) => [
          key.toLowerCase(),
          translatedCategories[i] || key,
        ])
      ),
    [translatedCategories]
  );

  const sizeMap = useMemo(
    () =>
      Object.fromEntries(
        translatedSizes.map((label, i) => [label, ORIGINAL_SIZES[i] || label])
      ),
    [translatedSizes]
  );

  const handlePriceChange = (e) => setMaxPrice(parseFloat(e.target.value));

  const resetAll = () => {
    handleCategorySelect("");
    handleSizeSelect("");
    setMaxPrice(PRICE_MAX);
  };

  const activeCount = [
    selectedCategory && selectedCategory.toLowerCase() !== "all",
    selectedSize && selectedSize !== "All",
    Number(maxPrice) < PRICE_MAX,
  ].filter(Boolean).length;

  const categorySelect = (
    <div className="flex min-w-[10rem] flex-1 flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {menuItems[7] || "Category"}
      </label>
      <select
        value={categoryReverseMap[selectedCategory?.toLowerCase()] || translatedCategories[0]}
        onChange={(e) =>
          handleCategorySelect(
            e.target.value === translatedCategories[0] || categoryMap[e.target.value] === "All"
              ? ""
              : categoryMap[e.target.value]
          )
        }
        className={selectClass}
      >
        {translatedCategories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );

  const sizeBlock = (
    <div className="flex flex-col gap-1.5">
      <span className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
        {menuItems[4] || "Size"}
      </span>
      <SizeChips
        sizes={translatedSizes}
        sizeMap={sizeMap}
        selectedSize={selectedSize}
        onSelect={handleSizeSelect}
      />
    </div>
  );

  const priceBlock = (
    <div className="flex min-w-[11rem] flex-1 flex-col justify-end">
      <PriceSlider
        priceMin={PRICE_MIN}
        priceMax={PRICE_MAX}
        maxPrice={maxPrice}
        onChange={handlePriceChange}
        label={menuItems[3] || "Price"}
      />
    </div>
  );

  // Desktop / tablet bar
  if (!isMobile) {
    return (
      <div className="sticky top-16 z-30 w-full">
        <div className="rounded-2xl border border-gray-200/80 bg-white px-4 py-3 shadow-sm dark:border-gray-700 dark:bg-neutral-900">
          <div className="flex flex-wrap items-end gap-4 lg:gap-6">
            {categorySelect}
            {sizeBlock}
            {priceBlock}
            <div className="ml-auto flex flex-wrap items-center gap-3 pb-0.5">
              {children}
              <button
                type="button"
                onClick={resetAll}
                className="text-sm text-gray-500 underline-offset-2 transition hover:text-neutral-900 hover:underline dark:text-gray-400 dark:hover:text-white"
              >
                {clearLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mobile: compact bar + bottom sheet
  return (
    <>
      <div className="sticky top-14 z-30 w-full">
        <div className="flex items-center gap-2 rounded-2xl border border-gray-200/80 bg-white p-2 shadow-sm dark:border-gray-700 dark:bg-neutral-900">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 dark:border-gray-600 dark:bg-neutral-900 dark:text-white"
          >
            <FiFilter className="h-4 w-4" />
            {menuItems[8] || "Filters"}
            {activeCount > 0 ? (
              <span className="rounded-full bg-neutral-900 px-1.5 py-0.5 text-[10px] font-semibold text-white dark:bg-white dark:text-neutral-900">
                {activeCount}
              </span>
            ) : null}
          </button>
          <div className="min-w-0 flex-1">{children}</div>
        </div>
      </div>

      {isFilterOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-black/40 md:hidden"
          onClick={() => setIsFilterOpen(false)}
          role="presentation"
        />
      ) : null}

      <aside
        className={`fixed bottom-0 left-0 right-0 z-[70] max-h-[85vh] overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl transition-transform duration-300 ease-out dark:bg-neutral-900 md:hidden ${
          isFilterOpen ? "translate-y-0" : "translate-y-full pointer-events-none"
        }`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={!isFilterOpen}
      >
        <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-3 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {menuItems[2] || "Filters"}
          </h2>
          <button
            type="button"
            onClick={() => setIsFilterOpen(false)}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800"
            aria-label="Close"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {categorySelect}
          {sizeBlock}
          {priceBlock}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={resetAll}
            className="flex-1 rounded-xl border border-gray-200 py-3 text-sm font-medium text-gray-700 dark:border-gray-600 dark:text-gray-200"
          >
            {clearLabel}
          </button>
          <button
            type="button"
            onClick={() => setIsFilterOpen(false)}
            className="flex-[1.4] rounded-xl bg-neutral-900 py-3 text-sm font-semibold text-white dark:bg-white dark:text-neutral-900"
          >
            {menuItems[9] || "Apply"}
          </button>
        </div>
      </aside>
    </>
  );
}
