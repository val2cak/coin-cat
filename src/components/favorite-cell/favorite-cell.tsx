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
  const { id } = item;

  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    const favoritesFromStorage = getFavoritesFromStorage();
    if (favoritesFromStorage) {
      const favorites = JSON.parse(favoritesFromStorage);
      setFavorite(favorites.includes(id));
    }
  }, [id]);

  const handleFavorite = () => {
    const favoritesFromStorage = getFavoritesFromStorage();
    let favorites: string[] = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : [];

    if (favorite) {
      favorites = favorites.filter((itemId) => itemId !== id);
    } else {
      favorites.push(id);
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
