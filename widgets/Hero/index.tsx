import React from "react";
import Arrow from "@/assets/arrow_down.svg";

function Hero() {
  return (
    <div className="bg-bg-light min-h-[90vh] flex items-center justify-center relative">
      <h1 className="uppercase text-[90px] text-black-900 text-center font-extrabold max-w-[1311px]">
        THIS IS PROvdeD BY jOaN FOR TESTING. <br />
        <span className="text-primary-default">SENIOR FRONTEND DEV</span>
      </h1>
      <span className="absolute w-[308px] h-[154px] rounded-t-full flex border-white border-[4px] bottom-0 flex-col items-center right-[calc(50%-196)] pt-9 justify-between">
        <p>Scroll to Discover</p>
        <Arrow />
        <span className="w-[100px] h-1 bg-primary-default opacity-50 rounded-full"></span>
      </span>
    </div>
  );
}

export default Hero;
