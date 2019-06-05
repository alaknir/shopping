import React from "react";
import PropTypes from "prop-types";

import ProductSpeciality from "../ProductSpeciality";

const Product = ({ imgSrc, productName, isSale, isExclusive, price }) => (
  <div className="product">
    <img src={imgSrc} alt={productName} className="product__product-img" />
    <ProductSpeciality isSale={isSale} isExclusive={isExclusive} />
    <div>
      <span className="product__product-name">{productName}</span>
      <span className="product__product-price">{price}</span>
    </div>
  </div>
);

Product.propTpyes = {
  imgSrc: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  isSale: PropTypes.bool,
  isExclusive: PropTypes.bool,
  price: PropTypes.string.isRequired
};

Product.defaultProps = {
  isSale: false,
  isExclusive: false
};

export default Product;
