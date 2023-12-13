import './App.css'
import Content from './components/Content'
import Display from './components/Display'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='w-screen h-fit px-[8%]'>
      <div className='w-full'>
        <Navbar />

        <div className='w-full flex justify-between items-center px-[4%] pb-40'>
          <Display />
          <Content />
          

        </div>
        
      </div>
     
    </div>
  )
}

export default App
