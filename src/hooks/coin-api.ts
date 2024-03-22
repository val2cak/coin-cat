import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Coin, CoinResponse } from '../types/coin-types';

export const coinApiSlice = createApi({
  reducerPath: 'Coin-Api-Slice',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_BASE_URL}`,
  }),
  tagTypes: ['Coins-List'],
  refetchOnMountOrArgChange: true,
  keepUnusedDataFor: 0,
  endpoints(builder) {
    return {
      getCoins: builder.query<Coin[], string>({
        query: (userInput: string) => {
          const queryParams = new URLSearchParams();
          if (userInput && userInput.trim() !== '') {
            queryParams.append('query', encodeURI(userInput));
          }
          const queryString = queryParams.toString();
          const encodedQueryString = queryString ? `?${queryString}` : '';
          return encodedQueryString ? encodedQueryString : '/trending';
        },
        transformResponse: (response: CoinResponse) => {
          const transformedResponse = response.coins.map((coin) => coin.item);
          return transformedResponse;
        },
        providesTags: ['Coins-List'],
      }),
    };
  },
});

export const { useLazyGetCoinsQuery, useGetCoinsQuery } = coinApiSlice;
