import {motion} from 'framer-motion';

const OneApp = () => {
    return (
    
        <div className=" bg-white dark:bg-black  duration-500 ease-in-out pt-[20vh] flex items-center  justify-evenly">
        <img src="/images/p2.png" />
        <div >
            <motion.div  className=" text-[8rem]  text-black dark:text-white font-Inter font-bold ">
                ONE APP
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ ease: "easeIn", delay: 1, duration: 1}} className="  leading-none flex flex-col text-[8rem]  dark:text-down text-prp  font-Inter font-bold ">
                <div>COUNTLESS</div>
                <div>COOL</div>
                <div>FEATURES</div>
            </motion.div>
        </div>  
        
    </div>
    
    );
}


export default OneApp; 