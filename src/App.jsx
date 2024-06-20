import './App.css'
import Content from './components/Content'
import Display from './components/Display'
import Lightbox from './components/Lightbox'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'


function App() {
  const lightboxDisplay = useSelector(state => state.lightboxDisplay.value);

  return (
    <div className='w-screen relative h-fit px-[8%] max-[850px]:p-0 overflow-x-hidden'>

      {lightboxDisplay && <Lightbox />}

      <div className='w-full'>
        <Navbar />

        <div className='w-full flex justify-between items-center px-[4%] pb-40 max-[850px]:flex-col max-[850px]:p-0 max-[850px]:-z-10 '>
          <Display />
          <Content />
        </div>

      </div>
     
    </div>
  )
}

export default App
