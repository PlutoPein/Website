import Header from "../components/Header";
import Hero from "../components/Hero";
import OneApp from "../components/OneApp";
import Landing from "./Landing";




export default function Home() {

  return (
    <div className="  dark:bg-black scroll-smooth w-full h-full transition-colors duration-500">
      <Header/>
      <Hero/>
      <OneApp/>
      <Landing/>
     
    </div>
  );
}