import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './pages/AppLayout.jsx';
import Error from './components/Error.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/menu/Menu.jsx';
import { loader as menuLoader } from './pages/menu/MenuLoader.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
