import { FC, useState } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import {
  IoIosArrowUp as ArrowUpIcon,
  IoIosArrowDown as ArrowDownIcon,
} from 'react-icons/io';

import { Coin } from '../../types/coin-types';
import FavoriteCell from '../favorite-cell/favorite-cell';
import { formatPrice } from '../../utils/format-price';
import Pagination from '../pagination/pagination';
import locale from '../../localization/locale';

interface Props {
  data: Coin[];
}

const Table: FC<Props> = ({ data }) => {
  const {
    sortAsc,
    sortDesc,
    clearSort,
    no,
    name,
    symbol,
    logo,
    marketCapRank,
    price,
  } = locale.common;

  const [sorting, setSorting] = useState<SortingState>([]);

  const columnHelper = createColumnHelper<Coin>();

  const columns = [
    {
      id: 'index',
      header: no,
      cell: (info) => info.row.index + 1,
    },
    {
      id: 'image',
      header: logo,
      cell: (info) => (
        <>
          {info.row.original &&
            (info.row.original.small || info.row.original.thumb) && (
              <img
                src={info.row.original.small ?? info.row.original.thumb}
                alt={info.row.original.name}
                className='w-8 h-8'
              />
            )}
        </>
      ),
    },
    columnHelper.accessor('name', {
      header: name,
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('symbol', {
      header: symbol,
      cell: (info) => info.getValue(),
    }),
    data.some((coin) => coin.data) &&
      columnHelper.accessor('data.price', {
        header: price,
        cell: (info) => formatPrice(info.getValue()),
      }),
    columnHelper.accessor('market_cap_rank', {
      header: marketCapRank,
      cell: (info) => info.getValue(),
    }),
    {
      id: 'favorite',
      header: '',
      cell: (info) => (
        <FavoriteCell item={info.row.original} size={'text-md'} />
      ),
    },
  ].filter(Boolean);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      sorting,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 20,
      },
    },
  });

  return (
    <div className='overflow-x-auto border border-light border-opacity-5 rounded-md'>
      <table className='w-full table-auto'>
        <thead>
          {table.getHeaderGroups()?.map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className='bg-transparent text-light border-b border-b-light border-opacity-5'
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`px-8 py-4 uppercase font-medium text-base text-tertiary text-left ${
                    header.column.getCanSort() && 'hover:cursor-pointer'
                  }`}
                  onClick={header.column.getToggleSortingHandler()}
                  title={
                    header.column.getCanSort()
                      ? header.column.getNextSortingOrder() === 'asc'
                        ? sortAsc
                        : header.column.getNextSortingOrder() === 'desc'
                        ? sortDesc
                        : clearSort
                      : undefined
                  }
                >
                  <div className='flex items-center gap-2'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                    {{
                      asc: <ArrowUpIcon />,
                      desc: <ArrowDownIcon />,
                    }[header.column.getIsSorted() as string] ?? null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.map((row) => (
            <tr
              key={row.id}
              className='bg-transparent border-b border-b-light border-opacity-5'
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className='px-8 py-4 font-normal text-base lining-nums'
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination pagination={table} />
    </div>
  );
};

export default Table;
