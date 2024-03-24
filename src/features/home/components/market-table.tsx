import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { useLazyGetCoinsQuery } from '../../../hooks/coin-api';
import Table from '../../../components/table/table';
import locale from '../../../localization/locale';
import SearchInput from '../../../components/search-input/search-input';

const MarketTable = () => {
  const { tableHeader } = locale.home;

  const [userInput, setUserInput] = useState<string>('');

  const [getCoins, { data: coinsData, isFetching: isCoinsDataFetching }] =
    useLazyGetCoinsQuery();

  const debouncedGetCoins = debounce(getCoins, 300);

  useEffect(() => {
    debouncedGetCoins(userInput);
    return () => debouncedGetCoins.cancel();
  }, [userInput]);

  const handleSearch = (query) => {
    setUserInput(query);
  };

  return (
    <div id='market-table' className='flex flex-col gap-8'>
      <div className='flex justify-between items-center sm:flex-col sm:items-start gap-4'>
        <div className='uppercase font-bold sm:text-md text-lg'>
          {tableHeader}
        </div>
        <SearchInput onSearch={handleSearch} />
      </div>
      {!isCoinsDataFetching && coinsData && coinsData.length !== 0 && (
        <Table data={coinsData} />
      )}
    </div>
  );
};

export default MarketTable;
