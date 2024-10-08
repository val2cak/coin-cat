import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import {
  getFavoritesFromStorage,
  setFavoritesToStorage,
} from '../services/storage';
import { Coin } from '../types/coin-types';

interface FavoritesState {
  favorites: Coin[];
}

const favoritesFromStorage = getFavoritesFromStorage();

const initialState: FavoritesState = {
  favorites: favoritesFromStorage ? JSON.parse(favoritesFromStorage) : [],
};

export const favoritesSlice = createSlice({
  name: 'Favorites-State-Slice',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Coin>) => {
      state.favorites.push(action.payload);
      setFavoritesToStorage(state.favorites);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (coin) => coin.id !== action.payload
      );
      setFavoritesToStorage(state.favorites);
    },
    setFavorites: (state, action: PayloadAction<Coin[]>) => {
      state.favorites = action.payload;
      setFavoritesToStorage(state.favorites);
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;

export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default favoritesSlice.reducer;
