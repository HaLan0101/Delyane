import { Route, Switch } from 'react-router-dom';

import Footer from './components/Footer/footer';
import Header from './components/Header/header';
import Home from './components/Home/home';

import './App.css';

function App() {
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
