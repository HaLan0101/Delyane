import { Route, Switch } from 'react-router-dom';

import React from 'react';

import Error from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/[id]/Product';
import Products from './components/Product/Products';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/painting' component={Products} />
        <Route exact path='/painting/:id' component={Product} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
