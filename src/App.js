import './App.css';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';

function App() {
  return (
    <div className="app">
      <Header/>
      <Cart/>
      <Menu/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
