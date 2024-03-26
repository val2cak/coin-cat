import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Table from '../../../components/table/table';
import locale from '../../../localization/locale';
import { selectFavorites } from '../../../hooks/favorites-state';
import NoDataTable from '../../../components/no-data-elements/no-data-table';
import Button from '../../../components/button/button';

const FavoritesTable = () => {
  const { tableHeader } = locale.favorites;
  const favorites = useSelector(selectFavorites);

  const { noDataMessage, findFavoritesButton } = locale.favorites;

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

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
        <NoDataTable>
          <td className='sm:text-md text-lg font-medium text-tertiary'>
            {noDataMessage}
          </td>
          <Button text={findFavoritesButton} handleOnClick={navigateToHome} />
        </NoDataTable>
      )}
    </div>
  );
};

export default FavoritesTable;
