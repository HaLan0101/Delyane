import { Route, Switch } from 'react-router-dom';

import React from 'react';

import Error from './components/Error/Error';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/[uuid]/Product';
import Products from './components/Product/Products';
import Register from './components/Register/Register';

import './App.css';

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/painting' component={Products} />
        <Route exact path='/painting/:uuid' component={Product} />
        <Route exact path='/register' component={Register} />
        <Route component={Error} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
