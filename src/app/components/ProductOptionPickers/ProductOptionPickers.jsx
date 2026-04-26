"use client";

import React from "react";
import { FaCheck } from "react-icons/fa";
import { approximateColorFromLabel } from "../../utils/colorFromName";

function rowJustify(align) {
  if (align === "text-left") return "justify-start";
  if (align === "md:text-left text-center") return "justify-center md:justify-start";
  return "justify-start";
}

export function ProductColorSwatches({
  label,
  colors = [],
  value,
  onChange,
  error,
  align = "md:text-left text-center",
}) {
  if (!colors.length) return null;

  return (
    <div className="mb-6 sm:mb-8">
      <p
        className={`mb-3 block text-sm font-medium ${align} text-black dark:text-gray-100`}
      >
        {label}
        {value ? (
          <span className="font-normal text-neutral-700 dark:text-neutral-300">
            {": "}
            {value}
          </span>
        ) : null}
      </p>
      <div
        className={`flex flex-wrap gap-3 sm:gap-2.5 ${rowJustify(align)}`}
        role="listbox"
        aria-label={label}
      >
        {colors.map((c) => {
          const hex = approximateColorFromLabel(c);
          const selected = value === c;
          return (
            <button
              key={c}
              type="button"
              role="option"
              aria-selected={selected}
              title={c}
              onClick={() => onChange(c)}
              className={`relative rounded-lg p-0.5 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                selected
                  ? "ring-2 ring-green-500 ring-offset-2 focus-visible:ring-green-500 dark:ring-offset-neutral-950"
                  : "ring-1 ring-neutral-300 dark:ring-neutral-600"
              }`}
            >
              <span
                className="relative block h-9 w-9 rounded-md border border-black/15 sm:h-9 sm:w-9 dark:border-white/25"
                style={{ backgroundColor: hex }}
                aria-hidden
              >
                {selected ? (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <FaCheck
                      className="text-sm text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]"
                      aria-hidden
                    />
                  </span>
                ) : null}
              </span>
            </button>
          );
        })}
      </div>
      {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}

const sizeButtonClass = (selected) =>
  `min-h-[2.75rem] min-w-[2.5rem] rounded-xl px-3 py-2.5 text-sm font-medium border transition touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-black dark:focus-visible:ring-white sm:min-h-[2.75rem] sm:min-w-[2.75rem] sm:rounded-xl sm:py-2.5 ${
    selected
      ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
      : "border-neutral-300 bg-white text-black hover:border-neutral-500 dark:border-neutral-600 dark:bg-neutral-900 dark:text-white dark:hover:border-neutral-400"
  }`;

export function ProductSizeButtons({
  label,
  sizes = [],
  value,
  onChange,
  error,
  align = "md:text-left text-center",
}) {
  if (!sizes.length) return null;

  return (
    <div className="mb-6 sm:mb-8">
      <p
        className={`mb-3 block text-sm font-medium ${align} text-black dark:text-gray-100`}
      >
        {label}
        {value ? (
          <span className="font-normal text-neutral-700 dark:text-neutral-300">
            {": "}
            {value}
          </span>
        ) : null}
      </p>
      <div
        className={`flex flex-wrap gap-2 ${rowJustify(align)}`}
        role="group"
        aria-label={label}
      >
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => onChange(size)}
            className={sizeButtonClass(value === size)}
          >
            {size}
          </button>
        ))}
      </div>

      {error ? <p className="mt-2 text-sm text-red-500">{error}</p> : null}
    </div>
  );
}
