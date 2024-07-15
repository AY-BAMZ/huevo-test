import React from "react";
import Icon1 from "@/assets/icon1.svg";
import Icon2 from "@/assets/icon2.svg";
import Icon3 from "@/assets/icon3.svg";
import WhyCard from "@/components/WhyCard";

function ChooseUsWidget() {
  const data = [
    { icon: <Icon1 />, text: "Cost-Effectiveness" },
    { icon: <Icon2 />, text: "Investing in Your Startup's Success" },
    {
      icon: <Icon3 />,
      text: "Multilingual Support- Overcoming Language Barriers",
    },
  ];
  return (
    <div className="py-[160px] px-6">
      <span className="flex flex-col items-center gap-8">
        <span className="w-[160px] h-[6px] bg-primary-900  rounded-full"></span>
        <h2 className="text-[56px] text-black-900 text-center font-extrabold max-w-[1311px]">
          Why Choose Us?
        </h2>
        <p className="text-[22px] text-center max-w-[1283px] text-black-700 font-normal">
          We understand the importance of cost-effective and fast MVP
          development to stand out in the market. Our services offer reasonable
          pricing and a complimentary program tailored to your idea for future
          growth. We support four languages: English, Spanish, Japanese, and
          Korean.
        </p>
      </span>
      <div className=" max-w-[1440px] grid grid-cols-3 gap-16 mx-auto mt-14">
        {data.map((item, index) => (
          <WhyCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ChooseUsWidget;
