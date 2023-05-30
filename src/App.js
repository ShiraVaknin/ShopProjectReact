import logo from './logo.svg';
import './App.css';
import Router from './Components/Router';
import CartProvider from './Components/CartContex';

function App() {
  return <CartProvider><Router/></CartProvider>
}
export default App;
