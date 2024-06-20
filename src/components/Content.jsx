import React from 'react'
import cartIcon from "./../assets/icon-cart.svg"
import { useState } from 'react'
import { setQty } from '../features/qtySlice'
import { useDispatch } from 'react-redux'


const Content = () => {
  const [ct, setCt] = useState(0)
  const dispatch = useDispatch()
  const increment = () => { setCt(ct+1) }
  const decrement = () => { setCt( Math.max(0, ct-1)) }
  const addToCart = (e) => {
    e.preventDefault()
    dispatch(setQty(ct))
  }

  return (
    <div className='w-1/2 h-fit pr-10'>
      <span className='text-orange font-medium text-sm'>SNEAKER COMPANY</span>
      <h1 className='mt-2 font-extrabold text-[2.5rem] leading-tight '>Fall Limited Edition Sneakers</h1>

      <div className='text-grey pr-10 my-5'>
        These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they'll
        withstand everything the weather can offer.
      </div>

      <div className='flex items-center'>
        <span className='font-bold text-2xl mr-5'>$125.00</span>
        <span className='px-3 py-1 bg-orange/20 rounded-md text-xs text-orange font-bold'>50%</span>
      </div>

      <span className='line-through text-md text-grey/50 font-bold mt-8'>$250.00</span>

      <div className='flex mt-8'>
        <div className='flex items-center bg-lgrey py-3 px-4 rounded-lg'>
          <button onClick={decrement} className='text-orange font-extrabold text-md'>-</button>
          <span className='mx-8 min-w-[2rem] text-center font-medium text-md'>{ct}</span>
          <button onClick={increment} className='text-orange font-extrabold text-md'>+</button>
        </div>

        <button onClick={addToCart} className='flex items-center bg-orange rounded-lg text-white text-sm font-bold px-14 ml-4 min-w-max cursor-pointer shadow-xl shadow-orange/30 hover:bg-orange/80' >
          <img src={cartIcon} alt='cart-icon' className='mr-3 w-5 mix-blend-plus-lighter'/>
          <span > Add to Cart</span>
        </button>
      </div>


    </div>
  )
}

export default Content
