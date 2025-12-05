import React from 'react';
import { useLoaderData } from 'react-router';

const Products = () => {
    const products = useLoaderData();

    return (
      <div>
        <h1>Products</h1>
        <div className="products-list">
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt="" />
              {product.title}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Products;
