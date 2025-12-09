import { useState } from "react";
import BasketContext from "../contexts/BasketContext";

const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  const addToBasket = (product) => {
    setBasket((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      }

      return [...prev, { ...product, count: 1 }];
    });
  };

  const decreaseCount = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  const increaseCount = (id) => {
    setBasket((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
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
        decreaseCount,
        increaseCount,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
