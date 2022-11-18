import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BASKET, DASHBOARD, LOGIN } from './constants/routes';
import Login from './pages/Login';
import Basket from './pages/Basket';
import Dashboard from './pages/Dashboard';
import UserContext from './context/UserContext';
import useAuthListener from './hooks/useAuthListener';
import BasketContext from './context/BasketContext';
import useBasket from './hooks/useBasket';
import useLoader from './hooks/useLoader';
import LoaderContext from './context/LoaderContext';

const App = () => {
  const { user } = useAuthListener();
  const { productsBasket, setProductsBasket } = useBasket();
  const { showLoader, setShowLoader } = useLoader();
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
    <UserContext.Provider value={{ user }}>
      <LoaderContext.Provider value={{ showLoader, setShowLoader }}>
        <BasketContext.Provider value={{ productsBasket, setProductsBasket }}>
          <RouterProvider router={router} />
        </BasketContext.Provider>
      </LoaderContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
