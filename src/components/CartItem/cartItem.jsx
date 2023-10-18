import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { useContext,React } from "react";
const CartItem = ({ id, name, price, img, quantity }) => {

  return (

    <Card className="flex flex-row items-center justify-between">
      <Card>
        <img className="w-[200px]" src={img} alt={name} />
      </Card>
      <div className="ml-4">
        <div className="flex flex-col items-start p-4">
          <p>Product: {name}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p> {/* Display the quantity here */}
        </div>
      </div>
      <div className="mr-8 cursor-pointer">x</div>
    </Card>
  );
};

export default CartItem;
