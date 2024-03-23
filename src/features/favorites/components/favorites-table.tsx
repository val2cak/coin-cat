import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { useLazyGetCoinsQuery } from '../../../hooks/coin-api';
import Table from '../../../components/table/table';
import locale from '../../../localization/locale';
import { getFavoritesFromStorage } from '../../../services/storage';
import { Coin } from '../../../types/coin-types';

const FavoritesTable = () => {
  const { tableHeader } = locale.favorites;

  const [userInput, setUserInput] = useState<string>('');
  const [favoritesData, setFavoritesData] = useState<Coin[]>([]);

  const [getCoins, { data: coinsData, isFetching: isCoinsDataFetching }] =
    useLazyGetCoinsQuery();

  const debouncedGetCoins = debounce(getCoins, 300);

  useEffect(() => {
    debouncedGetCoins(userInput);

    return () => debouncedGetCoins.cancel();
  }, [userInput]);

  useEffect(() => {
    const favoritesFromStorage = getFavoritesFromStorage();
    if (favoritesFromStorage) {
      const favorites = JSON.parse(favoritesFromStorage);
      setFavoritesData(
        coinsData?.filter((coin) => favorites.includes(coin.coin_id))
      );
    }
  }, [coinsData]);

  return (
    <div id='market-table' className='flex flex-col gap-8 pt-8'>
      <div className='uppercase font-bold text-lg'>{tableHeader}</div>
      {!isCoinsDataFetching && favoritesData && favoritesData.length !== 0 && (
        <Table data={favoritesData} />
      )}
    </div>
  );
};

export default FavoritesTable;
