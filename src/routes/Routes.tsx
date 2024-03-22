import { Outlet } from 'react-router-dom';

import { CustomRouteObject } from '../types/general-types';
import HomeContainer from '../features/home/home-container';
import FavoritesContainer from '../features/favorites/favorites-container';
import NotFoundContainer from '../features/not-found/not-found-container';

export let Routes: CustomRouteObject[] = [
  {
    path: '/',
    name: 'Dashboard',
    element: <Outlet />,
    children: [
      {
        path: '',
        name: 'Home',
        element: <HomeContainer />,
      },
      {
        path: 'favorites',
        name: 'Favorites',
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
