import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import search from "../../assets/search.svg";
import NikeLogo from "../../assets/nike.png";
import { NavLink } from "react-router-dom";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Link to="/" className="block w-fit">
        <img src={NikeLogo} alt="NikeLogo" className="h-[50px]" />
      </Link>

      <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden transition-all"
        >
          {isOpen ? (
            <RiCloseFill className="text-black text-3xl cursor-pointer" />
          ) : (
            <RiMenu4Fill className="text-black text-3xl cursor-pointer" />
          )}
        </div>

      <div
        className={`menuMobile flex flex-col p-4 h-screen w-screen absolute top-[52px] transition-all  bg-white ${
          isOpen ? "right-0" : "-right-[100%]"
        }`}
      >
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
