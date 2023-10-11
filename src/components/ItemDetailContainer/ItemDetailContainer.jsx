import { React, useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProductById } from "../../asyncMock";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  

  const { itemId } = useParams();

  useEffect(() => {
    getProductById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);



  
  return (
    <div className="itemDetailContainer">
      <ItemDetail  {...product} />
    </div>
  );
};

export default ItemDetailContainer;
