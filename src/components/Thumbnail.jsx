

import { useDispatch, useSelector } from 'react-redux'
import { setDisplay } from '../features/lightboxSlice'
import { setActive } from '../features/activeImgSlice'


export default function Thumbnail({ src, idx, active }){
  const dispatch = useDispatch()
  return (
    <div className='w-1/5 aspect-square rounded-lg cursor-pointer overflow-hidden relative' style={active==idx ? {
      border: "2px solid #fd7e1b"
    } : {} } onClick={() => dispatch(setActive(idx)) }>
      <div className='w-full aspect-square absolute bg-white/50 hidden' style={active==idx ? {
      display: "block"
    } : {} }/>
      <img src={src} alt='thumbnail' className='w-full' />
    </div>
  )
}