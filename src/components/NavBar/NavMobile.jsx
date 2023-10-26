import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import search from "../../assets/search.svg";
import NikeLogo from "../../assets/nike.png";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { CartContext } from "../../context/CartContext";
import ProfileWidgetMobile from "../ProfileWidget/ProfileWidgetMobile";
const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalQuantity } = useContext(CartContext);
  return (
    <>
      <Link to="/" className="block w-fit">
        <img src={NikeLogo} alt="NikeLogo" className="h-[50px]" />
      </Link>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden transition-all flex items-center"
      >
        {isOpen ? (
          <RiCloseFill className="text-black text-3xl cursor-pointer z-10" />
        ) : (
          <RiMenu4Fill className="text-black text-3xl cursor-pointer z-10" />
        )}
      </div>

      <div
        className={`menuMobile flex flex-col items-center p-4 h-fit w-screen absolute left-0 duration-400 rounded-b-[20px] shadow-xl bg-white ${
          isOpen ? "top-[52px]" : "-top-[100vh]"
        }`}
      >
        <ProfileWidgetMobile />

        <Link to="/cart" className="icon cursor-pointer mx-1 flex items-center" onClick={() => setIsOpen(false)}>
          <p className="py-2 text-2xl mr-1">Cart</p>
          <p className="text-xl">({totalQuantity})</p>
        </Link>

        <NavLink
          onClick={() => setIsOpen(false)}
          to={`/category/new`}
          className={`py-2 text-2xl`}
        >
          New
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={`/category/men`}
          className={`py-2 text-2xl`}
        >
          Men
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={`/category/women`}
          className={`py-2 text-2xl`}
        >
          Women
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={`/category/kids`}
          className={`py-2 text-2xl`}
        >
          Kids
        </NavLink>
        <NavLink
          onClick={() => setIsOpen(false)}
          to={`/category/sale`}
          className={`py-2 text-2xl`}
        >
          Sale
        </NavLink>
      </div>
    </>
  );
};

export default NavMobile;
