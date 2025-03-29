import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './pages/AppLayout.jsx';
import Error from './components/Error.jsx';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <></>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
