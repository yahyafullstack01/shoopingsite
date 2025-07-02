// utils/favorites.js

export function getFavorites() {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

export function isFavorite(productId) {
  const favorites = getFavorites();
  return favorites.includes(productId);
}

export function toggleFavorite(productId) {
  const favorites = getFavorites();
  const updated = favorites.includes(productId)
    ? favorites.filter(id => id !== productId)
    : [...favorites, productId];

  localStorage.setItem("favorites", JSON.stringify(updated));
  return updated;
}
