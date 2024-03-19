import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MobileNav from './components/MobileNav'

function App() {
  const [sideMenu, setSideMenu] = useState(true)

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  return (
    <>
      <div className='h-screen bg-theme-grey-100 dark:bg-theme-grey-400 poppins'>
        <Header />
        {sideMenu && <MobileNav />}

        <button className="absolute right-10 top-[28px] md:hidden" onClick={toggleSideMenu}>
          <div className={`text-theme-grey-400 w-10 h-10 relative focus:outline-none rounded-full bg-transparent  ${sideMenu ? "dark:text-theme-grey-400" : "dark:text-white"}`}>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${sideMenu ? 'rotate-45' : '-translate-y-1.5'}`}></span>
              <span className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${sideMenu ? 'opacity-0' : ''}`}></span>
              <span className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${sideMenu ? '-rotate-45' : 'translate-y-1.5'}`}></span>
            </div>
          </div>
        </button>

        <div className='mt-[92px] flex flex-col md:flex-row mx-10 lg:mx-24 items-center text-[14px] text-theme-grey-200 font-normal'>
          <div className='md:w-1/2 flex flex-col gap-5'>
            <p className='text-theme-grey-400 dark:text-white font-medium'>😎  SIMPLE WAY TO COMMUNICATE</p>
            <h1 className='text-6xl mt-[12px] dark:text-white'>Actions for Accessibility in Design</h1>
            <h3 className='text-[18px]'>The fastest way to build and deploy websites with resusable components.</h3>
            <div className='mt-[32px] flex flex-row gap-[32px] text-[16px] font-medium'>
              <button className='bg-theme-purple text-white px-[32px] py-[16px] rounded-xl'>GET STARTED</button>
              <button className='text-theme-purple underline decoration-2 underline-offset-4	'>Get live demo</button>
            </div>
            <div className='flex flex-row gap-[20px] mt-[40px]'>
              <div className='flex items-center gap-[8px]'>
                <img src="Done_ring_round_fill.svg" className='h-6 w-6'/>
                <p>No credit card required</p>
              </div>
              <div className='flex items-center gap-[8px]'>
              <img src="Done_ring_round_fill.svg" className='h-6 w-6'/>
                <p>No software to install</p>
              </div>
            </div>
          </div>


          <div className='md:w-1/2 flex flex-col  -order-1 md:order-2'>
            <img src="hero-image-simple-homepage.png" alt="Hero" />
            </div>
        </div>
        
      </div >
    </>
  )
}

export default App
