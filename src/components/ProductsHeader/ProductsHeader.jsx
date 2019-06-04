import React from "react";
import PropTypes from "prop-types";

const ProductsHeader = ({ heading, children }) => (
  <div className="row product-header">
    <div className="col-xs-8 product-header__heading ">{heading}</div>
    <div className="col-xs-4">{children}</div>
  </div>
);

ProductsHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.element
};

ProductsHeader.defaultProps = {
  children: null
};

export default ProductsHeader;
