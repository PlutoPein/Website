const Cardpbanr = () => {
    return (
        <div className=" pt-[20vh] bg-white dark:bg-black  duration-500 ease-in-out">
            <div className="invert-0 dark:invert  duration-500 ease-in-out flex justify-around">
				<div className="bg-white  rounded-2xl w-[35rem] h-[33rem] drop-shadow-2xl border flex flex-col items-center ">
					<div className="text-[3rem] font-Montserrat font-bold w-[30rem] text-center mt-[10%]">
						Enabling purchase of 130+ assests.
					</div>
					<div className="mt-[5rem]"> 
						<img src="/images/cryptos.png" className="invert-0 dark:invert duration-500 ease-in-out" />
					</div>
				</div>
				<div className="bg-white  rounded-2xl w-[35rem] h-[33rem] drop-shadow-2xl border flex flex-col items-center">
					<div className="text-[3rem] font-Montserrat font-bold w-[30rem] text-center mt-[10%]">
						Seamless, Fast & Secure.
					</div>
					<div className="mt-[5rem]">
						<img src="/images/lock.png" className="invert-0 dark:invert duration-500 ease-in-out"  />
					</div>
				</div>
			</div>
            <div className="pt-[15rem]">
				<div className=" bg-black dark:invert duration-500 ease-in-out w-full box-border h-[10rem] p-4 flex items-center overflow-hidden ">
					<div className="animate">
						{
							[0,1,2,3,4,5,6,7,8,9,10,11].map((_i) => (
								<div className="text-white whitespace-nowrap text-[3.75rem] font-bold font-Roboto inline-flex items-center justify-center">
									• Exchange. Anytime. Anywhere at a lightning-fast speed because Time is money.&nbsp;&nbsp;&nbsp;
								</div>
							))
						}
					</div>
				</div>
			</div>
        </div>
    );
}


export default Cardpbanr; 