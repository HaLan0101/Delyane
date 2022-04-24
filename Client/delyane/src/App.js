import { Route, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketShopping,faUser,faHeart} from "@fortawesome/free-solid-svg-icons";
library.add(faBasketShopping,faUser,faHeart);
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
