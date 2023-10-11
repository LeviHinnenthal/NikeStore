import React from 'react'
import Cart from "../../assets/cart.svg"

const CartWidget = () => {
  return (
    <div className='flex text-[10px] cursor-pointer'>
      <img src={Cart} alt="CartIcon" />
      0
    </div>
  )
}

export default CartWidget
