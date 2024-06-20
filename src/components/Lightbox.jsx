import React, { useState } from 'react'
import { RiCloseFill } from "react-icons/ri";
import { MdOutlineNavigateNext } from "react-icons/md";
import { MdOutlineNavigateBefore } from "react-icons/md";

import tnail1 from "./../assets/image-product-1-thumbnail.jpg"
import tnail2 from "./../assets/image-product-2-thumbnail.jpg"
import tnail3 from "./../assets/image-product-3-thumbnail.jpg"
import tnail4 from "./../assets/image-product-4-thumbnail.jpg"
import img1 from "./../assets/image-product-1.jpg"
import img2 from "./../assets/image-product-2.jpg"
import img3 from "./../assets/image-product-3.jpg"
import img4 from "./../assets/image-product-4.jpg"

export default function Lightbox(props){
  const thumbnails = [tnail1, tnail2, tnail3, tnail4]
  const imgs = [img1, img2, img3, img4]
  const [active, setActive] = useState(0)


  return(
    <div className='lightbox w-screen h-screen absolute left-0 top-0 z-30 flex items-center justify-center  '>
      <div className='w-1/3 h-fit flex flex-col gap-5'>

        <RiCloseFill className="aspect-square text-orange text-[2rem] cursor-pointer hover:text-lorange self-end" />

        <div className='w-full h-fit relative'>
          <img src={img1} className='w-full aspect-square rounded-xl' />
          <button className='absolute w-10 aspect-square rounded-full bg-white top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-3xl cursor-pointer hover:text-lorange'>
            <MdOutlineNavigateBefore className=''/>
          </button>
          <button className='absolute w-10 aspect-square rounded-full bg-white top-1/2 right-0 translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-3xl cursor-pointer hover:text-lorange'>
            <MdOutlineNavigateNext className=''/>
          </button>
        </div>

        <div className='flex w-full justify-between px-10'>
        {
          thumbnails.map((item, key) => {
            return (
              <Thumbnail src={item} key={key} active={active} idx={key} setActive={setActive}/>
            )
          })
        }
      </div>


      </div>
    </div>
  )
}


const Thumbnail = ({ src, idx, active, setActive }) => {
  return (
    <div className='w-1/5 aspect-square rounded-lg cursor-pointer overflow-hidden relative' style={active==idx ? {
      border: "2px solid #fd7e1b"
    } : {} } onClick={() => setActive(idx)}>
      <div className='w-full aspect-square absolute bg-white/50 hidden' style={active==idx ? {
      display: "block"
    } : {} }/>
      <img src={src} alt='thumbnail' className='w-full' />
    </div>
  )
}