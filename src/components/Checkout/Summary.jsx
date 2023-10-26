import { React, useContext, useState } from "react";
import { Card } from "@nextui-org/react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/cartItem";
const Summary = () => {
  const { cart, totalQuantity, total, quantity } = useContext(CartContext);
  return (
    <Card className="m-6 p-4 flex flex-col items-center max-w-screen-2xl mx-auto">
      <h2 className="font-bold text-3xl my-2 mt-6">
        Tahnks for your purchase!
      </h2>
      <p>You will recieve your order in the next 4 working days.</p>
      <div className="m-auto mt-0 ">
        {cart.map((p, id) => (
          <Card
            key={id}
            className="flex flex-row justify-start items-center my-10 w-fit"
          >
            <img
              className="h-[200px] rounded-xl w-screen object-cover md:w-[150px]"
              src={p.img}
              alt={p.name}
            />
            <div className="flex flex-col">
              <p className="mx-6">Price: USD{p.price}</p>
              <p className="mx-6">Quantity: {p.quantity}</p>
              <p className="mx-6">Size: {p.size}</p>
            </div>
          </Card>
        ))}
        <p className="text-xl font-bold text-center mb-6">Total amount: USD{total}</p>
      </div>
    </Card>
  );
};

export default Summary;
