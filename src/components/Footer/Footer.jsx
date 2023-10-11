import React from "react";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import tw from "../../assets/tw.svg";

const Footer = () => {
  return (
    
    <div className="flex flex-col md:flex-row items-center content-center absolute w-full justify-between px-6 py-4 border-t-2">
      <div className="ecommerceLogo">Nike</div>
      <div className="terms flex flex-col items-center my-4 md:my-auto md:flex-row content-start text-sm">
        <div className="cursor-pointer mx-4">Terms & conditions</div>
        <div className="cursor-pointer mx-4">Privacy Politics</div>
        <div className="cursor-pointer mx-4">FAQ</div>
      </div>
      <div className="socialLogos flex">
        <img src={ig} alt="" className="logo mx-2 cursor-pointer" />
        <img src={tw} alt="" className="logo mx-2 cursor-pointer" />
        <img src={fb} alt="" className="logo mx-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
