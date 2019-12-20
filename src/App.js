import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/UserActions';
import { selectCurrentUser } from './Redux/User/UserSelectors';
import { createStructuredSelector } from 'reselect';
import './App.css';

import Header from './Components/Header/Header';
import HomePage from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage';
import AuthenticationPage from './Pages/AuthenticationPage/AuthenticationPage';
import CheckoutPage from './Pages/CheckoutPage/CheckoutPage';

class App extends Component {
  unsubscribeFromAuth = null 

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => 
              this.props.currentUser ? (<Redirect to='/' />) : (<AuthenticationPage />)} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
