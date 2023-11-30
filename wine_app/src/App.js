import logo from './logo.svg';
import './App.css';
import { AllRoute } from './routing/AllRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
    <Navbar />
    <AllRoute />
    </div>
  );
}

export default App;
