import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const config = {
  //here paste your firebase config
};

const firebase = initializeApp(config);
const db = getFirestore(firebase);
const productsCollection = collection(db, 'products');
const auth = getAuth(firebase);

//Array of objects to seed firebase database [example]
// const products = [
//   {
//     title: 'Product title',
//     description: 'Description of the product. Put here details.',
//     photoUrl:
//       'https://thumbs.dreamstime.com/b/d-abstract-minimal-geometric-forms-glossy-luxury-podium-your-design-fashion-show-stage-tropical-palm-leaves-shadows-173563250.jpg',
//     price: 860,
//     rating: 5,
//   },
//   {
//     title: 'Product title',
//     description: 'Description of the product. Put here details.',
//     photoUrl:
//       'https://thumbs.dreamstime.com/b/d-abstract-minimal-geometric-forms-glossy-luxury-podium-your-design-fashion-show-stage-tropical-palm-leaves-shadows-173563250.jpg',
//     price: 299,
//     rating: 4,
//   },
//   {
//     title: 'Product title',
//     description: 'Description of the product. Put here details.',
//     photoUrl:
//       'https://thumbs.dreamstime.com/b/d-abstract-minimal-geometric-forms-glossy-luxury-podium-your-design-fashion-show-stage-tropical-palm-leaves-shadows-173563250.jpg',
//     price: 670,
//     rating: 5,
//   },
//   {
//     title: 'Product title',
//     description: 'Description of the product. Put here details.',
//     photoUrl:
//       'https://thumbs.dreamstime.com/b/d-abstract-minimal-geometric-forms-glossy-luxury-podium-your-design-fashion-show-stage-tropical-palm-leaves-shadows-173563250.jpg',
//     price: 210,
//     rating: 1,
//   },
//   {
//     title: 'Product title',
//     description: 'Description of the product. Put here details.',
//     photoUrl:
//       'https://thumbs.dreamstime.com/b/d-abstract-minimal-geometric-forms-glossy-luxury-podium-your-design-fashion-show-stage-tropical-palm-leaves-shadows-173563250.jpg',
//     price: 658,
//     rating: 3,
//   },
// ];

//This function seed database, !remember to uncomment it just for a few seconds.
// products.forEach((product) => {
//   addDoc(productsCollection, product)
//     .then(() => {})
//     .catch((error) => console.log(error));
// });

export { firebase, productsCollection, db, auth };
