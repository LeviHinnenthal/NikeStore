import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button, Card } from "@nextui-org/react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/cartItem";
import { Input } from "@nextui-org/react";
import EmptyCart from "./EmptyCart";
import CheckoutBlock from "./CheckoutBlock";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total, size } = useContext(CartContext);

  if (totalQuantity === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="flex flex-col my-[1vw] max-w-screen-2xl mx-auto">
      <h1 className="text-xl font-bold text-center my-4">My cart</h1>
      <div className="flex flex-col md:flex-row m-4 w-[90%] md:w-[98%] mx-auto gap-[1vw]">
        <div className="m-auto mt-0 md:w-[65vw]">
          {cart.map((p) => (
            <CartItem key={p.id} {...p} clearCart={clearCart} />
          ))}
        </div>
        <div className="flex flex-col">
          <CheckoutBlock/>
        </div>
      </div>
    </div>
  );
};

export default Cart;
