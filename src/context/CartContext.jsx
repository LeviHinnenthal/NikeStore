import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCopy, setCartCopy] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity, size: item.size }]);
    } else {
      console.error("Product already added");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const total = cart.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const totalCartCopy = cartCopy.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        totalQuantity,
        cartCopy,
        setCartCopy,
        totalCartCopy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
