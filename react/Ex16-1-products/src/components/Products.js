import React from "react";
import { store } from "../store";
import { Link } from "react-router-dom";

import "./app.css";

class Products extends React.Component {
  state = { data: [] };

  componentDidMount() {
    this.setState({ data: store });
  }

  render() {
    return (
      <div className="products-container">
        {this.state.data.map((product) => (
          <Link
            // to={{pathname: `products/${product.id}`, query: {product}}}
            to={`products/${product.id}`}
            key={product.id}
          >
            {product.title}
          </Link>
        ))}
      </div>
    );
  }
}

export default Products;
