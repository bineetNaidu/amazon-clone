import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/checkout" render={() => <Checkout />} />
      </Switch>
    </div>
  );
}

export default App;
