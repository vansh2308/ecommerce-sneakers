import React, { useEffect, useState } from 'react'
import tnail1 from "./../assets/image-product-1-thumbnail.jpg"
import tnail2 from "./../assets/image-product-2-thumbnail.jpg"
import tnail3 from "./../assets/image-product-3-thumbnail.jpg"
import tnail4 from "./../assets/image-product-4-thumbnail.jpg"
import img1 from "./../assets/image-product-1.jpg"
import img2 from "./../assets/image-product-2.jpg"
import img3 from "./../assets/image-product-3.jpg"
import img4 from "./../assets/image-product-4.jpg"

import { useDispatch, useSelector } from 'react-redux'
import { setDisplay } from '../features/lightboxSlice'

import Thumbnail from './Thumbnail'


const Display = () => {
  const dispatch = useDispatch()
  const activeImg = useSelector(state => state.activeImg.value);

  const thumbnails = [tnail1, tnail2, tnail3, tnail4]
  const imgs = [img1, img2, img3, img4]

  return (
    <div className='flex flex-col w-1/3'>
      <img src={imgs[activeImg]} alt='main-img' className='w-full rounded-xl aspect-square mb-7' onClick={() => {
        dispatch(setDisplay(true));
      }}  />
      <div className='flex w-full justify-between'>
        {
          thumbnails.map((item, key) => {
            return (
              <Thumbnail src={item} key={key} active={activeImg} idx={key}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Display
