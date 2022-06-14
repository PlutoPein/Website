import HorizontalScroll from "react-scroll-horizontal";


const OneApp = () => {
    return (
        <>
            <HorizontalScroll  reverseScroll = { true }>       
                <div  className="flex">
                    <div className="w-[100vw] h-[100vh] bg-black dark:bg-white  duration-500 ease-in-out">
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
                    <div className=" w-[100vw] h-[100vh] ">
                        <div className=" flex">
                            <img src="images/phone.png"className="pt-[15vh] -ml-[9vw]" />
                            <div className="pl-[10vw] flex flex-col text-[10rem] font-medium font-Montserrat">
                                <div>Send Crypto</div>
                                <div>to Firends &</div>
                                <div>Family</div>
                            </div>
                        </div>
                        <div className="ml-[70vw]">
                            <img src="images/img6.png" className="-mt-[10vh]  w-[244px]" alt="" />
                        </div>
                    </div>
                    <div className="w-[100vw] h-[100vh] bg-black ">
                    
                    </div>
                    <div className="w-[100vw] h-[100vh] bg-black ">
                    
                    </div>
                    <div className="w-[100vw] h-[100vh] bg-black ">
                    
                    </div>
                </div>   
            </HorizontalScroll>     
        </>
    );
}
    
    
export default OneApp; 