import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingItem = prev.find((i) => i.id === item.id); 
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, counter: i.counter + 1 } : i
        );
      } else {
        return [...prev, { ...item, counter: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === itemId
            ? { ...item, counter: item.counter - 1 }
            : item
        )
        .filter((item) => item.counter > 0) 
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};