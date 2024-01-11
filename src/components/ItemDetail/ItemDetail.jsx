import { React, useState, useEffect, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Button, Card, button } from "@nextui-org/react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from 'sonner';

const ItemDetail = ({
  id,
  name,
  price,
  img,
  imgDetail,
  description,
  category,
  sizes,
  stock,
}) => {
  const [imgPrincipal, setImgPrincipal] = useState("");
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeAlert, setSizeAlert] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleOnAdd = (quantity) => {
    if (selectedSize != null) {
      setQuantityAdded(quantity);
      const item = {
        id,
        name,
        price,
        img,
        size: selectedSize,
      };
      addItem(item, quantity);
      setAddedToCart(true);
      setSizeAlert(false);
      toast.success("Product added to cart");
    } else {
      setSizeAlert(true);
      toast.error("You have to select a size");
    }
  };

  const handleImageHover = (newImageSrc) => {
    setImgPrincipal(newImageSrc);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col md:flex-row w-[98%] m-auto my-[5%] justify-center md:h-auto ">
      <>
        {() => setImgPrincipal(img)}
        <div className="gallerySide flex justify-start md:flex-col md:w-[5%] mr-[1%]">
          {Object.entries(imgDetail).map(([imgKey, imgValue]) => (
            <img
              key={imgKey}
              src={imgValue}
              alt={`Image ${imgKey}`}
              onMouseEnter={() => handleImageHover(imgValue)}
              className="cursor-pointer w-[50px] mr-2 md:mr-0 h-auto object-cover md:h-auto md:w-full rounded-lg shadow-sm mb-2 "
            />
          ))}
        </div>

        <Card className="w-full max-h-[600px] md:w-[51%] mr-[1%] h-[80vh]">
          <img
            alt="Product Image"
            className="object-cover z-1 absolute w-full bg-[#f6f6f6] h-full object-center"
            src={img}
          />
          <img
            alt="Product Image "
            className={`object-cover z-10 bg-[#f6f6f6] h-full object-center ${
              imgPrincipal ? "visible" : "hidden"
            }`}
            src={imgPrincipal}
          />
        </Card>
        <div className="flex flex-col w-full mt-2 md:mt-0 md:w-[35%]">
          <Card className="h-fit bg-[#f6f6f6]">
            <div className="flex flex-col items-center justify-center p-6">
              <div className="flex flex-col col-span-6 md:col-span-8 w-full">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-0">
                    <h3 className="font-bold text-foreground/90 text-2xl">
                      {name}
                    </h3>

                    <p className="text-xl font-medium">USD{price}</p>
                  </div>

                  <div></div>
                </div>

                <div className="sizes flex flex-wrap">
                  {Object.entries(sizes).map(([sizeKey, sizeValue]) => (
                    <p
                      key={sizeKey}
                      className={`size border-black border-1 px-4 py-2 m-2 ml-0 w-fit rounded-full cursor-pointer ${
                        selectedSize === sizeValue ? "bg-black text-white" : ""
                      }`}
                      onClick={() => handleSizeClick(sizeValue)}
                    >
                      {sizeValue}
                    </p>
                  ))}
                </div>
                {addedToCart ? (
                  <Button>
                    <Link
                      className="w-full h-full flex items-center justify-center"
                      to="/cart"
                    >
                      Go to cart
                    </Link>
                  </Button>
                ) : (
                  <ItemCount
                    initial={1}
                    stock={10}
                    onAdd={handleOnAdd}
                    selectedSize={selectedSize}
                    setAddedToCart={setAddedToCart}
                  />
                )}

                {sizeAlert == true ? (
                  <p className="text-red-500 mt-2">Select a size.</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Card>
          <Card className="mt-2 p-6 h-auto bg-[#f6f6f6]">
            <p className="mb-2 font-black">About the product:</p>
            <p className="text-sm">{description}</p>
          </Card>
        </div>
      </>
    </div>
  );
};

export default ItemDetail;
