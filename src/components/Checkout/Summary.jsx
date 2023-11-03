import { React, useContext, useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/cartItem";

const Summary = ({ orderId }) => {
  const { cart, totalQuantity, total, quantity, clearCart, cartCopy, totalCartCopy } = useContext(CartContext);

  return (
    <Card className="m-6 p-4 w-[90%] flex flex-col items-center max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-2xl md:text-3xl my-2 mt-6">
        Tahnks for your purchase!
      </h2>
      <p className="text-center mb-2">
        Your order ID is: <strong>{orderId}</strong>
      </p>
      <p className="text-center">
        You will recieve your order in the next 4 working days.
      </p>
      <div className="m-auto mt-0 ">
        {cartCopy.map((p, id) => (
          <Card
            key={id}
            className="flex md:flex-row justify-start items-center my-10 w-fit"
          >
            <img
              className="h-[200px] rounded-xl w-screen object-cover md:w-[150px]"
              src={p.img}
              alt={p.name}
            />
            <div className="flex flex-col py-2 text-center">
              <p className="mx-6 my-1">Price: USD{p.price}</p>
              <p className="mx-6 my-1">Quantity: {p.quantity}</p>
              <p className="mx-6 my-1">Size: {p.size}</p>
            </div>
          </Card>
        ))}
        <p className="text-xl font-bold text-center mb-6">
          Total amount: USD{totalCartCopy}
        </p>
      </div>
    </Card>
  );
};

export default Summary;
