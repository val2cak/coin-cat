import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { cryptoApiSlice } from '../hooks/crypto-api';

export const store = configureStore({
  reducer: {
    [cryptoApiSlice.reducerPath]: cryptoApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      cryptoApiSlice.middleware
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
