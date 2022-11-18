import { useState, useEffect} from 'react';
import { getDocs } from 'firebase/firestore';
import { productsCollection } from '../firebaseData';
import ProductCard from './ProductCard';

const ProductsList = () => {
  const [productSnapshots, setProductSnapshots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      getDocs(productsCollection).then((snapshot) => {
        const products = snapshot.docs;
        setProductSnapshots(products);
      });
    }
    fetchData();
  }, []);

  const productsFinalList = productSnapshots?.map((product, index) => {
    const productDetail = product.data();
    return (
      <ProductCard
        key={index + 1}
        title={productDetail.title}
        photo={productDetail.photoUrl}
        price={productDetail.price}
        description={productDetail.description}
        rating={productDetail.rating}
      />
    );
  });
  return (
    <div className="2xl:grid 2xl:grid-cols-3 2xl:p-8 2xl:gap-8 2xl:grid-rows-2 2xl:h-full">
      {productsFinalList}
      <div className="h-16"></div>
    </div>
  );
};

export default ProductsList;
