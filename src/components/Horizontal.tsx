import HorizontalScroll from "react-scroll-horizontal";


const OneApp = () => {
    return (
        <>
            <HorizontalScroll  reverseScroll = { true }>       
                <div  className="flex">
                    <div className="w-[100vw] h-[100vh] bg-black   duration-500 ease-in-out">
                        <div className=" font-Inter font-bold " >
                            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-babe to-tsuma absolute text-[10rem]  ml-[15rem] -rotate-90 mt-[33rem]">
                                SEND
                            </div>
                            <div className=" font-Montserrat text-white absolute text-[10rem] ml-[35rem] -rotate-90 mt-[26rem]">
                                OR
                            </div>
                            <div className=" text-transparent bg-clip-text bg-gradient-to-r from-babe to-tsuma  absolute text-[10rem] ml-[31.5rem] -rotate-90 mt-[17rem]">
                                RECIEVE
                            </div>
                            <div className="  text-white  absolute text-[7rem] ml-[53rem] -rotate-90 mt-[35rem]">
                                CRYPTO
                            </div>
                            <div className="  text-white absolute text-[4rem] ml-[63rem] -rotate-90 mt-[25rem]">
                                INSTANTLY
                            </div>
                            <div className="  text-white absolute text-[3rem] ml-[78rem] -rotate-90 mt-[15rem]">
                                & FREE
                            </div>
                        </div>
                    </div>
                    <div className=" w-[250vw] h-[100vh] dark:bg-black">
                        <div className=" flex">
                            <img src="images/phone.png"className="pt-[15vh] -ml-[9vw]" />
                            <div className="pl-[10vw] dark:text-white flex flex-col text-[10rem] font-medium font-Montserrat">
                                <div>Send Crypto</div>
                                <div>to Friends &</div>
                                <div>Family</div>
                            </div>
                        </div>
                        <div className="ml-[70vw]">
                            <img src="images/img6.png" className="-mt-[10vh]  w-[244px]" alt="" />
                        </div>
                        <div >
                            <div className="pl-[100vw] dark:text-white -mt-[40vh] flex flex-col text-[10rem] font-medium font-Montserrat">
                                <div>Through</div>
                                <div>Phone Number</div>
                            </div>
                        </div>
                        <div className="ml-[130vw]">
                            <img src="images/img7.png" className="-mt-[90vh]  w-[244px]" alt="" />
                        </div>
                        <div >
                            <div className="pl-[170vw] dark:text-white -mt-[10vh]  text-[3rem] font-medium font-Montserrat">
                                <div>No need to enter a lengthy wallet address or select different networks.</div>
                            </div>
                        </div>
                        <div className="ml-[235vw]">
                            <img src="images/img3.png" className="mt-[20vh]  w-[244px]" alt="" />
                        </div>
                    </div>
                    
                    <div className="w-[110vw] h-[100vh] bg-black dark:bg-white">
                        <div className="ml-[25vw] w-[70%] text-white dark:text-black mt-[10vh] text-center  text-[5rem] font-medium font-Montserrat">
                            <div>SCAN A QR CODE TO PAY ANYWHERE FOR ANYTHING</div>
                        </div>
                        <div className="flex">
                            <div className="-ml-[7.5vw] mt-[0vh] flex   text-[10rem] font-medium font-Montserrat">
                                <div className="text-black dark:text-white">O</div>
                                <div className="text-white dark:text-black">R</div>
                            </div>
                            <img src="images/scan_phone.png" className="pt-[0vh] w-[18%] ml-[45vw]" />
                        </div>
                    </div>
                    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-black dark:bg-white">
                        <div className="  text-white dark:text-black mt-[0vh] text-center leading-tight  text-[10rem] font-medium font-Montserrat">
                            <div>Spend your crypto instantly with</div>
                        </div>
                        <img src="images/main_card.png" className="w-[25%] mt-[10vh]  " />
                        <div className="  text-white dark:text-black mt-[10vh] text-center leading-tight  text-[5rem] font-medium font-Montserrat">
                            <div>ACCEPTED WORLDWIDE</div>
                        </div>
                    </div>
                    <div className="w-[110vw] h-[100vh]  bg-white dark:bg-black">
                        <div className="-ml-[7.5vw] mt-[30vh] flex   text-[10rem] font-medium font-Montserrat">
                            <div className="text-white dark:text-black">O</div>
                            <div className="text-black dark:text-white">R</div>
                        </div>
                        <div className="flex justify-center -mt-[45vh]">
                            <div className="pl-[10vw] dark:text-white  leading-tight flex flex-col text-[10rem] font-medium font-Montserrat">
                                <div>SCAN</div>
                                <div>& GO</div>
                              
                            </div>
                        </div>
                    </div>
                    
                </div>   
            </HorizontalScroll>     
        </>
    );
}
    
    
export default OneApp; 