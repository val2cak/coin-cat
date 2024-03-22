import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce'; // Import debounce function

import { useLazyGetCoinsQuery } from '../../../hooks/coin-api';
import Table from '../../../components/table/table';

const MarketTable = () => {
  const [userInput, setUserInput] = useState<string>('');

  const [getCoins, { data: coinsData, isFetching: isCoinsDataFetching }] =
    useLazyGetCoinsQuery();

  const debouncedGetCoins = debounce(getCoins, 300);

  useEffect(() => {
    debouncedGetCoins(userInput);

    return () => debouncedGetCoins.cancel();
  }, [userInput]);

  return (
    <div id='market-table'>
      {!isCoinsDataFetching && coinsData && coinsData.length !== 0 && (
        <Table data={coinsData} />
      )}
    </div>
  );
};

export default MarketTable;
