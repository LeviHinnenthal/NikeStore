import { useContext, React } from "react";
import PayingMethods from "./PayingMethods";
import { Card } from "@nextui-org/react";
import { CartContext } from "../../context/CartContext";
import CheckoutBlock from "../Cart/CheckoutBlock";

const Checkout = () => {
  const { total } = useContext(CartContext);

  return (
    <div className="flex flex-col my-[1vw] max-w-screen-2xl mx-auto">
      <h1 className="text-xl font-bold text-center my-4">Checkout</h1>
      <div className="flex flex-col md:flex-row m-4 w-[90%] md:w-[98%] mx-auto gap-[1vw]">
        <div className="m-auto mt-0 w-full md:w-[65vw]">
         
          <PayingMethods />
        </div>
        <div className="flex flex-col">
         <CheckoutBlock />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
