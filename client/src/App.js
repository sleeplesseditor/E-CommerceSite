import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './Redux/User/UserSelectors';
import { checkUserSession } from './Redux/User/UserActions';
import { createStructuredSelector } from 'reselect';
import Header from './Components/Header/Header';
import Spinner from './Components/Spinner/Spinner';
import './App.css';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const ShopPage = lazy(() => import('./Pages/ShopPage/ShopPage'));
const AuthenticationPage = lazy(() => import('./Pages/AuthenticationPage/AuthenticationPage'));
const CheckoutPage = lazy(() => import('./Pages/CheckoutPage/CheckoutPage'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div >
      <Header/>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => 
              currentUser ? (<Redirect to='/' />) : (<AuthenticationPage />)} 
          />
        </Suspense>
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
