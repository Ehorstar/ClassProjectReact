import React, { useContext, useState } from "react";
import BasketContext from "../contexts/BasketContext";

const ShoppingBasket = () => {
  const { basket, removeFromBasket } = useContext(BasketContext);
  const [count, setCount] = useState(1);

  return (
    <div>
      {basket.map((item) => (
        <div key={item.id}>
          {item.title}
          <button onClick={() => removeFromBasket(item.id)}>REMOWE</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          {count}
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingBasket;
