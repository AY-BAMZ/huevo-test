import React from "react";

function WhyCard({ data }: any) {
  return (
    <div className="flex flex-col gap-[90px] items-center col-span-1 py-16 border rounded-md">
      {data.icon}
      <p className="text-center text-[24px] font-semibold max-w-[400px] text-black-800">
        {data.text}
      </p>
    </div>
  );
}

export default WhyCard;
