import React from 'react'
import { useEffect, useState } from 'react';

const Toggle = () => {

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    const [darkMode, setDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <button onClick={toggleDarkMode}>

{/*                 {darkMode ? (
                    <>
                        <div className='flex flex-row gap-[4px] bg-theme-grey-300 rounded-full p-0.5'>
                            <img src="Moon_fill.svg" alt="Dark Mode" className='bg-white h-[18px] rounded-full' />
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="4" fill="#ffffff" />
                                <path d="M12 5V3" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M12 21V19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16.9498 7.04996L18.364 5.63574" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M5.63608 18.3644L7.05029 16.9502" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M19 12L21 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M3 12L5 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16.9498 16.95L18.364 18.3643" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                                <path d="M5.63608 5.63559L7.05029 7.0498" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                            </svg>

                        </div>
                    </>
                ) : (
                    <>
                        <div className='flex flex-row gap-[4px] bg-theme-grey-300 rounded-full p-0.5'>
                            <img src="Moon_fill_light.svg" alt="Dark Mode" className='h-[18px]' />
                            <img src="Sun_fill.svg" alt="Light Mode" className='bg-white p-0.5 rounded-full h-[18px]' />
                        </div>
                    </>

                )
                } */}

                <>
                    <div className='flex flex-row gap-[4px] bg-theme-grey-300 rounded-full p-0.5'>
                        <svg width="18" height="18" viewBox="0 0 24 24" className='fill-white dark:bg-white dark:fill-theme-grey-400 rounded-full' xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4C15.292 4 15.438 4 15.5781 4.04183C16.192 4.22522 16.4775 4.93111 16.1637 5.48976C16.0921 5.61719 15.8744 5.82779 15.4389 6.249C13.935 7.70352 13 9.74257 13 12C13 14.2574 13.935 16.2965 15.4389 17.751C15.8744 18.1722 16.0921 18.3828 16.1637 18.5102C16.4775 19.0689 16.192 19.7748 15.5781 19.9582C15.438 20 15.292 20 15 20V20C10.5817 20 7 16.4183 7 12C7 7.58172 10.5817 4 15 4V4Z"/>
                        </svg>
                        <svg width="18" className=' p-0.5 rounded-full h-[18px] fill-theme-grey-400 stroke-theme-grey-400 dark:fill-white dark:stroke-white bg-white dark:bg-transparent' height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 5V3" strokeWidth="2" strokeLinecap="round" />
                            <path d="M12 21V19" strokeWidth="2" strokeLinecap="round" />
                            <path d="M16.9498 7.04996L18.364 5.63574" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5.63608 18.3644L7.05029 16.9502" strokeWidth="2" strokeLinecap="round" />
                            <path d="M19 12L21 12" strokeWidth="2" strokeLinecap="round" />
                            <path d="M3 12L5 12" strokeWidth="2" strokeLinecap="round" />
                            <path d="M16.9498 16.95L18.364 18.3643" strokeWidth="2" strokeLinecap="round" />
                            <path d="M5.63608 5.63559L7.05029 7.0498" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                    </div>
                </>

            </button>
        </>
    )
}

export default Toggle


