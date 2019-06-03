import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Products from "./layouts/Products";
import Product from "./layouts/Product";
import "./App.css";

const App = () => (
  <div className="App">
    <header className="">Shopping</header>
    <div className="container">
      <Router>
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/product/:id" component={Product} />
          <Redirect from="/" to="/products" />
        </Switch>
      </Router>
    </div>
  </div>
);

export default App;
