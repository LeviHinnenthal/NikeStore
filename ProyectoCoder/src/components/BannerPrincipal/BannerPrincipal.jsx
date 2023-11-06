import React from "react";
import video from "../../assets/Video.mp4";
import justLanded from "../../assets/justlanded.png"
import { Link } from "react-router-dom";

const BannerPrincipal = () => {
  return (
    <div className="flex flex-col items-center">
      <video className="h-[400px] object-cover md:h-auto mb-10" autoPlay loop muted speed={1.5} src={video}></video>
      <img src={justLanded} alt="Just Landed" className="w-[400px]" />
      <p className="text-center text-[24px] md:text-lg font-semibold ">
        Takeoff in the XXIs newest colorway ‘Akoya,’ built with <br />
        Zoom technology to raise your game to another level.
      </p>
      <Link to="/item/1" className="rounded-full bg-black text-white text-xl border-2 border-black mt-6 mb-16 px-10 py-2 hover:bg-transparent hover:text-black">Shop</Link>
    </div>
  );
};

export default BannerPrincipal;
