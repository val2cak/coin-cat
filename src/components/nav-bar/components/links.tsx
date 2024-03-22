import { Fragment } from 'react/jsx-runtime';
import { Routes } from '../../../routes/Routes';
import { NavLink } from 'react-router-dom';

const Links = () => {
  return (
    <ul className='flex gap-4'>
      {Routes?.find((item) => item.name === 'Dashboard').children?.map(
        (route, index) => (
          <Fragment key={index}>
            <li className='uppercase text-sm tracking-wider'>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-secondary font-bold'
                    : 'hover:text-secondary font-bold'
                }
              >
                {route.name}
              </NavLink>
            </li>
          </Fragment>
        )
      )}
    </ul>
  );
};

export default Links;
