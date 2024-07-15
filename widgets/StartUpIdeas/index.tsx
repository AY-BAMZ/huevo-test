import Image from "next/image";
import React from "react";
import ValueImage from "@/assets/value.png";

function StartUpIdeas() {
  const content = {
    title: " We Value Your Startup Ideas",
    text: "We're here to transform your business idea into reality. Let's bring your vision to life and make the world a better place together.",
  };
  return (
    <div className="w-full  mx-auto flex flex-col">
      <span className="flex items-center w-full justify-start mb-[250px]">
        <span className="body2 right-0 bg-bg-light py-24 px-6 flex flex-col relative w-full mt-16">
          <span className="max-w-[1400px] grid lg:grid-cols-5 grid-cols-3  gap-6 mx-auto justify-between w-full">
            <span className="col-span-2"></span>
            <span className="flex flex-col col-span-3 gap-6">
              <span className="w-[160px] h-[6px] bg-primary-900  rounded-full"></span>
              <h2 className="lg:text-[44px] text-[32px] text-black-900  font-extrabold max-w-[1311px]">
                {content.title}
              </h2>
              <p className="lg:text-[20px] text-[16px]  max-w-[1283px] text-black-700 font-normal">
                {content.text}
              </p>
            </span>
          </span>
          <span className=" max-w-[1300px] mx-auto mb-[-300px] mt-16">
            <Image
              src={ValueImage}
              alt=""
              width={2000}
              height={2000}
              className="aspect-[18/9] object-cover rounded-xl"
            />
          </span>
        </span>
      </span>
    </div>
  );
}

export default StartUpIdeas;
