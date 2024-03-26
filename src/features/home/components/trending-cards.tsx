import { useMediaQuery } from 'react-responsive';

import { useGetCoinsQuery } from '../../../hooks/coin-api';
import Card from '../../../components/card/card';
import LoadingCard from '../../../components/loading-elements/loading-card';
import { placeholderArray } from '../../../constants/placeholder-array';
import CardsSlider from '../../../components/cards-slider/cards-slider';

const TrendingCards = () => {
  const { data: coinsData, isLoading: isCoinsDataLoading } =
    useGetCoinsQuery('');

  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <>
      {!isCoinsDataLoading && coinsData && coinsData.length !== 0 ? (
        <div className='flex flex-row justify-center gap-8 flex-wrap sm:flex-nowrap overflow-x-auto overflow-y-hidden'>
          {isSmallScreen ? (
            <CardsSlider data={coinsData?.slice(0, 4)} />
          ) : (
            coinsData
              ?.slice(0, 4)
              ?.map((item, index) => <Card item={item} key={index} />)
          )}
        </div>
      ) : (
        <div className='flex flex-row justify-center gap-8 flex-wrap'>
          {isSmallScreen ? (
            <LoadingCard />
          ) : (
            placeholderArray.map((_, index) => <LoadingCard key={index} />)
          )}
        </div>
      )}
    </>
  );
};

export default TrendingCards;
