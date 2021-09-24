
import store from './redux/reducers/store';
import { Provider } from 'react-redux';

import './App.css';
import Header from './components/header/Header';
import HomeScreen from './screens/home/HomeScreen';
import CartScreen from './screens/cart/CartScreen';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PaymentScreen from './screens/payment/PaymentScreen';
import LoginScreen from './screens/login/LoginScreen';
import RecapScreen from './screens/recap/RecapScreen';

function App() {

  return (
    <Provider store={ store }>
      <Router>
      <Header />
        <Switch>
          <Route exact path="/">
            <HomeScreen title="Mes courses en ligne" />
          </Route>
          <Route path="/cart">
            <CartScreen />
          </Route>
          <Route path="/payment">
            <PaymentScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/recap">
            <RecapScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
