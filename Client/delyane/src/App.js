import { Route, Switch } from 'react-router-dom';

import React from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import './App.css';

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
