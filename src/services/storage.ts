export function getFavoritesFromStorage(): string | null {
  return localStorage.getItem('favorites');
}

export function setFavoritesToStorage(favorites: number[]): void {
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

export function removeFavoritesFromStorage(): void {
  return localStorage.removeItem('favorites');
}
