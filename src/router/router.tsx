import RootLayout from '@/layouts/root.layout';
import ErrorPage from '@/pages/ErrorPage';
import HomePage from '@/pages/HomePage';
import LogInPage from '@/pages/LogInPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
          { path: '/', element: <LogInPage /> },
          { path: '/home', element: <HomePage /> },
        ],
      },
      { path: '*', element: <ErrorPage /> },
]);