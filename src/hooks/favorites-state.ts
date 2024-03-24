import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {
  getFavoritesFromStorage,
  setFavoritesToStorage,
} from '../services/storage';

interface FavoritesState {
  favorites: string[];
}

const favoritesFromStorage = getFavoritesFromStorage();

const initialState: FavoritesState = {
  favorites: favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [],
};

export const favoritesSlice = createSlice({
  name: 'Favorites-State-Slice',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
      setFavoritesToStorage(state.favorites);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
      setFavoritesToStorage(state.favorites);
    },
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
      setFavoritesToStorage(state.favorites);
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default favoritesSlice.reducer;
