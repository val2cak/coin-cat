import { FC, MouseEventHandler } from 'react';
import {
  IoStar as FullStarIcon,
  IoStarOutline as EmptyStarIcon,
} from 'react-icons/io5';

interface Props {
  favorite: boolean;
  handleOnClick?: MouseEventHandler;
  size: string;
}

const StarButton: FC<Props> = ({ favorite, handleOnClick, size }) => {
  return (
    <button onClick={handleOnClick} type={'button'} className='hover:scale-105'>
      {favorite ? (
        <FullStarIcon className={`${size} text-secondary`} />
      ) : (
        <EmptyStarIcon className={`${size} text-secondary`} />
      )}
    </button>
  );
};

export default StarButton;
