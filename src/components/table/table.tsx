import { FC } from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Coin } from '../../types/coin-types';
import FavoriteCell from '../favorite-cell/favorite-cell';
import { formatPrice } from '../../utils/format-price';

interface Props {
  data: Coin[];
}

const Table: FC<Props> = ({ data }) => {
  const columnHelper = createColumnHelper<Coin>();

  const columns = [
    {
      id: 'index',
      header: 'No',
      cell: (info) => info.row.index + 1,
    },
    {
      id: 'image',
      header: 'Logo',
      cell: (info) => (
        <>
          {(info.row.original.small || info.row.original.thumb) && (
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
      header: 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('symbol', {
      header: 'Symbol',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('data.price', {
      header: 'Price',
      cell: (info) => formatPrice(info.getValue()),
    }),
    columnHelper.accessor('market_cap_rank', {
      header: 'Market cap rank',
      cell: (info) => info.getValue(),
    }),
    {
      id: 'favorite',
      header: '',
      cell: (info) => (
        <FavoriteCell item={info.row.original} size={'text-md'} />
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='overflow-x-auto border border-light border-opacity-5 rounded-md'>
      <table className='w-full table-auto'>
        <thead>
          {table.getHeaderGroups()?.map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className='bg-primary text-light border-b border-b-light border-opacity-5'
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className='px-8 py-4 uppercase font-medium text-base text-tertiary text-left'
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows?.map((row) => (
            <tr
              key={row.id}
              className='bg-primary border-b border-b-light border-opacity-5'
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className='px-8 py-4 font-normal text-base'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
