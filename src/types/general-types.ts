import { IconType } from 'react-icons';
import { NonIndexRouteObject } from 'react-router-dom';

export interface CustomRouteObject extends NonIndexRouteObject {
  name: string;
  icon?: IconType;
  children?: CustomRouteObject[];
}

export interface Navigation {
  id: number;
  text: string;
  link: string;
}
