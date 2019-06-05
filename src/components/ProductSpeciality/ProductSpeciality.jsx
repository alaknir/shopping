import React from "react";
import PropTypes from "prop-types";

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

ProductSpeciality.propTpyes = {
  isSale: PropTypes.bool,
  isExclusive: PropTypes.bool
};

ProductSpeciality.defaultProps = {
  isExclusive: false,
  isSale: false
};

export default ProductSpeciality;
