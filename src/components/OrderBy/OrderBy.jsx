import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const OrderBy = () => {
  return (
    <>
      <Dropdown>
        <DropdownTrigger>
          <Button variant="bordered">Order By</Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="Action event example"
          onAction={(key) => alert(key)}
        >
          <DropdownItem key="recomended">Recomended</DropdownItem>
          <DropdownItem key="priceDesc">Price: Higher to lower</DropdownItem>
          <DropdownItem key="priceAsc">Price: Lower to higher</DropdownItem>
          <DropdownItem key="nameAZ">Name A-Z</DropdownItem>
          <DropdownItem key="nameZA">Name Z-A</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};

export default OrderBy;
