import { useContext } from "react";
import BasketContext from "../contexts/BasketContext";

const ShoppingBasket = () => {
  const { basket, removeFromBasket, increaseCount, decreaseCount } =
    useContext(BasketContext);

  return (
    <div className="basket">
      {basket.map((item) => (
        <div key={item.id} className="basket-item">
          <img src={item.image} alt="" className="basket-img" />

          <div className="basket-info">
            <div className="basket-title">{item.title}</div>

            <div className="basket-controls">
              <button
                className="basket-in-cr"
                onClick={() => decreaseCount(item.id)}
              >
                -
              </button>

              <span style={{ margin: "0 10px" }}>{item.count}</span>

              <button
                className="basket-in-cr"
                onClick={() => increaseCount(item.id)}
              >
                +
              </button>
            </div>

            <button
              className="basket-remove"
              onClick={() => removeFromBasket(item.id)}
            >
              REMOVE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBasket;
