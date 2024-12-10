import React from "react";
import img from "../../../images/Group 309.png";
import img1 from "../../../images/Group 3001.png";
import img2 from "../../../images/Clock.png";
import img3 from "../../../images/image 7.png";

const HeroSection = () => {
  return (
    <div className="container mx-auto pt-[40px]">
      <div className="flex items-center px-[60px] justify-between">
        <div className=" flex flex-col gap-[70px]">
          <div className=" relative">
            <div className=" absolute left-[180px] top-[10px]">
              <img src={img} alt="" width={60} />
            </div>
            <h1 className="text-[3rem] font-bold">
              Insure <br /> and Secure <br /> Your Car
            </h1>
          </div>
          <div className=" flex items-center gap-[30px]">
            <button className=" bg-[#394496] w-[149px] h-[48px] rounded-lg text-white">
              Start Now
            </button>
            <div className=" text-xl flex items-center gap-[12px]">
              <img src={img2} alt="" />
              <h1>24 / 7 Support for Peace of Mind</h1>
            </div>
          </div>
        </div>
        <div className=" relative">
          <div>
            <img src={img1} alt="" width={500} />
          </div>
          <div className=" absolute top-0">
            <h1 className="text-[3rem] text-white font-bold pt-[50px] pl-[15px]">
              Start .. <br /> Your Journey <br /> with Confidence"
            </h1>
            <div className=" pl-[15px]">
              <img src={img3} alt="" width={400} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
