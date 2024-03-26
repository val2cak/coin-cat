import { FC, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  IoChevronForwardOutline as NextIcon,
  IoChevronBack as PreviousIcon,
} from 'react-icons/io5';

import { Coin } from '../../types/coin-types';
import locale from '../../localization/locale';
import Card from '../card/card';

interface Props {
  data: Coin[];
}

const CardsSlider: FC<Props> = ({ data }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const { prev, next } = locale.common;

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  const prevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextCard(),
    onSwipedRight: () => prevCard(),
  });

  return (
    <div className='w-full'>
      <div
        className='w-full overflow-hidden relative flex justify-center items-center py-2'
        {...handlers}
      >
        <div className='flex gap-8 sm:p-0 p-2 sm:w-full'>
          {data?.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`${
                  index === currentCardIndex ? '' : 'hidden'
                } sm:w-full`}
              >
                <Card item={item} />
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex justify-between'>
        <button
          onClick={prevCard}
          className='text-md uppercase font-semibold text-tertiary hover:text-secondary flex items-center'
        >
          <PreviousIcon /> {prev}
        </button>
        <button
          onClick={nextCard}
          className='text-md uppercase font-semibold text-tertiary hover:text-secondary flex items-center'
        >
          {next} <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default CardsSlider;
