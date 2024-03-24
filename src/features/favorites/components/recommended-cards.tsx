import { useEffect, useState } from 'react';

import { useGetCoinsQuery } from '../../../hooks/coin-api';
import Card from '../../../components/card/card';
import locale from '../../../localization/locale';
import { Coin } from '../../../types/coin-types';
import { getFavoritesFromStorage } from '../../../services/storage';

const RecommendedCards = () => {
  const { recommendedHeader } = locale.favorites;
  const [recommendedData, setRecommendedData] = useState<Coin[]>([]);

  const { data: coinsData, isLoading: isCoinsDataLoading } =
    useGetCoinsQuery('');

  useEffect(() => {
    const favoritesFromStorage = getFavoritesFromStorage();
    if (favoritesFromStorage) {
      const favorites = JSON.parse(favoritesFromStorage);
      setRecommendedData(
        coinsData?.filter((coin) => !favorites.includes(coin.id))
      );
    }
  }, [coinsData]);

  return (
    <div className='flex flex-col gap-8'>
      <div className='uppercase font-bold sm:text-md text-lg'>
        {recommendedHeader}
      </div>
      {!isCoinsDataLoading && (
        <div className='flex flex-row justify-center gap-8 sm:flex-wrap'>
          {recommendedData?.slice(0, 4)?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedCards;
