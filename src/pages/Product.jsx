import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import BasketContext from "../contexts/BasketContext";

const Product = () => {
  const product = useLoaderData();
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="vacation">
      <img className="product-img" src={product.image} alt="" />

      <div className="product-title">
        <h1>{product.title}</h1>
      </div>
      <div className="product-description">
        <p>{product.description}</p>
      </div>

      <button className="button-product" onClick={() => addToBasket(product)}>BUY</button>
    </div>
  );
};

export default Product;
