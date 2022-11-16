import { useState } from 'react';

const useBasket = () => {
  const initialState = [
    {
      title: '',
      price: null,
    },
  ];

  const [productsBasket, setProductsBasket] = useState(initialState);

  return { productsBasket, setProductsBasket };
};
export default useBasket;
