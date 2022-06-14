
import React,{ useContext } from 'react';


import { ColorMode, ThemeContext } from '../modules/ThemeProvider';


const Header = () => {
    const { colorMode, setColorMode } = useContext(ThemeContext);
    console.log(colorMode)
    
    return(
        <div className=" bg-transparent w-full overflow-hidden font-Montserrat  duration-500  z-50 "> 
            <div className='flex justify-between items-center'>
                <div className='  px-10 flex'>
                    <span className=' text-2xl  duration-500 ease-in-out font-bold'> 
                        <img src="/images/logo.png" className="invert-1 dark:invert duration-500 ease-in-out "/>
                    </span>
                </div>
                <div className='flex lg:gap-4 mt-2'>
                    <a href="/" className=' text-xs md:text-sm text-black dark:text-white duration-500 ease-in-out'>Cards</a>
                    <a href="/" className=' text-xs md:text-sm text-black dark:text-white duration-500 ease-in-out'>Our Token</a>
                    <a href="/" className=' text-xs md:text-sm text-black dark:text-white duration-500 ease-in-out'>Team</a>
                </div>
                <div className='flex px-10 gap-10'>
                    <button onClick={() => {
                        setColorMode(colorMode === ColorMode.dark ? ColorMode.light : ColorMode.dark)
                        }}>{colorMode === ColorMode.dark ? '' : ''}
                        <svg width="20" height="20" viewBox="0 0 20 20" className='invert dark:invert-0 fill-transparent w-10 duration-500 ease-in-out' >
                            <circle cx="10" cy="10" r="9.5" transform="rotate(-180 10 10)" className=" stroke-white duration-500 ease-in-out"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 20L10 8.74228e-07C4.47715 3.91405e-07 1.35705e-06 4.47715 8.74228e-07 10C3.91405e-07 15.5228 4.47715 20 10 20Z" fill="white" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
      );
    }
      
    export default Header;