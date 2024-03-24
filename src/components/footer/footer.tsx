import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

import locale from '../../localization/locale';
import { Routes } from '../../routes/Routes';
import Logo from '../nav-bar/components/logo';

const Footer = () => {
  const { allRightsReserved, services } = locale.common;

  return (
    <div className='bottom-0 h-52 sm:px-8 px-40 py-16 w-full flex justify-between border-t border-t-light border-opacity-5'>
      <div className='flex flex-col gap-6 tracking-wider'>
        <Logo />
        <span className='text-tertiary'>{allRightsReserved}</span>
      </div>

      <ul className='flex flex-col gap-2'>
        <span className='font-semibold tracking-wider text-tertiary'>
          {services}
        </span>
        {Routes?.find((item) => item.name === 'Dashboard').children?.map(
          (route, index) => (
            <Fragment key={index}>
              <li className='text-base font-normal opacity-70 tracking-wider'>
                <Link to={route.path} className='hover:text-secondary'>
                  {route.name}
                </Link>
              </li>
            </Fragment>
          )
        )}
      </ul>
    </div>
  );
};

export default Footer;
