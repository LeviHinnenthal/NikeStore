import { React, useEffect, useState } from "react";
import {
  getProductById,
  getProducts,
  getProductByCategory,
} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import BannerPrincipal from "../BannerPrincipal/BannerPrincipal";

const ItemListemContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <div className="h-auto">
      {greeting ? (
        <div className="flex flex-col items-center justify-center my-6">
          <h1 className="text-2xl">{greeting}</h1>
        </div>
      ) : (
        ""
      )}

      <div className="productsContainer flex justify-center flex-wrap md:mx-auto md:mb-14 md:mt-8">
        <p className="w-full capitalize mb-8 text-2xl text-center">{categoryId}</p>
        <ItemList products={products} category={categoryId} />
      </div>
    </div>
  );
};

export default ItemListemContainer;
