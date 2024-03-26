import { FC } from 'react';
import { Table } from '@tanstack/react-table';
import {
  RxDoubleArrowLeft as FirstPageIcon,
  RxDoubleArrowRight as LastPageIcon,
  RxChevronRight as NextPageIcon,
  RxChevronLeft as PreviousPageIcon,
} from 'react-icons/rx';

import { Coin } from '../../types/coin-types';

interface Props {
  pagination: Table<Coin>;
}

const Pagination: FC<Props> = ({ pagination }) => {
  return (
    <div className='flex text-base py-4 px-8 w-full'>
      <div className='flex gap-4'>
        <button
          onClick={() => pagination.firstPage()}
          disabled={!pagination.getCanPreviousPage()}
          className={`${
            pagination.getCanPreviousPage() && 'hover:text-secondary'
          }`}
        >
          <FirstPageIcon className='text-lg' />
        </button>
        <button
          onClick={() => pagination.previousPage()}
          disabled={!pagination.getCanPreviousPage()}
          className={`${
            pagination.getCanPreviousPage() && 'hover:text-secondary'
          }`}
        >
          <PreviousPageIcon className='text-lg' />
        </button>
        {[...Array(pagination.getPageCount())].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => pagination.setPageIndex(index)}
            className={`px-4 py-1 lining-nums font-bold ${
              index === pagination.getState().pagination.pageIndex
                ? 'bg-secondary text-light rounded-full'
                : 'hover:text-secondary'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => pagination.nextPage()}
          disabled={!pagination.getCanNextPage()}
          className={`${pagination.getCanNextPage() && 'hover:text-secondary'}`}
        >
          <NextPageIcon className='text-lg' />
        </button>
        <button
          onClick={() => pagination.lastPage()}
          disabled={!pagination.getCanNextPage()}
          className={`${pagination.getCanNextPage() && 'hover:text-secondary'}`}
        >
          <LastPageIcon className='text-lg' />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
