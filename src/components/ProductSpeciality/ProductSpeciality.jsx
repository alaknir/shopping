import React from "react";

const ProductSpeciality = ({ isExclusive, isSale }) => (
  <div className="row product-spl">
    <div className="col-xs-12 product-spl__badge">
      {isSale && <span className="product-spl__badge-sale">Sale</span>}
      {isExclusive && (
        <span className="product-spl__badge-exclusive">Exclusive</span>
      )}
    </div>
  </div>
);

ProductSpeciality.defaultProps = {
  isExclusive: false,
  isSale: false
};

export default ProductSpeciality;
