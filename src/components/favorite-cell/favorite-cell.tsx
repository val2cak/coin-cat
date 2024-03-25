import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import StarButton from '../star-button/star-button';
import { Coin } from '../../types/coin-types';
import { addFavorite, removeFavorite } from '../../hooks/favorites-state';

interface Props {
  item: Coin;
  size: string;
}

const FavoriteCell: FC<Props> = ({ item, size }) => {
  const { id } = item;
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((coin) => coin.id === id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(item));
    }
  };

  return (
    <StarButton
      favorite={isFavorite}
      size={size}
      handleOnClick={handleFavorite}
    />
  );
};

export default FavoriteCell;
