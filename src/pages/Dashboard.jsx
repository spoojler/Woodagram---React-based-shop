import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductsList from '../components/ProductsList';

const Dashboard = () => {
  document.body.classList.add('bg-gray-100');
  return (
    <div>
      <Header />
      <div className="flex flex-col h-screen w-screen">
        <ProductsList />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

