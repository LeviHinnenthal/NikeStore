import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";

const Item = ({ id, name, category, img, stock, price, description }) => {
  return (
    <Link to={`/item/${id}`}>
      <Card
        shadow="sm"
        key={id}
        isPressable
        onPress={() => console.log("item pressed")}
        className="hover:scale-[1.05]"
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={name}
            className="w-auto object-cover h-auto transition-all"
            src={img}
          />
        </CardBody>
        <CardFooter className="text-small justify-between flex flex-col items-start">
          <b>{name}</b>

          <p className="text-default-500 mr-2">USD{price}</p>
          <p>View product</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Item;
