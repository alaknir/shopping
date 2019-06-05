import React from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Product from "../../components/Product";
import ProductSize from "../../components/ProductSize";
import ProductsHeader from "../../components/ProductsHeader";

const ProductContainer = ({ products, match }) => {
  if (!products || !products.length) {
    return <Redirect to="/products" />;
  }

  const product = products.filter(product => match.params.id === product.id);
  const {
    id,
    isExclusive,
    isSale,
    price,
    productImage,
    productName,
    size
  } = product[0];
  return (
    <div className="row col-sm-4 product-container">
      <ProductsHeader heading={productName} />
      <Product
        {...{
          id,
          isExclusive,
          isSale,
          price,
          productName,
          size
        }}
        imgSrc={`../assets/products/${productImage}`}
      />
      <div className="clearfix" />
      <div>
        <ProductSize productId={id} sizeList={size} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.data
});

ProductContainer.propTypes = {
  products: PropTypes.shape([]),
  match: PropTypes.shape({}).isRequired
};

ProductContainer.defaultProps = {
  products: []
};
export default connect(mapStateToProps)(withRouter(ProductContainer));
