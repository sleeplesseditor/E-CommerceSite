import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import AuthenticationPage from './Pages/AuthenticationPage/AuthenticationPage';

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
