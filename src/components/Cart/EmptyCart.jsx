import React from 'react'
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] w-full py-6 mx-auto my-[1vw]">
    <p className="mb-4">Your cart is empty</p>
    <Link to="/shop">
      <div className="w-full bg-gray-300 py-2 px-4 h-[40px] flex items-center text-black rounded-xl">Go to store</div>
    </Link>
  </div>
  )
}

export default EmptyCart
