import React, { useEffect, useState } from 'react'
import tnail1 from "./../assets/image-product-1-thumbnail.jpg"
import tnail2 from "./../assets/image-product-2-thumbnail.jpg"
import tnail3 from "./../assets/image-product-3-thumbnail.jpg"
import tnail4 from "./../assets/image-product-4-thumbnail.jpg"
import img1 from "./../assets/image-product-1.jpg"
import img2 from "./../assets/image-product-2.jpg"
import img3 from "./../assets/image-product-3.jpg"
import img4 from "./../assets/image-product-4.jpg"



const Display = () => {
  const thumbnails = [tnail1, tnail2, tnail3, tnail4]
  const imgs = [img1, img2, img3, img4]
  const [active, setActive] = useState(0)
  return (
    <div className='flex flex-col w-1/3'>
      <img src={imgs[active]} alt='main-img' className='w-full rounded-xl aspect-square mb-7'  />
      <div className='flex w-full justify-between'>
        {
          thumbnails.map((item, key) => {
            return (
              <Thumbnail src={item} key={key} active={active} idx={key} setActive={setActive}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Display


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