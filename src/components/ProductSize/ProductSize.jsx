import React from "react";
import PropTypes from "prop-types";

const CustomRadio = ({ productId, size }) => (
  <label for={`${productId}_${size}`}>
    {size}
    <input name={productId} id={`${productId}_${size}`} type="radio" />
  </label>
);

CustomRadio.propTypes = {
  productId: PropTypes.string.isRequired,
  sizeList: PropTypes.string.isRequired
};

const ProductSize = ({ productId, sizeList }) => [
  sizeList.map(size => <CustomRadio productId={productId} size={size} />)
];

ProductSize.propTypes = {
  productId: PropTypes.string.isRequired,
  sizeList: PropTypes.shape([])
};

ProductSize.defaultProps = {
  sizeList: []
};

export default ProductSize;
