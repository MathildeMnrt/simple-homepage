import React from 'react'
import Toggle from './ToggleDarkMode'

const MobileNav = () => {
    return (
        <div className='bg-white h-screen w-[450px] absolute right-0 top-0 shadow-xl md:hidden'>
            <div className='flex flex-col items-center mt-[100px] h-screen gap-10 text-[60px] font-medium text-theme-grey-200'>
                <button className='text-theme-grey-400'>About us</button>
                <button>Product</button>
                <button>Resource</button>
                <button>Contact</button>
                <Toggle/>
            </div>
        </div>
    )
}

export default MobileNav


