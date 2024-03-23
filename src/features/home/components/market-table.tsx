import { useEffect, useState } from 'react';
import debounce from 'lodash/debounce';

import { useLazyGetCoinsQuery } from '../../../hooks/coin-api';
import Table from '../../../components/table/table';
import locale from '../../../localization/locale';

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

  return (
    <div id='market-table' className='flex flex-col gap-8'>
      <div className='uppercase font-bold text-lg'>{tableHeader}</div>
      {!isCoinsDataFetching && coinsData && coinsData.length !== 0 && (
        <Table data={coinsData} />
      )}
    </div>
  );
};

export default MarketTable;
