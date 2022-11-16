import { useNavigate } from 'react-router-dom';
import { BASKET } from '../constants/routes';

const Header = () => {
  const navigate = useNavigate();
  const handleBasketButton = (event) => {
    event.preventDefault();
    navigate(BASKET);
  };

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
        <i className="fa-solid fa-basket-shopping text-4xl p-3 pr-5 text-blue-700 hover:text-blue-400"></i>
      </button>
    </div>
  );
};

export default Header;
