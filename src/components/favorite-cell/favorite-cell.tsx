import { FC, useEffect, useState } from 'react';

import StarButton from '../star-button/star-button';
import { Coin } from '../../types/coin-types';
import {
  getFavoritesFromStorage,
  setFavoritesToStorage,
} from '../../services/storage';

interface Props {
  item: Coin;
  size: string;
}

const FavoriteCell: FC<Props> = ({ item, size }) => {
  const { coin_id } = item;

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
    <StarButton
      favorite={favorite}
      size={size}
      handleOnClick={handleFavorite}
    />
  );
};

export default FavoriteCell;
