import React from 'react'
import logo from "./../assets/logo.svg"
import cartIcon from "./../assets/icon-cart.svg"
import avatar from "./../assets/image-avatar.png"
import shoeImg from "./../assets/image-product-1-thumbnail.jpg"
import deleteIcon from "./../assets/icon-delete.svg"
import { useSelector, useDispatch } from 'react-redux'
import { setQty } from '../features/qtySlice'


const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center border-b border-grey/40  mb-24'>
      <div className='flex items-center '>
        <img src={logo} alt='logo' className='mr-16' />
        <ul className='flex '>
          <li className='mr-7 text-grey text-sm cursor-pointer py-9'>Collections</li>
          <li className='mr-7 text-grey text-sm cursor-pointer py-9'>Men</li>
          <li className='mr-7 text-grey text-sm cursor-pointer py-9'>Women</li>
          <li className='mr-7 text-grey text-sm cursor-pointer py-9'>About</li>
          <li className='mr-7 text-grey text-sm cursor-pointer py-9'>Contact</li>
        </ul>
      </div>

      <div className='flex items-center'>
        <Cart />

        <img src={avatar} alt='avatar' className='ml-9 w-12 border-2 border-orange rounded-full'></img>
      </div>

    </div>
  )
}

export default Navbar


const Cart = (props) => {
  const qty = useSelector(state => state.qty.value)
  const dispatch = useDispatch()
  const deleteItems = (e) => {
    e.preventDefault()
    dispatch(setQty(0))
  }

  return (
    <div className='relative cart-btn'>
      <img src={cartIcon} alt='cart-icon' className='cursor-pointer'></img>
      <div className=' absolute left-1/2 -translate-x-1/2'>
        <div className='bg-white mt-6 shadow-xl shadow-grey/30 rounded-xl  cart hidden'>
          <div className=' p-6  border-b-2 border-b-grey/10 text-sm font-bold '>Cart</div>

          {
            qty > 0 ?
              <>
                <ul className=''>
                  <li className='flex items-center p-6 min-w-max'>
                    <img src={shoeImg} alt='shoe-thmbnail' className='w-12 aspect-square rounded-md' />
                    <div className='flex flex-col text-sm min-w-max mx-4 text-grey'>
                      <p>Fall Limited Edition Sneakers</p>
                      <p>$125.00 x {qty} <span className="font-bold text-black"> ${125.00 * qty} </span> </p>
                    </div>
                    <button onClick={deleteItems}>
                      <img src={deleteIcon} alt='dltIcon' className='w-3 ml-2' />
                    </button>
                  </li>
                </ul>

                <button className='bg-orange rounded-lg w-5/6 text-white text-sm font-semibold py-4  min-w-max cursor-pointer left-1/2 relative -translate-x-1/2 mb-8 hover:bg-orange/80 '>
                  Checkout
                </button>
              </>
              : <div className='w-56 p-6 text-center text-grey font-semibold '>Cart empty</div>

          }
        </div>
      </div>
    </div>
  )
}


