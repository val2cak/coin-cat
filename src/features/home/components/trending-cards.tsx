import { useGetCoinsQuery } from '../../../hooks/coin-api';
import Card from '../../../components/card/card';

const TrendingCards = () => {
  const { data: coinsData, isLoading: isCoinsDataLoading } =
    useGetCoinsQuery('');

  return (
    <>
      {!isCoinsDataLoading && (
        <div className='flex flex-row justify-center gap-8 flex-wrap'>
          {coinsData?.slice(0, 4)?.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default TrendingCards;
