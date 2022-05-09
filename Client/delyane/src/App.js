import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Authentication from './components/Authentication/Authentication';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Favorite from './components/Favorite/Favorite';
import Admin from './components/Admin/Admin/Admin';
import Product from './components/Product/[uuid]/Product';
import Products from './components/Product/Products';
import Register from './components/Register/Register';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketShopping, faUser, faHeart, faChevronRight, faChevronLeft, faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCcPaypal, faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
library.add(faBasketShopping, faUser, faHeart, faCcPaypal, faCcVisa, faCcMastercard, faChevronRight, faChevronLeft, faHeartCirclePlus);

const App = () => {
  return (
    <div className="App">
      <Switch >
        <Route exact path='/' component={Home} />
        <Route exact path='/authentication' component={Authentication} />
        <Route exact path='/favorite' component={Favorite} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/painting' component={Products} />
        <Route exact path='/painting/:uuid' component={Product} />
        <Route exact path='/register' component={Register} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
