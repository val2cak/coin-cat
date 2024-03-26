import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetCoinsQuery } from '../../../hooks/coin-api';
import Card from '../../../components/card/card';
import locale from '../../../localization/locale';
import { Coin } from '../../../types/coin-types';
import { selectFavorites } from '../../../hooks/favorites-state';
import LoadingCard from '../../../components/loading-elements/loading-card';
import { placeholderArray } from '../../../constants/placeholder-array';

const RecommendedCards = () => {
  const { recommendedHeader } = locale.favorites;
  const favorites = useSelector(selectFavorites);

  const [recommendedData, setRecommendedData] = useState<Coin[]>([]);

  const { data: coinsData, isLoading: isCoinsDataLoading } =
    useGetCoinsQuery('');

  useEffect(() => {
    if (coinsData) {
      const filteredRecommended = coinsData.filter(
        (coin) => !favorites.some((favorite) => favorite.id === coin.id)
      );
      setRecommendedData(filteredRecommended);
    }
  }, [coinsData, favorites]);

  return (
    <div className='flex flex-col gap-8'>
      <div className='uppercase font-bold sm:text-md text-lg'>
        {recommendedHeader}
      </div>
      {!isCoinsDataLoading && coinsData && coinsData.length !== 0 ? (
        <div className='flex flex-row justify-center gap-8 sm:flex-wrap'>
          {recommendedData?.slice(0, 4)?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className='flex flex-row justify-center gap-8 flex-wrap'>
          {placeholderArray.map((_, index) => (
            <LoadingCard key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecommendedCards;
