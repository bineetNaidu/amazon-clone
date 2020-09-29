import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <>
              <Header />
              <Home />
            </>
          )}
        />
        <Route
          exact
          path="/checkout"
          render={() => (
            <>
              <Header />
              <Checkout />
            </>
          )}
        />
        <Route exact path="/login" render={() => <Login />} />
        <Route
          exact
          path="/payment"
          render={() => (
            <>
              <Header />
              <Payment />
            </>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
