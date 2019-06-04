import React from "react";

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

export default Product;
