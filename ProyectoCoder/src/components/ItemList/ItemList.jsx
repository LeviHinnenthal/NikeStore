import React, { Children } from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="ListGroup grid gap-4 grid-cols-2  md:grid-cols-4 px-6">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
