import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cryptoApiSlice = createApi({
  reducerPath: 'Crypto-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}/favorites`,
  }),
  tagTypes: ['Favorites-List'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints(builder) {
    return {};
  },
});
