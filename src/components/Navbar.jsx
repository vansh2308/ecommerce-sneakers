import React from 'react'
import logo from "./../assets/logo.svg"
import cartIcon from "./../assets/icon-cart.svg"
import avatar from "./../assets/image-avatar.png"

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
        <img src={cartIcon} alt='cart-icon' className='cursor-pointer'></img>
        <img src={avatar} alt='avatar' className='ml-9 w-12'></img>
      </div>
      
    </div>
  )
}

export default Navbar
