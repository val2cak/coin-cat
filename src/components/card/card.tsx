import { FC, useEffect, useState } from 'react';

import { Coin } from '../../types/coin-types';
import StarButton from '../star-button/star-button';
import {
  getFavoritesFromStorage,
  setFavoritesToStorage,
} from '../../services/storage';

interface Props {
  item: Coin;
}

const Card: FC<Props> = ({ item }) => {
  const { name, small, symbol, data, market_cap_rank, coin_id } = item;

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favoritesFromStorage = getFavoritesFromStorage();
    if (favoritesFromStorage) {
      const favorites = JSON.parse(favoritesFromStorage);
      setFavorite(favorites.includes(coin_id));
    }
  }, [coin_id]);

  const handleFavorite = () => {
    const favoritesFromStorage = getFavoritesFromStorage();
    let favorites: number[] = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    if (favorite) {
      favorites = favorites.filter((id) => id !== coin_id);
    } else {
      favorites.push(coin_id);
    }

    setFavoritesToStorage(favorites);

    setFavorite(!favorite);
  };

  return (
    <div className='rounded-xl border border-light border-opacity-5 bg-primary flex-1'>
      <div className='p-5 flex items-center justify-between h-1/2'>
        <div className='flex items-center gap-3'>
          <img src={small} alt={name} />
          <span className='font-semibold text-base'>{symbol}</span>
          <span className='bg-gray rounded text-xs text-primary px-1.5 py-0.5 uppercase font-semibold'>
            {name}
          </span>
        </div>
        <StarButton
          favorite={favorite}
          size={'text-md'}
          handleOnClick={handleFavorite}
        />
      </div>
      <div className='border border-light border-opacity-5'></div>
      <div className='p-5 flex flex-col items-start justify-between h-1/2'>
        <span className='text-md font-medium'>{data.price}</span>
        <span className='text-base font-medium'>{market_cap_rank}</span>
      </div>
    </div>
  );
};

export default Card;
