import { Fragment } from 'react/jsx-runtime';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';

import { Routes } from '../../../routes/Routes';

const Links = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <ul className='flex sm:gap-6 gap-4'>
      {Routes?.find((item) => item.name === 'Dashboard').children?.map(
        (route, index) => (
          <Fragment key={index}>
            <li className='uppercase text-base tracking-wider'>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary font-bold'
                    : 'hover:text-secondary font-bold'
                }
              >
                {isSmallScreen ? (
                  <route.icon className='text-md' title={route.name} />
                ) : (
                  route.name
                )}
              </NavLink>
            </li>
          </Fragment>
        )
      )}
    </ul>
  );
};

export default Links;
