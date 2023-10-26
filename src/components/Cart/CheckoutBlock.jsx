import { Button, Card, Input } from "@nextui-org/react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useLocation } from "react-router-dom";

const CheckoutBlock = () => {
  const { clearCart, total } = useContext(CartContext);

  return (
    <>
      <Card className="fixed mb-4 md:relative md:mb-0 w-[90%] z-20 bottom-0 rightContainer flex flex-col bg-white p-4 md:w-[33vw] h-fit">
        <h1 className="text-xl font-bold">Total amount</h1>
        <h3 className="mt-4">Products: USD{total} </h3>
        <h3 className="mb-4">Shipping: USD5 </h3>
        <h3 className="mb-4">Total: USD{total + 5} </h3>


        {location.pathname == "/cart" ? (
          <>
            <Button>
              <Link to="/checkout" className="w-full">
                Go to checkout
              </Link>
            </Button>
            <Button
              onClick={() => clearCart()}
              className="btn mt-1 bg-white border-1"
            >
              Clear cart
            </Button>
          </>
        ) : (
          ""
        )}
      </Card>
      <Card className="mb-[100px] md:mb-0 rightContainer flex flex-col bg-white p-4 md:w-[33vw] h-fit mt-[1vw]">
        <h3 className="text-xl mb-4">Apply promo code</h3>
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
          <Input type="text" label="Promo code" className="h-12" />
          <Button className="absolute right-[16px] h-12">Apply</Button>
        </div>
      </Card>
    </>
  );
};

export default CheckoutBlock;
