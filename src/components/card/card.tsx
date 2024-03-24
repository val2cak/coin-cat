import { FC } from 'react';

import { Coin } from '../../types/coin-types';
import FavoriteCell from '../favorite-cell/favorite-cell';
import { truncateName } from '../../utils/truncate-name';

interface Props {
  item: Coin;
}

const Card: FC<Props> = ({ item }) => {
  const { name, small, thumb, symbol, data, market_cap_rank } = item;
  const truncatedName = truncateName(name, 7);

  return (
    <div className='rounded-xl border border-light border-opacity-5 bg-transparent flex-1'>
      <div className='p-5 flex items-center justify-between h-1/2'>
        <div className='flex items-center gap-3'>
          <img src={small ?? thumb} alt={name} className='w-12 h-12' />
          <span className='font-semibold text-base'>{symbol}</span>
          <span className='bg-gray rounded text-xs text-primary px-1.5 py-0.5 uppercase font-semibold'>
            {truncatedName}
          </span>
        </div>
        <FavoriteCell item={item} size={'text-md'} />
      </div>
      <div className='border border-light border-opacity-5'></div>
      <div className='p-5 flex flex-col items-start justify-between h-1/2'>
        <span className='text-md font-medium lining-nums'>{data.price}</span>
        <span className='text-base font-medium lining-nums'>
          {market_cap_rank}
        </span>
      </div>
    </div>
  );
};

export default Card;
