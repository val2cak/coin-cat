import { useSelector } from 'react-redux';

import Table from '../../../components/table/table';
import locale from '../../../localization/locale';
import { selectFavorites } from '../../../hooks/favorites-state';
import NoDataTable from '../../../components/no-data-elements/no-data-table';

const FavoritesTable = () => {
  const { tableHeader } = locale.favorites;
  const favorites = useSelector(selectFavorites);

  return (
    <div className='flex flex-col sm:gap-4 gap-8 sm:pt-4 pt-8'>
      <div className='flex justify-between items-center sm:flex-col sm:items-start gap-4'>
        <div className='uppercase font-bold sm:text-lg text-xl'>
          {tableHeader}
        </div>
      </div>
      {favorites && favorites.length !== 0 ? (
        <Table data={favorites} />
      ) : (
        <NoDataTable />
      )}
    </div>
  );
};

export default FavoritesTable;
