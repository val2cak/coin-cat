import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { coinApiSlice } from '../hooks/coin-api';
import favoritesStateReducer from '../hooks/favorites-state';

export const store = configureStore({
  reducer: {
    [coinApiSlice.reducerPath]: coinApiSlice.reducer,
    favorites: favoritesStateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      coinApiSlice.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
