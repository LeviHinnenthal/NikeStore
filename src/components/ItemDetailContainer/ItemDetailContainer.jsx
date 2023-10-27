import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router";
import { Spinner } from "@nextui-org/react";
import { db } from "../../firebaseConfig";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div className="itemDetailContainer max-w-screen-2xl mx-auto">
      {product ? (
      
        <ItemDetail {...product} />
    
      ) : (
        <div className="h-[80vh] w-full flex items-center justify-center">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
