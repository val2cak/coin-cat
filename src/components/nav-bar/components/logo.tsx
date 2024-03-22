import locale from '../../../localization/locale';
import catIcon from '../../../assets/icons/cat.svg';

const Logo = () => {
  const { coin, cat } = locale.common;

  return (
    <div className='flex font-bold text-md gap-2'>
      <img src={catIcon} alt={cat} />
      <div>
        <span>{coin}</span>
        <span className='text-secondary'>{cat}</span>
      </div>
    </div>
  );
};

export default Logo;
