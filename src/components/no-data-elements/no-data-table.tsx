import { useNavigate } from 'react-router-dom';

import Button from '../button/button';
import locale from '../../localization/locale';

const NoDataTable = () => {
  const { noDataMessage, findFavoritesButton } = locale.favorites;

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='overflow-x-auto border border-light border-opacity-10 rounded-md p-12'>
      <table className='w-full table-auto'>
        <tbody>
          <tr className='py-28 bg-transparent flex flex-col items-center justify-center gap-2'>
            <td className='sm:text-base text-lg font-medium text-tertiary'>
              {noDataMessage}
            </td>
            <Button text={findFavoritesButton} handleOnClick={navigateToHome} />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NoDataTable;
