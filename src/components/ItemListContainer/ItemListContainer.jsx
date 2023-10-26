import { React, useEffect, useState } from "react";
import {
  getProductById,
  getProducts,
  getProductByCategory,
} from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams, useLocation } from "react-router-dom";
import BannerPrincipal from "../BannerPrincipal/BannerPrincipal";
import OrderBy from "../OrderBy/OrderBy";
import { Spinner } from "@nextui-org/react";

const ItemListContainer = ({ greeting }) => {
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
    <div className="h-auto max-w-screen-2xl mx-auto">
      {location.pathname != "/" ? (
        <div className="sortContainer flex w-full justify-end px-6 my-8">
          <div className="text-transparent w-[86px] desktopElement">.</div>
          {categoryId != null ? (
            <p className="w-full capitalize text-2xl text-left md:text-center">
              {categoryId}
            </p>
          ) : (
            <p className="w-full capitalize text-2xl text-left md:text-center">
              Shop
            </p>
          )}

          <OrderBy />
        </div>
      ) : (
        ""
      )}

      {greeting ? (
        <div className="flex flex-col items-center justify-center my-6">
          <h1 className="text-2xl">{greeting}</h1>
        </div>
      ) : (
        ""
      )}

      <div className="productsContainer flex justify-center flex-wrap md:mx-auto md:mb-14">
        {products == [] ? (
          <Spinner />
        ) : (
          <ItemList products={products} category={categoryId} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
