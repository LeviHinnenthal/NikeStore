import { useContext } from "react";
import { Card } from "@nextui-org/react";
import Delete from "../../assets/delete.png";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, price, img, quantity, size }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemoveItem = () => {
    removeItem(id); // Pass the item ID to removeItem
  };

  return (
    <Card className="flex flex-row items-center justify-between mb-[1vw]">
      <div className="leftContainer flex flex-col md:flex-row justify-between">
        <Card>
          <img
            className="h-[200px] w-screen object-cover md:w-[150px]"
            src={img}
            alt={name}
          />
        </Card>
        <div className="md:ml-4">
          <div className="flex flex-col items-start p-4 justify-between h-full">
            <p className="font-bold font-lg">Product: {name}</p>
            <div className="priceQuantity my-4 md:my-0">
              <p>Price: USD{price}</p>
              <p>Quantity: {quantity}</p> {/* Display the quantity here */}
              <p>Size: {size}</p> {/* Display the quantity here */}
            </div>
            <div className="delete flex justify-between w-full">
              <div
                onClick={() => handleRemoveItem()}
                className="cursor-pointer mobileElement"
              >
                <img src={Delete} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleRemoveItem()}
        className="mr-8 cursor-pointer desktopElement"
      >
        <img src={Delete} alt="" />
      </div>
    </Card>
  );
};

export default CartItem;
