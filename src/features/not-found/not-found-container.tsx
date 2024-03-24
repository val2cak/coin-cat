import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import locale from '../../localization/locale';
import Logo from '../../components/nav-bar/components/logo';

const NotFoundContainer = () => {
  const { button, subtitle, title } = locale.pageNotFound;

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-8 h-full'>
      <div className='flex flex-col gap-2 items-center'>
        <div className='scale-150 pb-4'>
          <Logo />
        </div>
        <span className='text-xl uppercase font-bold'>{title}</span>
        <span className='text-base font-medium text-tertiary'>{subtitle}</span>
      </div>
      <Button text={button} handleOnClick={navigateToHome} />
    </div>
  );
};

export default NotFoundContainer;
