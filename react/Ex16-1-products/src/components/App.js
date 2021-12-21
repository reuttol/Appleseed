import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Products from "./Products";
import Homepage from "./Homepage";
import ProductDetails from "./ProductDetails";
import NotFound404 from "./NotFound404";

import "./app.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" component={ProductDetails} />
          <Route component={NotFound404} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
