import Home from '../views/pages/home';
import Series from '../views/pages/series';
import Movies from '../views/pages/movies';
import { AppRoutes } from './appRoutes';
import AuthLayout from '../views/pages/layout';

export const publicRoutes = [
  {
    key: 'Home',
    exact: true,
    path: AppRoutes.HOME,
    component: Home,
    layout: AuthLayout,
  },
  {
    key: 'Series',
    exact: true,
    path: AppRoutes.SERIES,
    component: Series,
    layout: AuthLayout,
  },
  {
    key: 'Movies',
    exact: true,
    path: AppRoutes.MOVIES,
    component: Movies,
    layout: AuthLayout,
  },
];
