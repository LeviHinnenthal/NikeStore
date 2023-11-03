import { useContext, React, useState, useEffect } from "react";
import { Card } from "@nextui-org/react";
import { CartContext } from "../../context/CartContext";
import CheckoutBlock from "../Cart/CheckoutBlock";
import CheckoutForm from "./CheckoutForm";
import { db } from "../../firebaseConfig";
import { toast } from "sonner";
import {
  getDocs,
  collection,
  query,
  where,
  Timestamp,
  addDoc,
} from "firebase/firestore";
import Summary from "./Summary";

const Checkout = () => {
  // const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { total, cart, clearCart, cartCopy, setCartCopy } =
    useContext(CartContext);
  // const [cartCopy, setCartCopy] = useState([]);

  const createOrder = async (formData) => {
    try {
      const objOrder = {
        buyer: {
          Name: formData.name,
          LastName: formData.lastName,
          Phone: formData.phoneNumber,
          Email: formData.email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };
      const orderRef = collection(db, "orders");
      const orderAdded = await addDoc(orderRef, objOrder);

      setOrderId(orderAdded.id);
      const cartCopyConst = [...cart];
      setCartCopy(cartCopyConst);
      clearCart();
    } catch (err) {
      () => toast("This is a sonner toast");
    }
  };

  return (
    <>
      {orderId === "" ? (
        <div className="flex flex-col my-[1vw] max-w-screen-2xl mx-auto">
          <h1 className="text-xl font-bold text-center my-4">Checkout</h1>
          <div className="flex flex-col md:flex-row m-4 w-[90%] md:w-[98%] mx-auto gap-[1vw]">
            <div className="m-auto mt-0 w-full md:w-[65vw]">
              <CheckoutForm onConfirm={createOrder} />
            </div>
            <div className="flex flex-col">
              <CheckoutBlock />
            </div>
          </div>
        </div>
      ) : (
        <Summary orderId={orderId} cartCopy={cartCopy} />
      )}
    </>
  );
};

export default Checkout;
