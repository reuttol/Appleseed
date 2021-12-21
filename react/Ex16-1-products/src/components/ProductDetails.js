import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { store } from "../store";

const ProductDetails = (props) => {
      let { id } = useParams();
      const product = store[id-1];
    return (
      <div className="card">
        <img src={`${product.imageUrl}`} alt=""/>
        <p>{product.title}</p>
        <p>{`Price: ${product.price}`}</p>
        <p>{`Size: ${product.size}`}</p>
        
        {/* <img src={`${props.location.query.product.imageUrl}`} alt=""/>
        <p>{props.location.query.product.title}</p>
        <p>{`Price: ${props.location.query.product.price}`}</p>
        <p>{`Size: ${props.location.query.product.size}`}</p> */}
        {console.log(props.history)}
        <button onClick={props.history.goBack}>Go Back</button>
      </div>
    );
}

export default ProductDetails;
