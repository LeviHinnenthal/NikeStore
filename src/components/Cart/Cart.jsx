import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/cartItem";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="flex items-center w-full py-6">
        <p className="mb-4">Your cart is empty</p>
        <Link to="/shop">
          <Button>Go to store</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="m-auto my-10 w-[50%]">
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3>Total: USD{total} </h3>
      <Button onClick={() => clearCart()} className="btn">
        Clear cart
      </Button>
      <Button>
        <Link to="/checkout" className="">
          Go to checkout
        </Link>
      </Button>
    </div>
  );
};

export default Cart;
