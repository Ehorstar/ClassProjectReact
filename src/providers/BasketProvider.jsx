import { useState } from "react";
import BasketContext from "../contexts/BasketContext";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => [...prev, product]);
  };

  const removeFromBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        basketCount: basket.length,
        addToBasket,
        removeFromBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
