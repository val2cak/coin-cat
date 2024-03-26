import { Link } from 'react-router-dom';

import locale from '../../../localization/locale';
import catIcon from '../../../assets/icons/cat.svg';

const Logo = () => {
  const { coin, cat } = locale.common;

  return (
    <Link
      to={'/'}
      className='flex font-bold text-lg gap-2 items-center tracking-wider'
    >
      <img src={catIcon} alt={cat} className='w-6 h-6' />
      <div>
        <span>{coin}</span>
        <span className='text-secondary'>{cat}</span>
      </div>
    </Link>
  );
};

export default Logo;
