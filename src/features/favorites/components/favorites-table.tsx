import { useSelector } from 'react-redux';

import Table from '../../../components/table/table';
import locale from '../../../localization/locale';
import { selectFavorites } from '../../../hooks/favorites-state';
import LoadingTable from '../../../components/loading-elements/loading-table';

const FavoritesTable = () => {
  const { tableHeader } = locale.favorites;
  const favorites = useSelector(selectFavorites);

  return (
    <div className='flex flex-col gap-8 pt-8'>
      <div className='flex justify-between items-center sm:flex-col sm:items-start gap-4'>
        <div className='uppercase font-bold sm:text-md text-lg'>
          {tableHeader}
        </div>
      </div>
      {favorites && favorites.length !== 0 ? (
        <Table data={favorites} />
      ) : (
        <LoadingTable />
      )}
    </div>
  );
};

export default FavoritesTable;
