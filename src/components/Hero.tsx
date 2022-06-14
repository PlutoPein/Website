import {motion} from 'framer-motion';

const Hero = () => {
    return (
        <>
            <div className=" bg-white dark:bg-black  duration-500 ease-in-out px-[11vh] flex justify-between">
                <div>
                    <div className=" leading-none text-[4.5rem] z-50 text-black dark:text-white  duration-500 ease-in-out font-bold  pt-[23vh]">
                        <div>Spend your crypto</div>
                        <div className="text-prp">anywhere in the world</div>
                        <div>with a Plutope Debit card.</div>
                    </div>
                    <div className="text-2xl  font-Montserrat text-head w-[70%] pt-5 ">
                        Say hello 👋🏻 to financial freedom.  
                    </div>
                    <div className="flex pt-[10vh]  space-x-10">
                        <div className="pl-5 pr-[20vh] py-3 font-Montserrat text-black dark:text-white duration-500 ease-in-out text-xl font-bold flex items-center border  rounded-xl  bg-bbs dark:bg-bbg">
                            Your Email
                        </div>
                        <div className="px-8 bg-black dark:bg-white  duration-500 ease-in-out text-white dark:text-black flex justify-center items-center text-xl font-bold rounded-xl">
                            Join The Waitlist
                        </div>
                    </div>
                </div>
                <div className='' >
                    <motion.div initial={{opacity:0}} animate={{opacity:1, scale:1.5}} transition={{duration:1}} className="absolute z-20  my-[11rem] mx-[3rem] ">
				        <img  src="/images/main_card.png"  />
			        </motion.div>
			        <img src="/images/hero_phone.png"  className="w-[90%] mt-[0rem] "/>                    
			    </div>
			</div>
        </>
      );
}

export default Hero; 