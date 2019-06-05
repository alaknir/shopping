import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Product from "../../components/Product";
import ProductsHeader from "../../components/ProductsHeader";

const getMaxSizeList = products => {
  const totalSizeList = products.reduce((total, current) => {
    return total.concat(current.size);
  }, []);
  const uniqueSizeList = new Set(totalSizeList);
  return uniqueSizeList;
};

const Products = ({ products, sizeList }) => {
  const [data, setData] = useState(products);

  const onFilterChange = e => {
    const filteredData = products.filter(product =>
      product.size.includes(e.target.value)
    );
    setData(filteredData);
  };

  // eslint-disable-next-line
  useEffect(() => {
    if (!data.length) {
      setData(products);
    }
  });

  return (
    <div className="products-container">
      <ProductsHeader heading="Womens top's">
        <select
          onChange={onFilterChange}
          className="products-container__product-select"
        >
          <option value="">Filter by size</option>
          {sizeList.map(d => (
            <option value={d}>{d}</option>
          ))}
        </select>
      </ProductsHeader>
      <div className="row">
        {data.map(
          ({
            id,
            isExclusive,
            isSale,
            price,
            productImage,
            productName,
            size
          }) => (
            <Link
              key={id}
              to={`product/${id}`}
              className="col-sm-4 col-md-3 products-container__product"
            >
              <Product
                {...{
                  id,
                  isExclusive,
                  isSale,
                  price,
                  productName,
                  size
                }}
                imgSrc={`assets/products/${productImage}`}
              />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.shape([])
};

Products.defaultProps = {
  products: []
};

const maptStateToProps = state => {
  const products = state.products.data;
  const sizeList = Array.from(getMaxSizeList(products)) || [];
  return {
    products,
    sizeList
  };
};

export default connect(maptStateToProps)(Products);
