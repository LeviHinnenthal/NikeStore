import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ id, name, category, img, stock, price, description }) => {
  return (
    <Link to={`/item/${id}`}>
      <Card
        shadow="none"
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
          <Button className="w-full mt-2">View product</Button>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default Item;
