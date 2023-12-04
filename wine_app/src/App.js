import logo from './logo.svg';
import './App.css';
import { AllRoute } from './routing/AllRoute';
import Navbar from './components/Navbar';
import Footer from './Pages/Footer'
import CartPage from './Pages/CartPage';
// import ShortCart from './Pages/ShortCart';
// import CheckOutPage from './Pages/CheckOutPage';
// import PaymentPage from './Pages/PaymentPage';
// import Delivery from './Pages/Delivery';

function App() {
  return (
    <div>
    <Navbar />
    <AllRoute />
    <Footer />

    {/* <ShortCart/> */}
    {/* <CheckOutPage/> */}
{/* {<PaymentPage/>} */}
    {/* <Delivery/> */}
    </div>
  );
}

export default App;
