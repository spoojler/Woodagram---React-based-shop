import { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CartContext from '../context/cartContext';

const Basket = () => {
  const { productsBasket } = useContext(CartContext);

  const productsList = productsBasket.map((product, index) => {
    return (
      <div className="flex justify-between" key={index + 1}>
        <h1 className="text-lg mb-2">{product.title}</h1>
        <h1 className="text-lg">{product.price}</h1>
      </div>
    );
  });
  let newPrice = 0;
  const finalPrice = productsBasket.map((product) => {
    newPrice += product.price;
    return;
  });
  return (
    <div className="">
      <Header />
      <div className="flex flex-col w-4/5 mt-4 bg-white h-4/5 mx-auto rounded-xl p-3">
        <div className="border-b-2 border-gray-500">
          <h1 className="text-2xl">Shopping Cart</h1>
        </div>
        <div>{productsList}</div>
        <div className="text-2xl border-t-2 border-gray-500 self-end text-blue-700">
          {newPrice}$
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basket;
