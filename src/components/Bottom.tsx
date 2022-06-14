const Bottom = () => {
        return (
            <div>
                <div className="bg-white dark:bg-black duration-500 ease-in-out flex pt-[10rem]">
                    <div className="w-[70%] mx-[10vh]  ">
                        <div className="text-[6.25rem]  duration-500 ease-in-out text-black dark:text-white font-Montserrat font-bold leading-none ">
                            Stake your favorite crypto and earn rewards.
                        </div>
                        <div className="text-[2.5rem]  duration-500 ease-in-out text-black dark:text-white font-Montserrat pt-20 ml-20">
                            <div className="w-[80%]">
                                Earn up to 12% rewards on staking. Put your portfolio to work and grow it while you HODL.
                            </div>
                            <div className="pt-5 w-[80%]">
                                Our system will find you the best returns for the lowest risk. 
                            </div>
                        </div>
                    </div>
                    <div className="mr-20 pt-[15rem]">
                        <img src="/images/stake.png" />
                    </div>
			    </div>
                <div className="bg-white dark:bg-black duration-500 ease-in-out pt-[15vh]">
                    <div className="bg-down flex flex-col items-center shadow-inner-2xl h-[20rem]">
                        <div className="text-center text-white text-[2.5rem] pt-10  font-Roboto w-[70%]">
                                Even more exciting features are coming, Join the
                            <div> waitlist and get regular updates.</div>
                        </div>
                        <div className="flex  pt-10 space-x-10 ">
                            <div className="font-Montserrat text-xl font-bold flex items-center pl-3 border w-[24rem] h-[4rem] rounded-xl text-white  bg-[#E9E9E9] bg-opacity-40">
                                Your Email
                            </div>
                            <div className=" bg-black text-white flex justify-center items-center text-xl font-bold w-[13rem] rounded-xl">
                                Preorder
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
    );
}


export default Bottom; 