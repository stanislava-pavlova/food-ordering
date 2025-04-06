import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import AppLayout from './pages/AppLayout.jsx';
import Error from './components/Error.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/menu/Menu.jsx';
import { loader as menuLoader } from './pages/menu/MenuLoader.jsx';
import Cart from './pages/cart/Cart.jsx';
import CreateOrder, { action as createOrderAction } from './pages/order/CreateOrder.jsx';
import Order, { loader as orderLoader } from './pages/order/Order.jsx';
import { action as updateOrderAction } from './pages/order/UpdateOrder.jsx';

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
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
