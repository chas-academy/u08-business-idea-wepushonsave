import {
  createBrowserRouter,
  Link,
  RouterProvider,
  Outlet,
} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}></RouterProvider>
);
