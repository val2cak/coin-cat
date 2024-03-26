import Button from '../../../components/button/button';
import locale from '../../../localization/locale';

const Header = () => {
  const { title, subtitle, button } = locale.home;

  const scrollToMarketTable = () => {
    const marketTableElement = document.getElementById('market-table');
    if (marketTableElement) {
      marketTableElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='flex flex-col justify-center items-center gap-8 sm:pt-16 pt-24'>
      <div className='flex flex-col gap-2 items-center'>
        <span className='sm:text-lg text-2xl 2xl:text-3xl uppercase font-bold'>
          {title}
        </span>
        <span className='text-base 2xl:text-md font-medium text-tertiary'>
          {subtitle}
        </span>
      </div>
      <Button text={button} handleOnClick={scrollToMarketTable} />
    </div>
  );
};

export default Header;
