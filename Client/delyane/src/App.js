import { Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketShopping,faUser,faHeart,faChevronRight,faChevronLeft,faHeartCirclePlus} from "@fortawesome/free-solid-svg-icons";
import { faCcPaypal,faCcVisa, faCcMastercard } from '@fortawesome/free-brands-svg-icons'
library.add(faBasketShopping,faUser,faHeart,faCcPaypal,faCcVisa, faCcMastercard,faChevronRight,faChevronLeft,faHeartCirclePlus);
const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch >
        <Route exact path='/' component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
