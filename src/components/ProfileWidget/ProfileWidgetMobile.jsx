import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import { Link } from "react-router-dom";

const ProfileWidgetMobile = () => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="center">
        <DropdownTrigger>
          <p className="text-2xl">My profile</p>
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
        
          <DropdownItem key="settings">
            <Link to="/profile">My profile</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default ProfileWidgetMobile;
