
import { Image } from "@nextui-org/react";
import { Link, NavLink } from "react-router-dom";


const Item = ({ id, name, img, price }) => {
  return (
    <Link to={`/item/${id}`}>
      <div
        key={id}
        className="hover:scale-[1.05] transition-all bg-white rounded-xl shadow-md"
      >
        <div className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={name}
            className="w-auto object-cover h-auto transition-all"
            src={img}
          />
        </div>
        <div className="text-small justify-between flex flex-col items-start p-4">
          <b>{name}</b>

          <p className="text-default-500 mr-2">USD{price}</p>
          <p className="w-full mt-2">View product</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
