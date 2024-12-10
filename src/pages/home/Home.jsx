import React from "react";
import Header from "../../components/Header";
import HeroSection from "./components/HeroSection";
import background from "../../images/Frame 1000002425.svg";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="flex items-center gap-[180px] container mx-auto w-full">
        <div className="">
          <img src={background} alt="" />
        </div>
        <div className="flex flex-col gap-[70px]">
          <h1 className=" text-3xl font-bold">Trusted by</h1>
          <div className="flex items-center gap-[35px]">
            <div className="w-[87px] h-[87px] bg-slate-500 rounded-full"></div>
            <div className="w-[87px] h-[87px] bg-slate-500 rounded-full"></div>
            <div className="w-[87px] h-[87px] bg-slate-500 rounded-full"></div>
            <div className="w-[87px] h-[87px] bg-slate-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
