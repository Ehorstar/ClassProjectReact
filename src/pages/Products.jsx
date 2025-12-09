import { MessageFilled, StarFilled, StarOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import BasketContext from "../contexts/BasketContext";

const Products = () => {
  const products = useLoaderData();
  const [sortType, setSortType] = useState("none");
  const navigate = useNavigate();

  const { addToBasket } = useContext(BasketContext);

  const renderStars = (rate) => {
    const rounded = Math.round(rate);
    return [...Array(5)].map((_, i) =>
      i < rounded ? (
        <StarFilled key={i} style={{ color: "#fadb14" }} />
      ) : (
        <StarOutlined key={i} />
      )
    );
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortType === "price-up") return a.price - b.price;
    if (sortType === "price-down") return b.price - a.price;
    if (sortType === "rating") return b.rating.rate - a.rating.rate;
    return 0;
  });

  return (
    <div>
      <h1>Products</h1>
      <div className="products-list">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product">
            <img
              src={product.image}
              alt=""
              onClick={() => navigate(`/products/${product.id}`)}
              style={{ cursor: "pointer" }}
            />

            <div className="product-title">{product.title}</div>

            <div
              className="product-rating"
              style={{ display: "flex", gap: "4px" }}
            >
              <div style={{ display: "flex" }}>
                {renderStars(product.rating.rate)}
              </div>

              <MessageFilled />
              {product.rating.count}
            </div>

            <div className="product-price">{product.price}$</div>

            <button
              className="button-product"
              onClick={() => addToBasket(product)}
            >
              BUY
            </button>
          </div>
        ))}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button onClick={() => setSortType("price-up")}>Price ↑</button>
          <button onClick={() => setSortType("price-down")}>Price ↓</button>
          <button onClick={() => setSortType("rating")}>Rating ⭐</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
