import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Header from './components/Header';
import Product from './components/Product';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Login from './components/Login';
import Category from './components/Category';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>
        <Switch>
          <Route path="/" exact component={Category}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/menu" exact component={Menu} />
          <Route path="/menu/:id" component={Product} />
          {/* <Route path="/product" component={Product} /> */}
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={CheckOut} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
