import { React, useState } from "react";
import CartWidget from "./CartWidget";
import heart from "../../assets/heart.svg";
import user2 from "../../assets/user2.svg";
import search from "../../assets/search.svg";
import NikeLogo from "../../assets/nike.png";
import { Input } from "@nextui-org/react";
import { SearchIcon } from "../NextUiComponents/SearchIcon";
import { Link, NavLink } from "react-router-dom";
import NavMobile from "./NavMobile";

const NavBar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full border-b-2 sticky top-0 z-11 bg-white/70 backdrop-blur-xl z-20 desktopElement">
        <div className="flex justify-between h-20 m-auto items-center px-10 max-w-[1600px]">
          <Link to="/">
            <img
              src={NikeLogo}
              alt="NikeLogo"
              className="h-[70px] cursor-pointer"
            />
          </Link>
          <div className="headerOptions flex absolute left-2/4 -translate-x-2/4 font-semibold text-lg">
            <NavLink
              to={`/category/new`}
              className={({ isActive }) =>
                isActive ? "ActiveOption mx-2" : "Option mx-2"
              }
            >
              New
            </NavLink>
            <NavLink
              to={`/category/men`}
              className={({ isActive }) =>
                isActive ? "ActiveOption mx-2" : "Option mx-2"
              }
            >
              Men
            </NavLink>
            <NavLink
              to={`/category/women`}
              className={({ isActive }) =>
                isActive ? "ActiveOption mx-2" : "Option mx-2"
              }
            >
              Women
            </NavLink>
            <NavLink
              to={`/category/kids`}
              className={({ isActive }) =>
                isActive ? "ActiveOption mx-2" : "Option mx-2"
              }
            >
              Kids
            </NavLink>
            <NavLink
              to={`/category/sale`}
              className={({ isActive }) =>
                isActive ? "ActiveOption mx-2" : "Option mx-2"
              }
            >
              Sale
            </NavLink>
          </div>
          <div className="flex justify-between items-center">
            <Input
              className={`transition-all z-10 mr-2 w-[180px]`}
              isClearable
              radius="lg"
              classNames={{
                input: [
                  "bg-transparent",
                  "text-black/90 dark:text-white/90",
                  "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                ],
                innerWrapper: "bg-transparent",
                inputWrapper: [
                  "shadow-xl",
                  "bg-default-200/50",
                  "dark:bg-default/60",
                  "backdrop-blur-xl",
                  "backdrop-saturate-200",
                  "hover:bg-default-200/70",
                  "dark:hover:bg-default/70",
                  "group-data-[focused=true]:bg-default-200/50",
                  "dark:group-data-[focused=true]:bg-default/60",
                  "!cursor-text",
                ],
              }}
              placeholder="Type to search..."
              startContent={
                <SearchIcon className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
              }
            />

            <Link to="/profile" className="icon cursor-pointer mx-0 w-8">
              <img src={user2} alt="User" />
            </Link>
            <Link to="/favorites" className="icon cursor-pointer mx-0 w-8">
              <img src={heart} alt="Heart" />
            </Link>
            <Link to="/cart" className="icon cursor-pointer mx-0 w-8">
              <CartWidget />
            </Link>
          </div>
        </div>
      </div>

      <div className="mobileElement w-full px-[4vw] flex justify-between border-b-2 fixed items-center top-0 z-11 bg-white/50 backdrop-blur-xl z-20">
        <NavMobile />
      </div>
      <div className="h-[52px] headerDummy mobileElement"></div>
    </>
  );
};

export default NavBar;
