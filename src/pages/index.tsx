import Bcypto from "../components/Bcypto";
import Cardpbanr from "../components/Cardpbanr";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Laptop from "../components/Laptop";
import OneApp from "../components/OneApp";
import Landing from "./Landing";
import CustomCursor from "../components/index"
import Bottom from "../components/Bottom";
import Horizontal from "../components/Horizontal";




export default function Home() {

  return (
    <div className=" cursor-none dark:bg-black scroll-smooth w-full h-full transition-colors duration-500">
       <div className=" hidden  lg:block">
        <CustomCursor/>
      </div>
      <Header/>
      <Hero/>
      <OneApp/>
      <Horizontal/>

      <Laptop/>
      <Bcypto/>
      <Cardpbanr/>
      <Bottom/>
      <Landing/>
     
    </div>
  );
}