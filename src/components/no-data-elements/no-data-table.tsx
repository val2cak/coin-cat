import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const NoDataTable: FC<Props> = ({ children }) => {
  return (
    <div className='overflow-x-auto border border-light border-opacity-10 rounded-md p-12'>
      <table className='w-full table-auto'>
        <tbody>
          <tr className='py-28 bg-transparent flex flex-col items-center justify-center gap-2'>
            {children}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NoDataTable;
