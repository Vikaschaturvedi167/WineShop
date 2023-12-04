import logo from './logo.svg';
import './App.css';
import { AllRoute } from './routing/AllRoute';
import Navbar from './components/Navbar';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className='full'>
    <Navbar />
    <AllRoute />
    <Footer />
    </div>
  );
}

export default App;