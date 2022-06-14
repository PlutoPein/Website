const Laptop = () => {
    return (
        <div className="flex flex-col bg-white dark:bg-black items-center  duration-500 ease-in-out">
            <div className="text-[4.375rem] dark:text-white  duration-500 ease-in-out  font-bold ">
				Manage Your Protfolio
			</div>
            <div className="text-head  font-semibold text-lg">
                Control your assets with one tap, and have fun doing it.
            </div>
            <img src="/images/laptop-3.png" className="w-full "/>
            <div className="text-[2rem] dark:text-white  duration-500 ease-in-out font-bold">
				No minimum capital  💸
			</div>
			<div className="text-[2rem] dark:text-white  duration-500 ease-in-out font-bold ">
				Zero crypto knowledge to start  🔐	
			</div>
        </div>
    );
}


export default Laptop; 