import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';
import { useSelector } from 'react-redux';

import { useLazyGetCoinsQuery } from '../../../hooks/coin-api';
import Table from '../../../components/table/table';
import locale from '../../../localization/locale';
import SearchInput from '../../../components/search-input/search-input';
import { Coin } from '../../../types/coin-types';
import { selectFavorites } from '../../../hooks/favorites-state';

const FavoritesTable = () => {
  const { tableHeader } = locale.favorites;
  const favorites = useSelector(selectFavorites);

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
    if (coinsData) {
      const filteredFavorites = coinsData.filter((coin) =>
        favorites.includes(coin.id)
      );
      setFavoritesData(filteredFavorites);
    }
  }, [coinsData, favorites]);

  const handleSearch = (query) => {
    setUserInput(query);
  };

  return (
    <div id='market-table' className='flex flex-col gap-8 pt-8'>
      <div className='flex justify-between items-center sm:flex-col sm:items-start gap-4'>
        <div className='uppercase font-bold sm:text-md text-lg'>
          {tableHeader}
        </div>
        <SearchInput onSearch={handleSearch} />
      </div>
      {!isCoinsDataFetching && favoritesData && favoritesData.length !== 0 && (
        <Table data={favoritesData} />
      )}
    </div>
  );
};

export default FavoritesTable;
