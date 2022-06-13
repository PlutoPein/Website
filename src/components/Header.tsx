
import React,{ useContext } from 'react';


import { ColorMode, ThemeContext } from '../modules/ThemeProvider';


const Header = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)
    
    return(
        <div className="fixed bg-transparent w-full overflow-hidden font-Montserrat py-8 duration-500  z-50 "> 
            <div className='flex justify-between'>
                <div className=' md:mt-1 px-10 flex'>
                    <span className=' text-2xl text-black dark:text-white duration-500 ease-in-out font-bold'> PLUTOPE</span>
                </div>
                <div className='flex gap-4 mt-2'>
                    <a href="/" className=' text-xs md:text-sm text-black dark:text-white duration-500 ease-in-out'>ABOUT US</a>
                    <a href="/" className=' text-xs md:text-sm text-black dark:text-white duration-500 ease-in-out'>EXPLORE</a>
                    <a href="/" className=' text-xs md:text-sm text-black dark:text-white duration-500 ease-in-out'>CONTACT US</a>
                </div>
                <div className='flex px-10 gap-10'>
                    <div className='  text-sm outline outline-2 py-2 px-8 dark:text-white duration-500 ease-in-out'>
                        SIGNUP
                    </div>
                    <button onClick={() => {
                        setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                        }}>{colorMode === ColorMode.dark ? '' : ''}
                        <svg width="20" height="20" viewBox="0 0 20 20" className='hidden dark:block fill-transparent w-10 duration-500 ease-in-out' >
                            <circle cx="10" cy="10" r="9.5" transform="rotate(-180 10 10)" className=" stroke-white duration-500 ease-in-out"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 20L10 8.74228e-07C4.47715 3.91405e-07 1.35705e-06 4.47715 8.74228e-07 10C3.91405e-07 15.5228 4.47715 20 10 20Z" fill="white" />
                        </svg>
                        
                        <svg width="32" height="26" viewBox="0 0 32 26"  className='block dark:hidden fill-transparent w-10 duration-500 ease-in-out' >
                            <circle cx="16" cy="13" r="9.5" className=' stroke-black duration-500 ease-in-out' />
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 3V23C21.5228 23 26 18.5228 26 13C26 7.47715 21.5228 3 16 3Z" className='fill-black' />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      );
    }
      
    export default Header;