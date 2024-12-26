import React from 'react';

export default function SortMenu({
  sortOrder,
  setSortOrder,
  isSortMenuOpen,
  toggleSortMenu,
}) {
  return (
    <div className="relative inline-block text-left ml-auto">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-gray-800 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600"
        onClick={toggleSortMenu}
      >
        Sort by:{' '}
        {sortOrder === 'recommended'
          ? 'Recommended'
          : sortOrder === 'priceAsc'
          ? 'Price: Low to High'
          : 'Price: High to Low'}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
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
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => setSortOrder('recommended')}
            >
              Recommended
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => setSortOrder('priceAsc')}
            >
              Price: Low to High
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-700"
              role="menuitem"
              tabIndex="-1"
              onClick={() => setSortOrder('priceDesc')}
            >
              Price: High to Low
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
