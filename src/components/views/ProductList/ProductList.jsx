import React from 'react';

import products from '../../../products.json';
import ProductItem from './ProductItem';

function ProductList() {
  return (
    <>
      <h1>Product list</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductList;
