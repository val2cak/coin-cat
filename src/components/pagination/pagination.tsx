import { FC } from 'react';
import { Table } from '@tanstack/react-table';
import {
  RxDoubleArrowLeft as FirstPageIcon,
  RxDoubleArrowRight as LastPageIcon,
  RxChevronRight as NextPageIcon,
  RxChevronLeft as PreviousPageIcon,
} from 'react-icons/rx';

import { pageSizes } from '../../constants/page-sizes';
import { Coin } from '../../types/coin-types';

interface Props {
  pagination: Table<Coin>;
}

const Pagination: FC<Props> = ({ pagination }) => {
  return (
    <div className='flex text-base py-4 px-8 w-full justify-between'>
      <div className='flex gap-4'>
        <button
          onClick={() => pagination.firstPage()}
          disabled={!pagination.getCanPreviousPage()}
          className={`${
            pagination.getCanPreviousPage() && 'hover:text-secondary'
          }`}
        >
          <FirstPageIcon />
        </button>
        <button
          onClick={() => pagination.previousPage()}
          disabled={!pagination.getCanPreviousPage()}
          className={`${
            pagination.getCanPreviousPage() && 'hover:text-secondary'
          }`}
        >
          <PreviousPageIcon />
        </button>
        {[...Array(pagination.getPageCount())].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => pagination.setPageIndex(index)}
            className={`px-4 py-1 font-bold ${
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
          <NextPageIcon />
        </button>
        <button
          onClick={() => pagination.lastPage()}
          disabled={!pagination.getCanNextPage()}
          className={`${pagination.getCanNextPage() && 'hover:text-secondary'}`}
        >
          <LastPageIcon />
        </button>
      </div>
      <select
        value={pagination.getState().pagination.pageSize}
        onChange={(e) => {
          pagination.setPageSize(Number(e.target.value));
        }}
        className='px-4 py-2 rounded-md bg-secondary text-base focus:outline-none hover:opacity-70 hover:cursor-pointer'
      >
        {pageSizes.map((pageSize) => (
          <option
            key={pageSize}
            value={pageSize}
            className='bg-secondary hover:opacity-70'
          >
            {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pagination;
