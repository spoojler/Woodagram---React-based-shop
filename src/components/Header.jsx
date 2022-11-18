import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASKET } from '../constants/routes';
import BasketContext from '../context/BasketContext';

const Header = () => {
  const navigate = useNavigate();
  const { productsBasket } = useContext(BasketContext);
  const handleBasketButton = (event) => {
    event.preventDefault();
    navigate(BASKET);
  };
  const basketCount = productsBasket.length - 1;

  return (
    <div className="sticky top-0 flex justify-end pr-3 pt-2 bg-white border-b-2 border-gray-300">
      <img
        src="/favicon.png"
        className="w-14 h-14 m-1 ml-4 pb-1"
        alt="logo"
      ></img>
      <div className="flex justify-center w-full items-center">
        <h1 className="font-['Instagram'] text-3xl md:text-4xl px-3 ml-1">
          Woodagram
        </h1>
      </div>
      <button onClick={handleBasketButton}>
        <i className="flex fa-solid fa-basket-shopping text-4xl pr-2 text-blue-700 hover:text-blue-400">
          <div className="pl-1">{basketCount ? basketCount : ''}</div>
        </i>
      </button>
    </div>
  );
};

export default Header;
