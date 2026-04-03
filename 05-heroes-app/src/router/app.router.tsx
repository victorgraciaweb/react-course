import { lazy } from 'react';
import { createHashRouter, Navigate } from 'react-router';

import { HeroesLayout } from '@/heroes/layouts/HeroesLayout';
import { AdminLayout } from '@/admin/layouts/AdminLayout';

import { HomePage } from '@/heroes/pages/home/HomePage';
import { HeroPage } from '@/heroes/pages/hero/HeroPage';
import { SearchPage } from '@/heroes/pages/search/SearchPage';
import type { JSX } from 'react/jsx-runtime';

const AdminPage = lazy(() => import('@/admin/pages/AdminPage'));

//export const appRouter = createBrowserRouter([
export const appRouter = createHashRouter([
  {
    path: '/',
    element: <HeroesLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'heroes/:idSlug',
        element: <HeroPage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: '*',
        element: <Navigate to="/" />,
      },
    ],
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
function createHashRouterç(
  arg0: {
    path: string;
    element: JSX.Element;
    children: (
      | { index: boolean; element: JSX.Element }
      | { path: string; element: JSX.Element }
    )[];
  }[],
) {
  throw new Error('Function not implemented.');
}
