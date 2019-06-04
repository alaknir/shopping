import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const Product = ({ products, match }) => {
  if (!products || !products.length) {
    return <Redirect to="/products" />;
  }

  const product = products.filter(product => match.params.id === product.id);
  const {
    isExclusive,
    isSale,
    price,
    productImage,
    productName,
    size
  } = product[0];
  return (
    <div>
      <img src={`../assets/products/${productImage}`} alt={productName} />
      <div>{isSale}</div>
      <div>{isExclusive}</div>
      <div>
        <span>{productName}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

export default connect(mapStateToProps)(withRouter(Product));
