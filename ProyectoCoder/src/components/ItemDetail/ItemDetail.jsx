import { React, useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Card } from "@nextui-org/react";

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
  const [imgPrincipal, setImgPrincipal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageHover = (newImageSrc) => {
    setImgPrincipal(newImageSrc);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Después de medio segundo, cambia isLoading a false para mostrar el componente
    }, 500);

    return () => clearTimeout(timer); // Limpia el temporizador cuando el componente se desmonta
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-[98%] m-auto my-[5%] justify-center md:h-auto ">
      {isLoading ? (
        <div className="loader h-screen">Loading...</div>
      ) : (
        <>
          {() => setImgPrincipal(img)}
          <div className="gallerySide flex justify-start md:flex-col md:w-[5%] mr-[1%]">
            {imgDetail.map((imgD, index) => (
              <img
                key={index}
                src={imgD}
                alt={`Image ${index}`}
                onMouseEnter={() => handleImageHover(imgD)}
                className="cursor-pointer w-[50px] mr-2 md:mr-0 h-auto object-cover md:h-auto md:w-full rounded-lg shadow-sm mb-2 "
              />
            ))}
          </div>

          <Card className="w-full md:w-[51%] mr-[1%] h-[80vh]">
            <img
              alt="Product Image"
              className="object-contain z-1 absolute w-full bg-[#f6f6f6] h-full object-center"
              src={img}
            />
            <img
              alt="Product Image "
              className={`object-contain z-10 bg-[#f6f6f6] h-full object-center ${imgPrincipal ? "visible" : "hidden"}`}
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
                    {sizes.map((size, index) => (
                      <p
                        key={index}
                        className=" size border-black border-1 px-4 py-2 m-2 ml-0 w-fit rounded-full"
                      >
                        {size}
                      </p>
                    ))}
                  </div>
                  <ItemCount
                    initial={1}
                    stock={10}
                    onAdd={(quantity) =>
                      console.log(`cantidad agregada`, { quantity })
                    }
                  />
                </div>
              </div>
            </Card>
            <Card className="mt-2 p-6 h-auto bg-[#f6f6f6]">
              <p className="mb-2 font-black">About the product:</p>
              <p className="text-sm">{description}</p>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemDetail;
