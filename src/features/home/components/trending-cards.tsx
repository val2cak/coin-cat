import { useGetCoinsQuery } from '../../../hooks/coin-api';
import Card from '../../../components/card/card';
import LoadingCard from '../../../components/loading-elements/loading-card';

const TrendingCards = () => {
  const { data: coinsData, isLoading: isCoinsDataLoading } =
    useGetCoinsQuery('');

  const placeholderArray = [1, 2, 3, 4];

  return (
    <>
      {!isCoinsDataLoading && coinsData && coinsData.length !== 0 ? (
        <div className='flex flex-row justify-center gap-8 flex-wrap'>
          {coinsData?.slice(0, 4)?.map((item, index) => (
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
    </>
  );
};

export default TrendingCards;
