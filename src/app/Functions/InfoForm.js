
"use client";
import { useRouter } from "next/navigation";
import React, { useMemo, useState } from "react";
import {
  FaCheck,
  FaChevronDown,
  FaChevronRight,
  FaCommentDots,
  FaGem,
  FaGlobe,
  FaLayerGroup,
  FaRulerCombined,
  FaShoppingCart,
  FaTruck,
  FaTshirt,
  FaUndo,
} from "react-icons/fa";
import { handleContactButtonClick } from "../utils/products";
import { useLanguage } from "./useLanguage";
import SizeChart from "../components/SizeChart/SizeChart";
import {
  ProductColorSwatches,
  ProductSizeButtons,
} from "../components/ProductOptionPickers/ProductOptionPickers";

const cardShell =
  "rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-5";

export default function InfoForm({
  product,
  showDiscount = false,
  onAddToCartClick,
  requireSelection = false,
  cardSections = false,
  gridEmbed = false,
}) {
  const router = useRouter();
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [colorError, setColorError] = useState("");
  const [sizeError, setSizeError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [showSizeChart, setShowSizeChart] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [descriptionExpanded, setDescriptionExpanded] = useState(true);

  const { language, translateList } = useLanguage();
  const menuItems = translateList("Infoform", "header");
  const rawInfoForm = translateList("home", "infoForm");
  const formTranslations =
    typeof rawInfoForm === "object" && rawInfoForm !== null ? rawInfoForm : {};

  const translatedName = product.translations?.[language]?.name || product.name;
  const translatedDescription =
    product.translations?.[language]?.description || product.description;

  const detailLines = useMemo(() => {
    if (!Array.isArray(translatedDescription)) return [];
    return translatedDescription.filter(
      (line) =>
        typeof line === "string" &&
        (/detail/i.test(line) || line.trim().startsWith("·"))
    );
  }, [translatedDescription]);

  const tabDefs = useMemo(
    () => [
      {
        id: "description",
        label: formTranslations.tabDescription || "Description",
      },
      { id: "details", label: formTranslations.tabDetails || "Details" },
      {
        id: "shipping",
        label: formTranslations.tabShipping || "Shipping & Returns",
      },
    ],
    [formTranslations.tabDescription, formTranslations.tabDetails, formTranslations.tabShipping]
  );

  const desktopDescriptionParts = useMemo(() => {
    const lines = Array.isArray(translatedDescription)
      ? translatedDescription.filter((l) => typeof l === "string" && l.trim())
      : [];
    if (!lines.length)
      return { introLines: [], featureLines: [], materialValue: null };

    const fabricIdx = lines.findIndex((l) =>
      /fabric|тканина|material|tissu|ткань|matériau|matériel/i.test(l)
    );
    const materialRaw = fabricIdx >= 0 ? lines[fabricIdx] : null;
    const materialValue = materialRaw
      ? materialRaw.replace(/^[^:：]*[：:]\s*/i, "").trim() || materialRaw.trim()
      : null;

    const contentLines = lines.filter((_, i) => i !== fabricIdx);
    const introLines = contentLines.slice(0, Math.min(2, contentLines.length));
    const featureLines = contentLines
      .slice(introLines.length)
      .filter((l) => !/detail/i.test(String(l)));

    return { introLines, featureLines, materialValue };
  }, [translatedDescription]);

  const specFit = product.fit ?? formTranslations.specFitDefault ?? "Relaxed";
  const specOrigin = formTranslations.madeInValue ?? "Ukraine";

  const handleAddToCartClick = () => {
    let hasError = false;

    if (requireSelection && !selectedColor) {
      setColorError(formTranslations.colorError || "Select a color");
      hasError = true;
    } else {
      setColorError("");
    }

    if (requireSelection && !selectedSize) {
      setSizeError(formTranslations.sizeError || "Select a size");
      hasError = true;
    } else {
      setSizeError("");
    }

    if (quantity <= 0) {
      setQuantityError(formTranslations.quantityError || "Specify quantity");
      hasError = true;
    } else {
      setQuantityError("");
    }

    if (hasError) return;
    const finalPrice = product.discountPrice ?? product.price;
    const oldPrice = product.discountPrice ? product.price : null;

    onAddToCartClick({
      product: {
        ...product,
        price: finalPrice,
        oldPrice,
      },
      selectedColor,
      selectedSize,
      quantity,
    });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    let hasError = false;

    if (requireSelection && !selectedColor) {
      setColorError(formTranslations.colorError || "Select a color");
      hasError = true;
    } else {
      setColorError("");
    }

    if (requireSelection && !selectedSize) {
      setSizeError(formTranslations.sizeError || "Select a size");
      hasError = true;
    } else {
      setSizeError("");
    }

    if (quantity <= 0) {
      setQuantityError(formTranslations.quantityError || "Specify quantity");
      hasError = true;
    } else {
      setQuantityError("");
    }

    if (hasError) return;

    handleContactButtonClick(
      router,
      product,
      selectedColor,
      selectedSize,
      quantity,
      language
    );
  };

  const handleQuantityChange = (value) => {
    const validQuantity = Math.max(1, Number(value));
    setQuantity(validQuantity);
    if (validQuantity > 0) setQuantityError("");
  };

  void showDiscount;

  const priceMain =
    product.oldPrice && product.oldPrice > product.price ? (
      <>
        <span className="text-red-600">{product.price} UAH</span>
        <span className="ml-2 text-sm font-normal text-neutral-400 line-through sm:ml-4 sm:text-base">
          {product.oldPrice} UAH
        </span>
      </>
    ) : (
      <span>{product.price} UAH</span>
    );

  const renderDescriptionLines = () => (
    <>
      {Array.isArray(translatedDescription) &&
        translatedDescription.map((line, index) => {
          if (String(line).toLowerCase().includes("details")) {
            return (
              <p key={index} className="font-medium">
                {line}
              </p>
            );
          }
          if (String(line).trim().startsWith("·")) {
            return (
              <ul key={index} className="ml-6 list-inside list-disc">
                <li>{String(line).replace("·", "").trim()}</li>
              </ul>
            );
          }
          return <p key={index}>{line}</p>;
        })}
    </>
  );

  const purchaseCardClass = [
    cardSections ? cardShell : "",
    gridEmbed ? "mt-4 sm:col-start-2 sm:row-start-1 sm:mt-0" : "",
    gridEmbed && !cardSections ? "px-4 sm:px-6 md:px-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const lowerCardClass = [
    cardSections ? cardShell : "",
    gridEmbed ? "mt-4 pb-8 sm:col-span-2 sm:mt-5" : "",
    gridEmbed && !cardSections ? "px-4 sm:px-6 md:px-0" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const outerClass = `flex flex-col pb-8 ${
    cardSections
      ? "gap-4 px-3 sm:gap-5 sm:px-4 md:px-0"
      : "px-4 sm:px-6 md:px-0"
  }`;

  const parts = (
    <>
      <div className={purchaseCardClass}>
      <div className="mb-3 flex items-start justify-between gap-3 sm:hidden">
        <h1 className="flex-1 text-xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white">
          {translatedName}
        </h1>
        <div className="shrink-0 text-right text-base font-bold text-neutral-900 dark:text-white">
          {priceMain}
        </div>
      </div>

      <h1 className="mb-3 hidden text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-white sm:block md:text-4xl">
        {translatedName}
      </h1>

      <p className="mb-4 text-left text-xs text-neutral-500 sm:mb-5 sm:mt-0 sm:text-sm dark:text-neutral-400">
        <span className="font-medium text-neutral-700 dark:text-neutral-300">
          {menuItems[0]}
        </span>
        {": "}
        {product.category || "—"}{" "}
        <span className="text-neutral-300 dark:text-neutral-600">•</span> SKU:{" "}
        {product.sku}
      </p>

      <div className="mb-6 hidden border-b border-neutral-200 pb-6 sm:block dark:border-neutral-700">
        <div className="text-2xl font-bold text-neutral-900 md:text-3xl dark:text-white">
          {priceMain}
        </div>
      </div>

      <ProductColorSwatches
        label={menuItems[1] || "Color"}
        colors={product.translations?.[language]?.colors || product.colors || []}
        value={selectedColor}
        onChange={(c) => {
          setSelectedColor(c);
          if (c) setColorError("");
        }}
        error={colorError}
        align="text-left"
      />

      <ProductSizeButtons
        label={menuItems[3] || "Size"}
        sizes={product.sizes || []}
        value={selectedSize}
        onChange={(s) => {
          setSelectedSize(s);
          if (s) setSizeError("");
        }}
        error={sizeError}
        align="text-left"
      />

      {showSizeChart && <SizeChart onClose={() => setShowSizeChart(false)} />}

      <div className="mb-6 max-sm:grid max-sm:grid-cols-[minmax(0,1fr)_8.75rem] max-sm:items-end max-sm:gap-3 sm:flex sm:flex-col sm:gap-4">
        <div className="min-w-0 max-sm:col-span-1 sm:w-full">
          <button
            type="button"
            onClick={() => setShowSizeChart(true)}
            className="flex h-11 w-full min-w-0 items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-50 sm:h-12 sm:py-0 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
          >
            <FaRulerCombined
              className="shrink-0 text-base text-neutral-500 dark:text-neutral-400"
              aria-hidden
            />
            <span className="min-w-0 flex-1 truncate text-center">
              {menuItems[6] || "Clothing Size Chart"}
            </span>
            <FaChevronRight className="shrink-0 text-neutral-400" aria-hidden />
          </button>
        </div>

        <div className="w-full shrink-0 max-sm:w-[8.75rem] sm:max-w-xs">
          <label
            htmlFor="quantity"
            className="mb-1.5 block text-left text-xs font-medium text-neutral-900 sm:text-sm dark:text-gray-200"
          >
            {menuItems[4] || "Quantity"}:
          </label>
          <div className="flex h-11 w-full items-stretch overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-800 sm:h-12 sm:bg-neutral-100 dark:sm:bg-neutral-800">
            <button
              type="button"
              onClick={() => handleQuantityChange(quantity - 1)}
              className="w-11 border-r border-neutral-200/90 py-2.5 text-base text-neutral-700 transition hover:bg-neutral-200/50 sm:py-3 dark:border-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-700/50"
            >
              −
            </button>
            <input
              id="quantity"
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(e.target.value)}
              min="1"
              className="w-full min-w-0 border-0 bg-transparent py-2 text-center text-sm outline-none dark:text-white"
            />
            <button
              type="button"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="w-11 border-l border-neutral-200/90 py-2.5 text-base text-neutral-700 transition hover:bg-neutral-200/50 sm:py-3 dark:border-neutral-600 dark:text-gray-200 dark:hover:bg-neutral-700/50"
            >
              +
            </button>
          </div>
        </div>
      </div>
      {quantityError ? (
        <p className="-mt-4 mb-6 text-left text-sm text-red-500">
          {quantityError}
        </p>
      ) : null}

      <div className="mt-2 flex flex-col gap-3">
        <button
          type="button"
          onClick={handleAddToCartClick}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e] py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#16a34a] sm:py-4"
        >
          <FaShoppingCart className="text-base" aria-hidden />
          {formTranslations.addToCart || "ADD TO CART"}
        </button>

        <button
          type="button"
          onClick={handleContactClick}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:py-4 dark:bg-lime-500 dark:text-black dark:hover:bg-lime-600"
        >
          <FaCommentDots className="text-base" aria-hidden />
          {menuItems[5] || "Contact Us"}
        </button>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2 border-t border-neutral-100 pt-6 sm:mt-8 sm:gap-4 dark:border-neutral-800">
        <div className="flex flex-col items-center gap-2 text-center text-[11px] leading-tight text-neutral-600 sm:text-xs dark:text-neutral-400">
          <FaGem
            className="text-xl text-emerald-600 dark:text-emerald-400"
            aria-hidden
          />
          <span className="text-emerald-800 dark:text-emerald-300">
            {formTranslations.trustMaterial}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center text-[11px] leading-tight text-neutral-600 sm:text-xs dark:text-neutral-400">
          <FaUndo
            className="text-xl text-emerald-600 dark:text-emerald-400"
            aria-hidden
          />
          <span className="text-emerald-800 dark:text-emerald-300">
            {formTranslations.trustReturns}
          </span>
        </div>
        <div className="flex flex-col items-center gap-2 text-center text-[11px] leading-tight text-neutral-600 sm:text-xs dark:text-neutral-400">
          <FaTruck
            className="text-xl text-emerald-600 dark:text-emerald-400"
            aria-hidden
          />
          <span className="text-emerald-800 dark:text-emerald-300">
            {formTranslations.trustDelivery}
          </span>
        </div>
      </div>
      </div>

      <div className={lowerCardClass}>
      <div className={cardSections ? "sm:hidden" : "mt-8 sm:hidden"}>
        <div className="flex border-b border-neutral-200 dark:border-neutral-700">
          {tabDefs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 pb-2.5 text-center text-xs font-medium transition ${
                activeTab === tab.id
                  ? "border-b-[3px] border-black text-black dark:border-white dark:text-white"
                  : "text-neutral-500 dark:text-neutral-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="py-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
          {activeTab === "description" && (
            <div className="flex items-start gap-2">
              <div
                className={`min-w-0 flex-1 space-y-3 transition-[max-height] duration-200 ${
                  descriptionExpanded ? "" : "max-h-[5.5rem] overflow-hidden"
                }`}
              >
                {renderDescriptionLines()}
              </div>
              <button
                type="button"
                onClick={() => setDescriptionExpanded((v) => !v)}
                className="shrink-0 p-1 text-neutral-400 transition hover:text-neutral-600 dark:hover:text-neutral-300"
                aria-expanded={descriptionExpanded}
                aria-label={
                  descriptionExpanded
                    ? formTranslations.collapseDescription || "Collapse"
                    : formTranslations.expandDescription || "Expand"
                }
              >
                <FaChevronDown
                  className={`text-base transition-transform duration-200 ${
                    descriptionExpanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
            </div>
          )}
          {activeTab === "details" && (
            <div className="space-y-3">
              {detailLines.length ? (
                detailLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))
              ) : (
                <p className="text-neutral-500">
                  {formTranslations.noExtraDetails}
                </p>
              )}
            </div>
          )}
          {activeTab === "shipping" && (
            <p>{formTranslations.shippingReturnsText}</p>
          )}
        </div>
      </div>

      <div className={`hidden sm:block ${cardSections ? "" : "mt-12"}`}>
        <div className="flex flex-wrap border-b border-neutral-200 dark:border-neutral-700">
          {tabDefs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`-mb-px mr-8 border-b-[3px] pb-3 text-left text-sm font-medium transition last:mr-0 ${
                activeTab === tab.id
                  ? "border-black text-black dark:border-white dark:text-white"
                  : "border-transparent text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className={
            activeTab === "description"
              ? "pt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_min(100%,280px)] lg:gap-10 lg:items-start"
              : "pt-6"
          }
        >
          <div className="min-w-0 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
            {activeTab === "description" && (
              <>
                {desktopDescriptionParts.introLines.length > 0 ||
                desktopDescriptionParts.featureLines.length > 0 ? (
                  <>
                    <div className="space-y-3">
                      {desktopDescriptionParts.introLines.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    {desktopDescriptionParts.featureLines.length > 0 ? (
                      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                        {desktopDescriptionParts.featureLines.map((line, i) => (
                          <div key={i} className="flex gap-2.5 text-sm">
                            <FaCheck
                              className="mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                              aria-hidden
                            />
                            <span>{line}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="space-y-3">{renderDescriptionLines()}</div>
                )}
              </>
            )}
            {activeTab === "details" && (
              <div className="space-y-3">
                {detailLines.length ? (
                  detailLines.map((line, index) => (
                    <p key={index}>{line}</p>
                  ))
                ) : (
                  <p className="text-neutral-500">
                    {formTranslations.noExtraDetails}
                  </p>
                )}
              </div>
            )}
            {activeTab === "shipping" && (
              <p>{formTranslations.shippingReturnsText}</p>
            )}
          </div>

          {activeTab === "description" ? (
            <aside className="mt-8 rounded-xl bg-neutral-100 p-5 dark:bg-neutral-800/90 lg:mt-0">
              <ul className="flex flex-col gap-5">
                <li className="flex gap-3">
                  <FaLayerGroup
                    className="mt-0.5 shrink-0 text-lg text-neutral-500 dark:text-neutral-400"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {formTranslations.specMaterial}
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      {desktopDescriptionParts.materialValue ??
                        formTranslations.specMaterialFallback}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FaTshirt
                    className="mt-0.5 shrink-0 text-lg text-neutral-500 dark:text-neutral-400"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {formTranslations.specFit}
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      {specFit}
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <FaGlobe
                    className="mt-0.5 shrink-0 text-lg text-neutral-500 dark:text-neutral-400"
                    aria-hidden
                  />
                  <div className="min-w-0">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {formTranslations.specMadeIn}
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-white">
                      {specOrigin}
                    </p>
                  </div>
                </li>
              </ul>
            </aside>
          ) : null}
        </div>
      </div>
      </div>
    </>
  );

  return gridEmbed ? parts : <div className={outerClass}>{parts}</div>;
}
