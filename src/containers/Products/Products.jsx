import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Products = ({ products }) => (
  <div>
    {products.map(
      ({ id, isExclusive, isSale, price, productImage, productName, size }) => (
        <Link key={id} to={`product/${id}`}>
          <img src={`assets/products/${productImage}`} alt={productName} />
          <div>{isSale}</div>
          <div>{isExclusive}</div>
          <div>
            <span>{productName}</span>
            <span>{price}</span>
          </div>
        </Link>
      )
    )}
  </div>
);

Products.propTypes = {
  products: PropTypes.shape([])
};

Products.defaultProps = {
  products: []
};

const maptStateToProps = state => {
  console.log(state);
  return {
    products: state.products.data
  };
};

export default connect(maptStateToProps)(Products);
