import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { BASKET, DASHBOARD, LOGIN } from './constants/routes';
import Login from './pages/Login';
import Basket from './pages/Basket';
import Dashboard from './pages/Dashboard';
import UserContext from './context/userContext';
import useAuthListener from './hooks/useAuthListener';
import CartContext from './context/cartContext';
import useBasket from './hooks/useBasket';

const App = () => {
  const { user } = useAuthListener();
  const { productsBasket, setProductsBasket } = useBasket();
  const router = createBrowserRouter([
    {
      path: LOGIN,
      element: <Login />,
    },
    {
      path: DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: BASKET,
      element: <Basket />,
    },
  ]);

  return (
    <CartContext.Provider value={{ productsBasket, setProductsBasket }}>
      <UserContext.Provider value={{ user }}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </CartContext.Provider>
  );
};

export default App;
