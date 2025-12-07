import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import BasketContext from "../contexts/BasketContext";

const Product = () => {
  const product = useLoaderData();
  const { addToBasket } = useContext(BasketContext);
  return (
    <div>
      <h1>{product.title}</h1>
      <button onClick={() => addToBasket(product)}>BUY</button>
    </div>
  );
};

export default Product;
