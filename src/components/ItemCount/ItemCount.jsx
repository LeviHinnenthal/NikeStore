import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useState } from "react";
import { toast } from 'sonner';

const ItemCount = ({ onAdd, initial, stock, setAddedToCart }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex mt-2">
      <Button className="addToCartContainer flex w-auto mr-2">
        <div className="flex items-center justify-center rounded-lg px-1 py-1">
          <p>Quantity</p>
          <div
            className="text-tiny text-black w-6 h-full justify-center rounded-lg flex items-center cursor-pointer"
            onClick={decrement}
          >
            -
          </div>
          <p className="text-tiny text-black mx-2">{quantity}</p>
          <div
            className="text-tiny text-black w-6 h-full justify-center rounded-lg flex items-center cursor-pointer"
            onClick={increment}
          >
            +
          </div>
        </div>
      </Button>
      <div className="botones">
        <Button
          className="text-tiny text-white bg-black border-1 border-black"
          variant="flat"
          color="default"
          radius="xl"
          size="md"
          onClick={() => {onAdd(quantity)}}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ItemCount;
