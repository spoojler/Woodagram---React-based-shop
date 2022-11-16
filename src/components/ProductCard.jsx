import { useContext } from 'react';
import CartContext from '../context/cartContext';

const ProductCard = (props) => {
  const { productsBasket, setProductsBasket } = useContext(CartContext);

  const imageStyle = {
    backgroundImage: `url(${props.photo})`,
  };

  const star = (rate) => {
    const stars = [];
    for (let index = 0; index < rate; index++) {
      stars.push(<i className="fa-solid fa-star"></i>);
    }
    return stars;
  };

  const handleAddToBasket = (event) => {
    const newProduct = {
      title: props.title,
      price: props.price,
    };
    const newBasket = productsBasket.concat(newProduct);
    setProductsBasket(newBasket);
  };

  return (
    <div className="flex flex-col items-center h-2/5 sm:h-full w-5/6 xl:w-full mx-auto mt-3 mb-5 bg-white rounded-2xl">
      <div className="w-full h-full flex flex-col items-center">
        <p className="text-xl p-2">Rating {star(props.rating)}</p>
        <div
          className="w-full h-full bg-contain bg-no-repeat bg-center"
          style={imageStyle}
        ></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center xl:w-1/2 bg-white rounded-md p-2 px-4">
        <h1 className="text-center sm:text-left mx-3 text-2xl break-words">
          {props.title}
        </h1>
        <button
          onClick={handleAddToBasket}
          className="flex items-center py-1 mt-1 bg-blue-500 rounded-md text-white hover:bg-blue-200 hover:text-black"
        >
          <i className=" text-4xl ml-2 fa-solid fa-square-plus p-1"></i>
          <h1 className="mx-3 text-3xl">{props.price}$</h1>
        </button>
      </div>
      <p className="p-4 w-5/6 text-lg">{props.description}</p>
    </div>
  );
};
export default ProductCard;
