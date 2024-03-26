import { Outlet } from 'react-router-dom';
import {
  IoHomeSharp as HomeIcon,
  IoStar as FavoritesIcon,
} from 'react-icons/io5';

import { CustomRouteObject } from '../types/general-types';
import HomeContainer from '../features/home/home-container';
import FavoritesContainer from '../features/favorites/favorites-container';
import NotFoundContainer from '../features/not-found/not-found-container';

export let Routes: CustomRouteObject[] = [
  {
    path: '',
    name: 'Dashboard',
    element: <Outlet />,
    children: [
      {
        path: '/',
        name: 'Home',
        icon: HomeIcon,
        element: <HomeContainer />,
      },
      {
        path: '/favorites',
        name: 'Favorites',
        icon: FavoritesIcon,
        element: <FavoritesContainer />,
      },
    ],
  },
  {
    path: '*',
    name: 'Page Not Found',
    element: <NotFoundContainer />,
  },
];
