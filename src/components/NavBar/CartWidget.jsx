import React, { useContext } from "react";
import Cart from "../../assets/cart.svg";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <div className="flex text-[10px] cursor-pointer">
      <img src={Cart} alt="CartIcon" />
      <p>{totalQuantity}</p>
    </div>
  );
};

export default CartWidget;
